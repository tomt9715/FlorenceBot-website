// Guides data with metadata and access levels
// accessLevel: 'free' = available to all users, 'premium' = requires premium subscription
const guidesData = [
    {
        id: 'electrolytes',
        title: 'Electrolyte Management Guide',
        description: 'Essential electrolyte ranges, nursing interventions, and clinical priorities. Includes sodium, potassium, calcium, magnesium, and phosphorus management.',
        category: 'lab-values',
        icon: '⚡',
        file: 'content/guides/electrolytes.md',
        topics: ['Sodium', 'Potassium', 'Calcium', 'Magnesium', 'Phosphorus'],
        readTime: '8 min',
        difficulty: 'Intermediate',
        accessLevel: 'free' // Free preview guide
    },
    {
        id: 'vital-signs',
        title: 'Vital Signs Assessment Guide',
        description: 'Normal ranges, assessment techniques, and critical values for all age groups. Covers heart rate, blood pressure, respiratory rate, temperature, and oxygen saturation.',
        category: 'clinical-skills',
        icon: '💓',
        file: 'content/guides/vital-signs.md',
        topics: ['Heart Rate', 'Blood Pressure', 'Respiratory Rate', 'Temperature', 'SpO₂'],
        readTime: '7 min',
        difficulty: 'Beginner',
        accessLevel: 'free' // Free preview guide
    },
    {
        id: 'critical-lab-values',
        title: 'Critical Laboratory Values',
        description: 'Life-threatening lab values that require immediate notification and intervention. Essential reference for clinical practice and NCLEX preparation.',
        category: 'lab-values',
        icon: '🧪',
        file: 'content/guides/critical-lab-values.md',
        topics: ['Critical Values', 'Lab Ranges', 'Emergency Response'],
        readTime: '6 min',
        difficulty: 'Intermediate',
        accessLevel: 'premium' // Requires premium
    },
    {
        id: 'isolation-precautions',
        title: 'Isolation Precautions Guide',
        description: 'Comprehensive guide to standard, contact, droplet, and airborne precautions. Includes PPE requirements and infection control protocols.',
        category: 'safety',
        icon: '🛡️',
        file: 'content/guides/isolation-precautions.md',
        topics: ['Standard Precautions', 'Contact', 'Droplet', 'Airborne', 'PPE'],
        readTime: '9 min',
        difficulty: 'Intermediate',
        accessLevel: 'premium' // Requires premium
    },
    {
        id: 'medication-math',
        title: 'Medication Dosage Calculations',
        description: 'Essential drug calculations with step-by-step examples and practice problems. Covers dosage calculations, IV rates, and weight-based dosing.',
        category: 'medications',
        icon: '🧮',
        file: 'content/guides/medication-math.md',
        topics: ['Dosage Calculations', 'IV Flow Rates', 'Weight-Based Dosing', 'Conversions'],
        readTime: '12 min',
        difficulty: 'Advanced',
        accessLevel: 'premium' // Requires premium
    }
];

// State management
let currentFilter = 'all';
let searchQuery = '';
let currentGuideContent = null;

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    renderGuides();
    setupEventListeners();
    hideLoader();
});

// Setup all event listeners
function setupEventListeners() {
    // Search functionality
    const searchInput = document.getElementById('guide-search');
    const clearSearchBtn = document.getElementById('clear-search');

    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase();
        clearSearchBtn.style.display = searchQuery ? 'block' : 'none';
        filterAndRenderGuides();
    });

    clearSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        searchQuery = '';
        clearSearchBtn.style.display = 'none';
        filterAndRenderGuides();
    });

    // Filter chips
    const filterChips = document.querySelectorAll('.filter-chip');
    filterChips.forEach(chip => {
        chip.addEventListener('click', () => {
            filterChips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            currentFilter = chip.dataset.category;
            filterAndRenderGuides();
        });
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === '/' && document.activeElement !== searchInput) {
            e.preventDefault();
            searchInput.focus();
        }
    });
}

// Filter and render guides based on search and category
function filterAndRenderGuides() {
    const filtered = guidesData.filter(guide => {
        // Category filter
        const categoryMatch = currentFilter === 'all' || guide.category === currentFilter;

        // Search filter
        const searchMatch = !searchQuery ||
            guide.title.toLowerCase().includes(searchQuery) ||
            guide.description.toLowerCase().includes(searchQuery) ||
            guide.topics.some(topic => topic.toLowerCase().includes(searchQuery));

        return categoryMatch && searchMatch;
    });

    renderGuides(filtered);
}

// Render guide cards
function renderGuides(guides = guidesData) {
    const guidesGrid = document.getElementById('guides-grid');
    const noResults = document.getElementById('no-results');
    const showingCount = document.getElementById('showing-count');

    // Update count
    showingCount.textContent = `Showing ${guides.length} of ${guidesData.length}`;

    if (guides.length === 0) {
        guidesGrid.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }

    guidesGrid.style.display = 'grid';
    noResults.style.display = 'none';

    guidesGrid.innerHTML = guides.map(guide => {
        const isFree = guide.accessLevel === 'free';
        const badgeClass = isFree ? 'bg-success' : 'bg-warning';
        const badgeText = isFree ? 'FREE' : 'PREMIUM';

        return `
        <div class="guide-card category-${guide.category} ${!isFree ? 'locked' : ''}" data-guide-id="${guide.id}">
            <div class="guide-card-header">
                <div class="guide-icon">${guide.icon}</div>
                <div class="d-flex justify-content-between align-items-center w-100">
                    <span class="guide-category">${formatCategory(guide.category)}</span>
                    <span class="badge ${badgeClass}" style="font-size: 0.7rem;">${badgeText}</span>
                </div>
            </div>
            <div class="guide-card-body">
                <h3>${guide.title}${!isFree ? ' <i class="fas fa-lock" style="font-size: 0.9rem; opacity: 0.6;"></i>' : ''}</h3>
                <p class="guide-description">${guide.description}</p>
                <div class="guide-topics">
                    ${guide.topics.slice(0, 3).map(topic => `
                        <span class="topic-tag">${topic}</span>
                    `).join('')}
                    ${guide.topics.length > 3 ? `<span class="topic-tag">+${guide.topics.length - 3} more</span>` : ''}
                </div>
            </div>
            <div class="guide-card-footer">
                <div class="guide-meta mb-3">
                    <span><i class="fas fa-clock"></i> ${guide.readTime}</span>
                    <span><i class="fas fa-signal"></i> ${guide.difficulty}</span>
                </div>
                <div class="d-grid gap-2">
                    ${isFree ? `
                        <button class="btn btn-primary btn-sm preview-btn" data-guide-id="${guide.id}" style="border-radius: 8px;">
                            <i class="fas fa-book-open"></i> View Free Guide
                        </button>
                    ` : `
                        <button class="btn btn-outline-secondary btn-sm locked-btn" style="border-radius: 8px; opacity: 0.7;" disabled>
                            <i class="fas fa-lock"></i> Premium Only
                        </button>
                        <button class="btn btn-primary btn-sm premium-btn" style="border-radius: 8px; background: linear-gradient(135deg, var(--primary-color), var(--secondary-color)); border: none;">
                            <i class="fas fa-crown"></i> Upgrade to Access
                        </button>
                    `}
                </div>
            </div>
        </div>
    `;
    }).join('');

    // Add click listeners for preview buttons
    document.querySelectorAll('.preview-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const guideId = btn.dataset.guideId;
            window.location.href = `guide.html?id=${guideId}`;
        });
    });

    // Add click listeners for premium buttons
    document.querySelectorAll('.premium-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            // Redirect to pricing page
            window.location.href = 'pricing.html';
        });
    });
}

// Format category name for display
function formatCategory(category) {
    return category.split('-').map(word =>
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
}

// Hide page loader
function hideLoader() {
    const loader = document.getElementById('page-loader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 500);
    }
}

// Add keyboard shortcut hint
console.log('%c💡 Keyboard Shortcuts', 'font-size: 14px; font-weight: bold; color: #2563eb;');
console.log('%c/ - Focus search', 'font-size: 12px; color: #6b7280;');

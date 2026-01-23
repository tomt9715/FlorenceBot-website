// Study Guides Page JavaScript
// Handles preview modal, 10% content preview, and purchase flow

// Guide metadata
const guidesData = {
    'electrolytes': {
        title: 'Electrolyte Management Guide',
        file: 'content/guides/electrolytes.md',
        price: 5.99,
        productId: 'electrolytes'
    },
    'vital-signs': {
        title: 'Vital Signs Assessment Guide',
        file: 'content/guides/vital-signs.md',
        price: 5.99,
        productId: 'vital-signs'
    },
    'critical-lab-values': {
        title: 'Critical Laboratory Values',
        file: 'content/guides/critical-lab-values.md',
        price: 5.99,
        productId: 'critical-lab-values'
    },
    'isolation-precautions': {
        title: 'Isolation Precautions Guide',
        file: 'content/guides/isolation-precautions.md',
        price: 5.99,
        productId: 'isolation-precautions'
    },
    'medication-math': {
        title: 'Medication Dosage Calculations',
        file: 'content/guides/medication-math.md',
        price: 5.99,
        productId: 'medication-math'
    }
};

// Current guide being previewed
let currentPreviewGuide = null;

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    setupPreviewButtons();
    setupPurchaseButtons();
    setupModalClose();
    setupSmoothScroll();
    hideLoader();
});

// Setup preview button click handlers
function setupPreviewButtons() {
    const previewButtons = document.querySelectorAll('.btn-preview');

    previewButtons.forEach(button => {
        button.addEventListener('click', async (e) => {
            e.preventDefault();
            const guideId = button.dataset.guideId;
            await openPreviewModal(guideId);
        });
    });
}

// Setup purchase button click handlers
function setupPurchaseButtons() {
    const purchaseButtons = document.querySelectorAll('.btn-purchase');

    purchaseButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const guideId = button.dataset.guideId;
            addToCartAndRedirect(guideId);
        });
    });

    // Modal purchase button
    const modalPurchaseBtn = document.getElementById('btn-purchase-modal');
    if (modalPurchaseBtn) {
        modalPurchaseBtn.addEventListener('click', () => {
            if (currentPreviewGuide) {
                addToCartAndRedirect(currentPreviewGuide);
            }
        });
    }
}

// Setup modal close handlers
function setupModalClose() {
    const modal = document.getElementById('preview-modal');
    const closeBtn = document.getElementById('preview-modal-close');

    if (closeBtn) {
        closeBtn.addEventListener('click', closePreviewModal);
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closePreviewModal();
            }
        });
    }

    // ESC key to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closePreviewModal();
        }
    });
}

// Setup smooth scrolling for category links
function setupSmoothScroll() {
    const categoryLinks = document.querySelectorAll('.topic-card.available');

    categoryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Open preview modal and load content
async function openPreviewModal(guideId) {
    const guide = guidesData[guideId];
    if (!guide) return;

    currentPreviewGuide = guideId;

    const modal = document.getElementById('preview-modal');
    const titleEl = document.getElementById('preview-modal-title');
    const bodyEl = document.getElementById('preview-modal-body');

    // Update title
    titleEl.textContent = guide.title + ' - Preview';

    // Show loading state
    bodyEl.innerHTML = `
        <div class="preview-loading">
            <div class="loader-spinner"></div>
            <p>Loading preview...</p>
        </div>
    `;

    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Load and render content
    try {
        const response = await fetch(guide.file);
        if (!response.ok) throw new Error('Failed to load guide');

        const markdown = await response.text();

        // Calculate 10% of content
        const previewContent = getPreviewContent(markdown, 0.10);

        // Parse markdown to HTML
        const html = typeof marked.parse === 'function'
            ? marked.parse(previewContent)
            : marked(previewContent);

        // Render with preview notice
        bodyEl.innerHTML = `
            <div class="preview-notice">
                <i class="fas fa-info-circle"></i>
                <span>You're viewing the first 10% of this guide. Purchase for full access.</span>
            </div>
            <div class="preview-content markdown-body">
                ${html}
            </div>
            <div class="preview-fade-overlay">
                <div class="preview-unlock-prompt">
                    <i class="fas fa-lock"></i>
                    <p>Continue reading...</p>
                    <button class="btn btn-primary" onclick="addToCartAndRedirect('${guideId}')">
                        <i class="fas fa-unlock"></i> Unlock Full Guide - $5.99
                    </button>
                </div>
            </div>
        `;
    } catch (error) {
        console.error('Error loading guide preview:', error);
        bodyEl.innerHTML = `
            <div class="preview-error">
                <i class="fas fa-exclamation-circle"></i>
                <p>Unable to load preview. Please try again.</p>
                <button class="btn btn-primary" onclick="openPreviewModal('${guideId}')">
                    <i class="fas fa-redo"></i> Try Again
                </button>
            </div>
        `;
    }
}

// Close preview modal
function closePreviewModal() {
    const modal = document.getElementById('preview-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
    currentPreviewGuide = null;
}

// Get preview content (first X% of the guide)
function getPreviewContent(markdown, percentage) {
    // Split by lines
    const lines = markdown.split('\n');

    // Calculate how many lines to show (at least show the header and first section)
    const totalLines = lines.length;
    const previewLines = Math.max(Math.floor(totalLines * percentage), 20);

    // Get preview lines
    let previewContent = lines.slice(0, previewLines).join('\n');

    // Make sure we don't cut off in the middle of a section
    // Find the last complete section (ends with ---)
    const lastSectionBreak = previewContent.lastIndexOf('---');
    if (lastSectionBreak > 100) {
        // If there's a section break, end there
        previewContent = previewContent.substring(0, lastSectionBreak + 3);
    }

    return previewContent;
}

// Add guide to cart and redirect to store
function addToCartAndRedirect(guideId) {
    const guide = guidesData[guideId];
    if (!guide) return;

    // Close modal if open
    closePreviewModal();

    // Add to cart using cart service if available
    if (typeof cartUI !== 'undefined' && typeof cartUI.addToCart === 'function') {
        cartUI.addToCart(
            guide.productId,
            guide.title,
            'individual',
            guide.price
        ).then(() => {
            // Open cart drawer or redirect to store
            if (typeof cartUI.openCart === 'function') {
                cartUI.openCart();
            } else {
                window.location.href = 'store.html';
            }
        });
    } else {
        // Fallback - redirect to store with product highlighted
        window.location.href = `store.html?highlight=${guideId}`;
    }
}

// Hide page loader
function hideLoader() {
    const loader = document.getElementById('page-loader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 300);
    }
}

// Configure marked.js
if (typeof marked !== 'undefined') {
    if (typeof marked.setOptions === 'function') {
        marked.setOptions({
            breaks: true,
            gfm: true,
            headerIds: true,
            mangle: false
        });
    } else if (typeof marked.use === 'function') {
        marked.use({
            breaks: true,
            gfm: true,
            headerIds: true,
            mangle: false
        });
    }
}

// Make addToCartAndRedirect available globally for onclick handlers
window.addToCartAndRedirect = addToCartAndRedirect;

// Store Page JavaScript
// Sidebar Filter Functionality & Shop Type Toggle

document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-item[data-filter]');
    const shopTypeButtons = document.querySelectorAll('.filter-item[data-shop-type]');
    const guideCards = document.querySelectorAll('.guide-card');
    const packageCards = document.querySelectorAll('.package-card');
    const guidesGrid = document.getElementById('guides-grid');
    const packagesGrid = document.getElementById('packages-grid');
    const categoryTitle = document.getElementById('category-title');
    const categoryDescription = document.getElementById('category-description');
    const categoryFilterSection = document.getElementById('category-filter-section');
    const packageCalloutSection = document.getElementById('package-callout-section');
    const switchToPackagesBtn = document.getElementById('switch-to-packages-btn');

    let currentShopType = 'guides'; // Default to individual guides

    // Category metadata
    const categories = {
        'all': {
            title: 'All Study Guides',
            description: 'Browse our complete collection of nursing study guides'
        },
        'med-surg': {
            title: 'Medical-Surgical Nursing',
            description: 'Complex disease management and critical care guides'
        },
        'pharmacology': {
            title: 'Pharmacology',
            description: 'Drug classes, calculations, and medication safety guides'
        },
        'fundamentals': {
            title: 'Fundamentals of Nursing',
            description: 'Essential skills and foundation nursing concepts'
        },
        'maternity': {
            title: 'Maternal & OB Nursing',
            description: 'Pregnancy, labor, delivery, and postpartum care guides'
        },
        'pediatrics': {
            title: 'Pediatric Nursing',
            description: 'Child development, pediatric conditions, and family care guides'
        },
        'mental-health': {
            title: 'Mental Health Nursing',
            description: 'Psychiatric disorders, therapeutic techniques, and crisis intervention guides'
        }
    };

    // Shop Type Toggle (Guides vs Packages)
    shopTypeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const shopType = this.getAttribute('data-shop-type');
            currentShopType = shopType;

            // Update active state on shop type buttons
            shopTypeButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Toggle grid visibility
            if (shopType === 'guides') {
                guidesGrid.style.display = 'grid';
                packagesGrid.style.display = 'none';
                categoryFilterSection.style.display = 'block';
                if (packageCalloutSection) packageCalloutSection.style.display = 'block';

                // Update header
                categoryTitle.textContent = 'All Study Guides';
                categoryDescription.textContent = 'Browse our complete collection of nursing study guides';

                // Reset filter to "All"
                filterButtons.forEach(btn => {
                    if (btn.getAttribute('data-filter') === 'all') {
                        btn.classList.add('active');
                    } else {
                        btn.classList.remove('active');
                    }
                });
            } else if (shopType === 'packages') {
                guidesGrid.style.display = 'none';
                packagesGrid.style.display = 'grid';
                categoryFilterSection.style.display = 'block';
                if (packageCalloutSection) packageCalloutSection.style.display = 'none';

                // Update header
                categoryTitle.textContent = 'Class Packages';
                categoryDescription.textContent = 'Choose Full ($49.99) or Lite ($24.99) packages for each nursing class';

                // Reset filter to "All"
                filterButtons.forEach(btn => {
                    if (btn.getAttribute('data-filter') === 'all') {
                        btn.classList.add('active');
                    } else {
                        btn.classList.remove('active');
                    }
                });

                // Show all packages initially
                packageCards.forEach(card => {
                    card.style.display = 'block';
                });
            }

            // Scroll to top of content
            const storeContent = document.querySelector('.store-content');
            if (storeContent) {
                storeContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // "View Packages" button click handler
    if (switchToPackagesBtn) {
        switchToPackagesBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // Trigger click on packages button
            const packagesBtn = document.getElementById('shop-packages-btn');
            if (packagesBtn) packagesBtn.click();
        });
    }

    // Update filter functionality to work with both guides and packages
    const originalFilterLogic = filterButtons.forEach;
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');

            // Update active state on filter buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Update category header
            if (categories[filter]) {
                if (currentShopType === 'packages') {
                    categoryTitle.textContent = filter === 'all' ? 'Class Packages' : categories[filter].title + ' Package';
                    categoryDescription.textContent = filter === 'all'
                        ? 'Choose Full ($49.99) or Lite ($24.99) packages for each nursing class'
                        : 'Full Package ($49.99) or Lite Package ($24.99)';
                } else {
                    categoryTitle.textContent = categories[filter].title;
                    categoryDescription.textContent = categories[filter].description;
                }
            }

            // Filter cards based on current shop type
            if (currentShopType === 'guides') {
                // Filter guide cards
                guideCards.forEach(card => {
                    const category = card.getAttribute('data-category');

                    if (filter === 'all' || category === filter) {
                        card.style.display = 'flex';
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 10);
                    } else {
                        card.style.display = 'none';
                    }
                });
            } else if (currentShopType === 'packages') {
                // Filter package cards
                packageCards.forEach(card => {
                    const category = card.getAttribute('data-category');

                    if (filter === 'all' || category === filter) {
                        card.style.display = 'block';
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 10);
                    } else {
                        card.style.display = 'none';
                    }
                });
            }

            // Scroll to top of content
            const storeContent = document.querySelector('.store-content');
            if (storeContent && filter !== 'all') {
                storeContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});

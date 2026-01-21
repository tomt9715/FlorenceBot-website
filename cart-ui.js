/**
 * Cart UI - Shopping Cart Interface Components
 * Handles cart drawer, toasts, and button states
 */

/**
 * CartUI class - manages cart user interface
 */
class CartUI {
    constructor() {
        this.drawer = null;
        this.overlay = null;
        this.badge = null;
        this.toastContainer = null;
        this.isInitialized = false;
    }

    /**
     * Initialize cart UI components
     */
    init() {
        if (this.isInitialized) return;

        this.createDrawer();
        this.createToastContainer();
        this.bindEvents();
        this.subscribeToCart();
        this.isInitialized = true;

        // Update badge on init
        this.updateBadge();
    }

    /**
     * Create cart drawer HTML
     */
    createDrawer() {
        // Create overlay
        this.overlay = document.createElement('div');
        this.overlay.className = 'cart-overlay';
        this.overlay.id = 'cart-overlay';

        // Create drawer
        this.drawer = document.createElement('div');
        this.drawer.className = 'cart-drawer';
        this.drawer.id = 'cart-drawer';
        this.drawer.innerHTML = `
            <div class="cart-drawer-header">
                <h2><i class="fas fa-shopping-cart"></i> Your Cart</h2>
                <button class="cart-close-btn" aria-label="Close cart">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="cart-items-container" id="cart-items-container">
                <!-- Items rendered dynamically -->
            </div>
            <div class="cart-drawer-footer">
                <div class="cart-subtotal">
                    <span class="cart-subtotal-label">Subtotal</span>
                    <span class="cart-subtotal-value" id="cart-subtotal">$0.00</span>
                </div>
                <button class="cart-checkout-btn" id="cart-checkout-btn">
                    <i class="fas fa-lock"></i>
                    Proceed to Checkout
                </button>
            </div>
        `;

        // Append to body
        document.body.appendChild(this.overlay);
        document.body.appendChild(this.drawer);

        // Find badge
        this.badge = document.querySelector('.cart-badge');
    }

    /**
     * Create toast notification container
     */
    createToastContainer() {
        this.toastContainer = document.createElement('div');
        this.toastContainer.className = 'cart-toast-container';
        this.toastContainer.id = 'cart-toast-container';
        document.body.appendChild(this.toastContainer);
    }

    /**
     * Bind event listeners
     */
    bindEvents() {
        // Close button
        const closeBtn = this.drawer.querySelector('.cart-close-btn');
        closeBtn.addEventListener('click', () => this.closeDrawer());

        // Overlay click
        this.overlay.addEventListener('click', () => this.closeDrawer());

        // Checkout button
        const checkoutBtn = this.drawer.querySelector('#cart-checkout-btn');
        checkoutBtn.addEventListener('click', () => this.handleCheckout());

        // Cart icon click
        document.addEventListener('click', (e) => {
            if (e.target.closest('.cart-icon-container')) {
                this.toggleDrawer();
            }
        });

        // Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.drawer.classList.contains('active')) {
                this.closeDrawer();
            }
        });
    }

    /**
     * Subscribe to cart changes
     */
    subscribeToCart() {
        if (typeof cartManager !== 'undefined') {
            cartManager.subscribe((cart) => {
                this.renderCart(cart);
                this.updateBadge();
            });
        }
    }

    /**
     * Open cart drawer
     */
    openDrawer() {
        this.drawer.classList.add('active');
        this.overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        this.renderCart(cartManager.cart);
    }

    /**
     * Close cart drawer
     */
    closeDrawer() {
        this.drawer.classList.remove('active');
        this.overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    /**
     * Toggle cart drawer
     */
    toggleDrawer() {
        if (this.drawer.classList.contains('active')) {
            this.closeDrawer();
        } else {
            this.openDrawer();
        }
    }

    /**
     * Render cart contents
     * @param {object} cart - Cart data
     */
    renderCart(cart) {
        const container = document.getElementById('cart-items-container');
        const subtotalEl = document.getElementById('cart-subtotal');
        const checkoutBtn = document.getElementById('cart-checkout-btn');

        if (!container) return;

        const items = cart.items || [];

        if (items.length === 0) {
            container.innerHTML = `
                <div class="cart-empty">
                    <i class="fas fa-shopping-bag"></i>
                    <h3>Your cart is empty</h3>
                    <p>Add study guides to get started!</p>
                    <a href="store.html" class="btn btn-primary" onclick="cartUI.closeDrawer()">
                        Browse Guides
                    </a>
                </div>
            `;
            subtotalEl.textContent = '$0.00';
            checkoutBtn.disabled = true;
        } else {
            container.innerHTML = items.map(item => this.renderCartItem(item)).join('');
            subtotalEl.textContent = `$${(cart.subtotal || 0).toFixed(2)}`;
            checkoutBtn.disabled = false;

            // Add remove button listeners
            container.querySelectorAll('.cart-item-remove').forEach(btn => {
                btn.addEventListener('click', async (e) => {
                    const productId = e.currentTarget.dataset.productId;
                    await this.removeItem(productId);
                });
            });
        }
    }

    /**
     * Render a single cart item
     * @param {object} item - Cart item data
     * @returns {string} - HTML string
     */
    renderCartItem(item) {
        const typeLabel = this.getTypeLabel(item.product_type);
        const iconClass = this.getTypeIcon(item.product_type);

        return `
            <div class="cart-item" data-product-id="${this.escapeHtml(item.product_id)}">
                <div class="cart-item-icon">
                    <i class="${iconClass}"></i>
                </div>
                <div class="cart-item-details">
                    <div class="cart-item-name">${this.escapeHtml(item.product_name)}</div>
                    <div class="cart-item-type">${typeLabel}</div>
                </div>
                <div class="cart-item-price">$${parseFloat(item.price).toFixed(2)}</div>
                <button class="cart-item-remove" data-product-id="${this.escapeHtml(item.product_id)}" aria-label="Remove item">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        `;
    }

    /**
     * Get human-readable type label
     * @param {string} type - Product type
     * @returns {string}
     */
    getTypeLabel(type) {
        const labels = {
            'individual': 'Study Guide',
            'lite-package': 'Lite Package',
            'full-package': 'Full Package'
        };
        return labels[type] || type;
    }

    /**
     * Get icon class for product type
     * @param {string} type - Product type
     * @returns {string}
     */
    getTypeIcon(type) {
        const icons = {
            'individual': 'fas fa-file-medical',
            'lite-package': 'fas fa-book-medical',
            'full-package': 'fas fa-books-medical'
        };
        return icons[type] || 'fas fa-file';
    }

    /**
     * Update cart badge count
     */
    updateBadge() {
        const badges = document.querySelectorAll('.cart-badge');
        const count = cartManager ? cartManager.getItemCount() : 0;

        badges.forEach(badge => {
            badge.textContent = count;
            if (count === 0) {
                badge.classList.add('empty');
            } else {
                badge.classList.remove('empty');
            }
        });
    }

    /**
     * Animate badge on item add
     */
    animateBadge() {
        const badges = document.querySelectorAll('.cart-badge');
        badges.forEach(badge => {
            badge.classList.add('added');
            setTimeout(() => badge.classList.remove('added'), 300);
        });
    }

    /**
     * Remove item from cart
     * @param {string} productId - Product ID
     */
    async removeItem(productId) {
        try {
            await cartManager.removeItem(productId);
            this.showToast('success', 'Item Removed', 'Item has been removed from your cart.');
            this.updateAddToCartButtons();
        } catch (error) {
            this.showToast('error', 'Error', error.message || 'Failed to remove item.');
        }
    }

    /**
     * Handle checkout button click
     */
    handleCheckout() {
        this.closeDrawer();
        window.location.href = 'checkout.html';
    }

    /**
     * Show toast notification
     * @param {string} type - 'success' or 'error'
     * @param {string} title - Toast title
     * @param {string} message - Toast message
     */
    showToast(type, title, message) {
        const toast = document.createElement('div');
        toast.className = `cart-toast ${type}`;
        toast.innerHTML = `
            <div class="cart-toast-icon">
                <i class="fas ${type === 'success' ? 'fa-check' : 'fa-exclamation-circle'}"></i>
            </div>
            <div class="cart-toast-content">
                <div class="cart-toast-title">${this.escapeHtml(title)}</div>
                <div class="cart-toast-message">${this.escapeHtml(message)}</div>
            </div>
            <button class="cart-toast-close" aria-label="Dismiss">
                <i class="fas fa-times"></i>
            </button>
        `;

        // Add close handler
        toast.querySelector('.cart-toast-close').addEventListener('click', () => {
            this.removeToast(toast);
        });

        this.toastContainer.appendChild(toast);

        // Auto-remove after 4 seconds
        setTimeout(() => this.removeToast(toast), 4000);
    }

    /**
     * Remove toast with animation
     * @param {HTMLElement} toast - Toast element
     */
    removeToast(toast) {
        if (!toast.parentElement) return;
        toast.classList.add('removing');
        setTimeout(() => toast.remove(), 300);
    }

    /**
     * Add item to cart (called from store page buttons)
     * @param {string} productId - Product ID
     * @param {string} productName - Product name
     * @param {string} productType - Product type
     * @param {number} price - Product price
     * @param {HTMLElement} button - Button element (optional)
     */
    async addToCart(productId, productName, productType, price, button = null) {
        if (button) {
            button.classList.add('adding');
            button.disabled = true;
        }

        try {
            await cartManager.addItem(productId, productName, productType, price);
            this.showToast('success', 'Added to Cart', `${productName} has been added to your cart.`);
            this.animateBadge();
            this.updateAddToCartButtons();
        } catch (error) {
            this.showToast('error', 'Error', error.message || 'Failed to add item to cart.');
        } finally {
            if (button) {
                button.classList.remove('adding');
                // Button state will be updated by updateAddToCartButtons
            }
        }
    }

    /**
     * Update all add-to-cart button states
     */
    updateAddToCartButtons() {
        const buttons = document.querySelectorAll('.add-to-cart-btn');
        const cartItems = cartManager ? cartManager.getItems() : [];
        const cartProductIds = cartItems.map(item => item.product_id);

        buttons.forEach(button => {
            const productId = button.dataset.productId;

            if (cartProductIds.includes(productId)) {
                button.classList.add('in-cart');
                button.innerHTML = '<i class="fas fa-check"></i> In Cart';
                button.disabled = true;
            } else if (!button.classList.contains('purchased')) {
                button.classList.remove('in-cart');
                button.innerHTML = '<i class="fas fa-cart-plus"></i> Add to Cart';
                button.disabled = false;
            }
        });
    }

    /**
     * Escape HTML to prevent XSS
     * @param {string} str - String to escape
     * @returns {string}
     */
    escapeHtml(str) {
        if (!str) return '';
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }
}

// Create singleton instance
const cartUI = new CartUI();

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    // Small delay to ensure cart-service is loaded
    setTimeout(() => {
        cartUI.init();
    }, 100);
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CartUI, cartUI };
}

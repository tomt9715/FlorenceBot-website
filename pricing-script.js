// Pricing Page JavaScript
// Subscription-based Access System

document.addEventListener('DOMContentLoaded', function() {

    // ==========================================================================
    // SUBSCRIPTION PLAN BUTTONS
    // ==========================================================================

    const planButtons = document.querySelectorAll('[data-plan]');
    const ctaSubscribeBtn = document.getElementById('cta-subscribe-btn');

    // Handle subscription plan button clicks
    planButtons.forEach(button => {
        button.addEventListener('click', async function() {
            const planId = this.getAttribute('data-plan');
            await handleSubscriptionClick(planId, this);
        });
    });

    // Handle CTA button click (defaults to monthly)
    if (ctaSubscribeBtn) {
        ctaSubscribeBtn.addEventListener('click', async function(e) {
            e.preventDefault();
            await handleSubscriptionClick('monthly-access', this);
        });
    }

    async function handleSubscriptionClick(planId, button) {
        // Check if user is logged in
        if (!isAuthenticated()) {
            // Store intended plan and redirect to login
            sessionStorage.setItem('intendedPlan', planId);
            window.location.href = '/login.html?redirect=pricing';
            return;
        }

        // Show loading state
        const originalText = button.innerHTML;
        button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Preparing checkout...';
        button.disabled = true;
        button.style.opacity = '0.8';

        try {
            // Get user email - try multiple sources
            let userEmail = null;

            // Try getCurrentUser() first
            const user = getCurrentUser();
            if (user && user.email) {
                userEmail = user.email;
            }

            // If no email in localStorage, fetch from API
            if (!userEmail) {
                try {
                    const profileData = await apiCall('/user/profile');
                    if (profileData && profileData.email) {
                        userEmail = profileData.email;
                    }
                } catch (profileError) {
                    console.error('Failed to fetch profile:', profileError);
                }
            }

            if (!userEmail) {
                throw new Error('Unable to get your account email. Please log out and log back in.');
            }

            // Create Stripe checkout session
            const data = await createSubscriptionCheckout(planId, userEmail);

            // Redirect to Stripe Checkout
            if (data.url) {
                button.innerHTML = '<i class="fas fa-external-link-alt"></i> Redirecting to Stripe...';
                window.location.href = data.url;
            } else {
                throw new Error('No checkout URL returned');
            }

        } catch (error) {
            console.error('Subscription checkout error:', error);
            button.innerHTML = originalText;
            button.disabled = false;
            button.style.opacity = '1';

            // Show a nicer error toast instead of alert
            showSubscriptionError(error.message || 'Unable to start checkout. Please try again.');
        }
    }

    // Show error message as a toast notification
    function showSubscriptionError(message) {
        // Remove any existing error toast
        const existingToast = document.querySelector('.subscription-error-toast');
        if (existingToast) existingToast.remove();

        const toast = document.createElement('div');
        toast.className = 'subscription-error-toast';
        toast.innerHTML = `
            <i class="fas fa-exclamation-circle"></i>
            <span>${message}</span>
            <button onclick="this.parentElement.remove()" aria-label="Dismiss">
                <i class="fas fa-times"></i>
            </button>
        `;
        document.body.appendChild(toast);

        // Auto-remove after 5 seconds
        setTimeout(() => toast.remove(), 5000);
    }

    // Check if user came back after login with an intended plan
    const intendedPlan = sessionStorage.getItem('intendedPlan');
    if (intendedPlan && isAuthenticated()) {
        sessionStorage.removeItem('intendedPlan');
        // Find and click the button for the intended plan
        const planButton = document.querySelector(`[data-plan="${intendedPlan}"]`);
        if (planButton) {
            // Small delay to ensure page is fully loaded
            setTimeout(() => {
                planButton.click();
            }, 500);
        }
    }

    // ==========================================================================
    // FREE GUIDE PDF DOWNLOAD
    // ==========================================================================

    // Free Guide PDF Download functionality
    const freeGuideButtons = document.querySelectorAll('[data-free-guide]');

    freeGuideButtons.forEach(button => {
        button.addEventListener('click', async function() {
            const guideId = this.getAttribute('data-free-guide');
            const originalText = this.innerHTML;

            // Show loading state
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating PDF...';
            this.disabled = true;

            try {
                // Get API URL from apiService if available, otherwise use default
                const apiUrl = (typeof apiService !== 'undefined' && apiService.baseUrl)
                    ? apiService.baseUrl
                    : 'https://api.thenursingcollective.pro';

                const response = await fetch(`${apiUrl}/api/guides/free/${guideId}/pdf`, {
                    method: 'GET'
                });

                if (!response.ok) {
                    const errorData = await response.json().catch(() => ({}));
                    throw new Error(errorData.message || 'Failed to generate PDF');
                }

                // Get the PDF blob and download it
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);

                // Create a temporary link to trigger download
                const a = document.createElement('a');
                a.href = url;
                a.download = `TNC-${guideId}.pdf`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);

                // Show success state
                this.innerHTML = '<i class="fas fa-check"></i> Downloaded!';
                setTimeout(() => {
                    this.innerHTML = originalText;
                    this.disabled = false;
                }, 2000);

            } catch (error) {
                console.error('Free guide PDF download error:', error);
                this.innerHTML = '<i class="fas fa-exclamation-circle"></i> Error';
                setTimeout(() => {
                    this.innerHTML = originalText;
                    this.disabled = false;
                }, 2000);
                alert('Unable to download PDF. Please try again or contact support.');
            }
        });
    });

    // Tier Toggle functionality
    const tierToggles = document.querySelectorAll('.tier-toggle');
    const tierDescription = document.getElementById('tier-description');
    let currentTier = 'full'; // Default to Full tier

    tierToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const selectedTier = this.getAttribute('data-tier');

            // Update active state on toggle buttons
            tierToggles.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            // Update current tier
            currentTier = selectedTier;

            // Switch tier description content
            if (tierDescription) {
                const fullContent = tierDescription.querySelector('.full-tier-content');
                const liteContent = tierDescription.querySelector('.lite-tier-content');

                if (selectedTier === 'full') {
                    fullContent.style.display = 'block';
                    liteContent.style.display = 'none';
                } else {
                    fullContent.style.display = 'none';
                    liteContent.style.display = 'block';
                }
            }

            // Update all price displays
            const fullPrices = document.querySelectorAll('.full-price');
            const litePrices = document.querySelectorAll('.lite-price');

            fullPrices.forEach(price => {
                price.style.display = selectedTier === 'full' ? 'block' : 'none';
            });

            litePrices.forEach(price => {
                price.style.display = selectedTier === 'lite' ? 'block' : 'none';
            });

            // Update button text
            const buttonTexts = document.querySelectorAll('.btn-text');
            buttonTexts.forEach(btnText => {
                if (selectedTier === 'full') {
                    btnText.textContent = 'Get Full Package';
                } else {
                    btnText.textContent = 'Get Lite Package';
                }
            });

        });
    });

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach((item, index) => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        if (question && answer) {
            question.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();

                const isActive = item.classList.contains('active');

                // First, close all items (including this one)
                faqItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    if (otherAnswer) {
                        otherAnswer.style.display = 'none';
                    }
                    const otherIcon = otherItem.querySelector('.faq-question i');
                    if (otherIcon) {
                        otherIcon.style.transform = 'rotate(0deg)';
                    }
                });

                // Then, if this item wasn't active before, open it
                if (!isActive) {
                    item.classList.add('active');
                    answer.style.display = 'block';
                    const icon = question.querySelector('i');
                    if (icon) icon.style.transform = 'rotate(180deg)';
                }

            });
        }
    });

    // Optional: Open first FAQ by default
    if (faqItems.length > 0) {
        const firstAnswer = faqItems[0].querySelector('.faq-answer');
        const firstIcon = faqItems[0].querySelector('.faq-question i');
        faqItems[0].classList.add('active');
        if (firstAnswer) firstAnswer.style.display = 'block';
        if (firstIcon) firstIcon.style.transform = 'rotate(180deg)';
    }

    // Add ripple effect to pricing CTAs
    const ctaButtons = document.querySelectorAll('.pricing-cta');

    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');

            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add animation when pricing cards come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe pricing cards
    document.querySelectorAll('.pricing-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Observe stat items
    document.querySelectorAll('.stat-item').forEach(stat => {
        stat.style.opacity = '0';
        stat.style.transform = 'translateY(30px)';
        stat.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(stat);
    });

    // Pricing CTA click handlers (placeholder - replace with actual payment integration)
    document.querySelectorAll('.pricing-cta.primary, .pricing-cta.secondary').forEach(button => {
        if (!button.hasAttribute('onclick')) {
            button.addEventListener('click', function() {
                const planName = this.closest('.pricing-card').querySelector('.plan-name').textContent;

                // For now, just show an alert
                // Replace this with your actual payment integration (Stripe, PayPal, etc.)
                if (planName.includes('Free')) {
                    window.location.href = 'https://discord.gg/y2Mh77wAV2';
                } else {
                    showAlert('Coming Soon', `Checkout for ${planName} plan will be available soon!\n\nThis will integrate with your payment provider (Stripe, PayPal, etc.)`, 'info');
                    // window.location.href = '/checkout?plan=' + encodeURIComponent(planName);
                }
            });
        }
    });

    // Individual Guides Filter functionality
    const filterButtons = document.querySelectorAll('.guide-filter-btn');
    const guideItems = document.querySelectorAll('.guide-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');

            // Update active state on filter buttons
            filterButtons.forEach(btn => {
                btn.style.background = 'transparent';
                btn.style.color = 'var(--text-primary)';
                btn.style.borderColor = 'var(--border-color)';
                btn.classList.remove('active');
            });

            this.style.background = 'var(--primary-color)';
            this.style.color = 'white';
            this.style.borderColor = 'var(--primary-color)';
            this.classList.add('active');

            // Filter guide items
            guideItems.forEach(item => {
                const category = item.getAttribute('data-category');

                if (filter === 'all' || category === filter) {
                    item.style.display = 'block';
                    // Add fade-in animation
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});

// Add ripple animation CSS
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }

    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }

    .guide-filter-btn:hover {
        opacity: 0.9;
        transform: translateY(-2px);
    }

    .guide-item {
        transition: opacity 0.3s ease, transform 0.3s ease;
    }

    /* Subscription error toast */
    .subscription-error-toast {
        position: fixed;
        bottom: 24px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
        border: 1px solid #f87171;
        color: #b91c1c;
        padding: 16px 20px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        gap: 12px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        animation: slideUp 0.3s ease;
        max-width: 90vw;
    }

    .subscription-error-toast i:first-child {
        font-size: 1.2rem;
        flex-shrink: 0;
    }

    .subscription-error-toast span {
        font-weight: 500;
        font-size: 0.95rem;
    }

    .subscription-error-toast button {
        background: none;
        border: none;
        color: #b91c1c;
        cursor: pointer;
        padding: 4px;
        margin-left: 8px;
        opacity: 0.7;
        transition: opacity 0.2s;
    }

    .subscription-error-toast button:hover {
        opacity: 1;
    }

    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateX(-50%) translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Handle smooth scrolling for anchor links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add scroll effect to navbar
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add background blur effect when scrolling
        if (scrollTop > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        }
        
        lastScrollTop = scrollTop;
    });

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe feature cards for animation
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });

    // Add hover effects to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            if (!this.classList.contains('btn-secondary')) {
                this.style.transform = 'translateY(0)';
            }
        });
    });

    // Typing effect for hero title (optional enhancement)
    const heroTitle = document.querySelector('.hero-content h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                heroTitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        
        // Start typing effect after a short delay
        setTimeout(typeWriter, 500);
    }

    // Stats counter animation
    const stats = document.querySelectorAll('.stat-number');
    const animateStats = () => {
        stats.forEach(stat => {
            const target = stat.textContent;
            const isNumber = /^\d+$/.test(target.replace('+', ''));
            
            if (isNumber) {
                const targetNum = parseInt(target.replace('+', ''));
                let current = 0;
                const increment = targetNum / 50;
                
                const updateCount = () => {
                    if (current < targetNum) {
                        current += increment;
                        stat.textContent = Math.floor(current) + '+';
                        setTimeout(updateCount, 30);
                    } else {
                        stat.textContent = target;
                    }
                };
                
                updateCount();
            }
        });
    };

    // Trigger stats animation when hero section is visible
    const heroSection = document.querySelector('.hero');
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(animateStats, 1000); // Start after typing effect
                statsObserver.unobserve(entry.target);
            }
        });
    });
    
    if (heroSection) {
        statsObserver.observe(heroSection);
    }

    // Mobile menu toggle (for future enhancement)
    const createMobileMenu = () => {
        const nav = document.querySelector('.nav-container');
        const navLinks = document.querySelector('.nav-links');
        
        // Create mobile menu button
        const mobileMenuBtn = document.createElement('button');
        mobileMenuBtn.className = 'mobile-menu-btn';
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        mobileMenuBtn.style.display = 'none';
        mobileMenuBtn.style.background = 'none';
        mobileMenuBtn.style.border = 'none';
        mobileMenuBtn.style.color = 'var(--primary-color)';
        mobileMenuBtn.style.fontSize = '1.5rem';
        mobileMenuBtn.style.cursor = 'pointer';
        
        nav.appendChild(mobileMenuBtn);
        
        // Show/hide mobile menu button based on screen size
        const checkScreenSize = () => {
            if (window.innerWidth <= 768) {
                mobileMenuBtn.style.display = 'block';
                navLinks.style.display = 'none';
            } else {
                mobileMenuBtn.style.display = 'none';
                navLinks.style.display = 'flex';
            }
        };
        
        window.addEventListener('resize', checkScreenSize);
        checkScreenSize();
        
        // Toggle mobile menu
        mobileMenuBtn.addEventListener('click', () => {
            if (navLinks.style.display === 'none' || !navLinks.style.display) {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '70px';
                navLinks.style.left = '0';
                navLinks.style.right = '0';
                navLinks.style.background = 'white';
                navLinks.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                navLinks.style.padding = '20px';
                navLinks.style.gap = '15px';
                mobileMenuBtn.innerHTML = '<i class="fas fa-times"></i>';
            } else {
                navLinks.style.display = 'none';
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    };
    
    createMobileMenu();

    // Form handling (for future contact forms)
    const handleFormSubmission = (formId, successMessage) => {
        const form = document.getElementById(formId);
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Add your form submission logic here
                console.log('Form submitted:', new FormData(form));
                
                // Show success message
                alert(successMessage || 'Thank you for your message!');
                form.reset();
            });
        }
    };

    // Initialize any forms
    handleFormSubmission('contact-form', 'Thank you for reaching out! We\'ll get back to you soon.');
});

// Add loading states for external links
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href*="discord"]')) {
        const button = e.target;
        const originalText = button.innerHTML;
        
        button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Opening Discord...';
        button.style.pointerEvents = 'none';
        
        // Reset after 3 seconds
        setTimeout(() => {
            button.innerHTML = originalText;
            button.style.pointerEvents = 'auto';
        }, 3000);
    }
});

// Performance optimization: Lazy load images when added
const lazyLoadImages = () => {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
};

// Initialize lazy loading
lazyLoadImages();

// Add error handling for Discord invite links
const checkDiscordInvite = async (inviteCode) => {
    try {
        // This would typically check if the invite is valid
        console.log('Checking Discord invite:', inviteCode);
        return true;
    } catch (error) {
        console.error('Discord invite check failed:', error);
        return false;
    }
};

// Console message for developers
console.log(`
🏥 FlorenceBot Pro Website
Built with ❤️ for nursing students

If you're a developer interested in contributing to nursing education tools,
reach out to us at support@florencebot.pro

Tech Stack: Vanilla HTML/CSS/JS
Hosting: Cloudflare Pages
Domain: florencebot.pro
`);

export { lazyLoadImages, checkDiscordInvite };
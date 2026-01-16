// Dashboard Page JavaScript
// User menu toggle and dashboard interactions

// API Configuration
const API_URL = 'https://web-production-592c07.up.railway.app';

// Check authentication
const accessToken = localStorage.getItem('accessToken');
const storedUser = JSON.parse(localStorage.getItem('user') || '{}');

if (!accessToken) {
    // Not logged in, redirect to login
    window.location.href = 'login.html';
}

document.addEventListener('DOMContentLoaded', async function() {
    console.log('Dashboard script loaded');

    // Load user profile from API
    await loadUserProfile();

    // User menu dropdown toggle
    const userMenuBtn = document.getElementById('user-menu-btn');
    const userDropdown = document.getElementById('user-dropdown');

    if (userMenuBtn && userDropdown) {
        userMenuBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            userDropdown.classList.toggle('active');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!userMenuBtn.contains(e.target) && !userDropdown.contains(e.target)) {
                userDropdown.classList.remove('active');
            }
        });

        // Close dropdown when clicking a link
        userDropdown.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function(e) {
                // Handle logout
                if (this.getAttribute('href') === '#logout') {
                    e.preventDefault();
                    if (confirm('Are you sure you want to logout?')) {
                        // Clear auth tokens
                        localStorage.removeItem('accessToken');
                        localStorage.removeItem('refreshToken');
                        localStorage.removeItem('user');
                        window.location.href = 'login.html';
                    }
                }
                userDropdown.classList.remove('active');
            });
        });
    }

    // Animate stats on load
    animateStats();

    // Add smooth scroll for guide cards
    const guideCards = document.querySelectorAll('.guide-item');
    guideCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'all 0.4s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

// Load user profile from API
async function loadUserProfile() {
    try {
        const response = await fetch(`${API_URL}/user/profile`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            if (response.status === 401) {
                // Token expired
                localStorage.clear();
                window.location.href = 'login.html';
                return;
            }
            throw new Error('Failed to load profile');
        }

        const data = await response.json();
        const user = data.user;

        // Update dashboard header
        const dashboardHeader = document.querySelector('.dashboard-header h1');
        if (dashboardHeader) {
            dashboardHeader.textContent = `Welcome back, ${user.first_name}!`;

            // Add admin badge if admin
            if (user.is_admin) {
                const adminBadge = document.createElement('span');
                adminBadge.style.cssText = 'display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 8px 16px; border-radius: 20px; font-weight: 600; margin-left: 12px; font-size: 14px;';
                adminBadge.innerHTML = '<i class="fas fa-crown"></i> Admin';
                dashboardHeader.appendChild(adminBadge);
            }

            // Add premium badge if premium
            if (user.is_premium) {
                const premiumBadge = document.createElement('span');
                premiumBadge.style.cssText = 'display: inline-block; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; padding: 8px 16px; border-radius: 20px; font-weight: 600; margin-left: 12px; font-size: 14px;';
                premiumBadge.innerHTML = '<i class="fas fa-star"></i> Premium';
                dashboardHeader.appendChild(premiumBadge);
            }
        }

        // Update user stats with real data
        updateUserStats(user);

        // Update subscription and Discord status
        updateSubscriptionStatus(user);
        updateDiscordStatus(user);

        // Update user avatar with initials
        const userAvatar = document.querySelector('.user-avatar');
        if (userAvatar && user.first_name) {
            userAvatar.innerHTML = `<span style="font-weight: 600; font-size: 18px;">${user.first_name.charAt(0)}</span>`;
        }

        // Show getting started card for new users (less than 2 days old)
        showGettingStartedCard(user);

        // Load admin dashboard if admin
        if (user.is_admin) {
            await loadAdminDashboard();
        }

        // Update local storage
        localStorage.setItem('user', JSON.stringify(user));

    } catch (error) {
        console.error('Error loading profile:', error);
        alert('Failed to load your profile. Please try logging in again.');
    }
}

// Load admin dashboard stats
async function loadAdminDashboard() {
    try {
        const response = await fetch(`${API_URL}/admin/dashboard`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Failed to load admin dashboard');
        }

        const data = await response.json();
        const stats = data.statistics;

        // Add admin stats card
        const dashboardGrid = document.querySelector('.dashboard-grid');
        if (dashboardGrid) {
            const adminCard = document.createElement('div');
            adminCard.className = 'dashboard-card';
            adminCard.style.cssText = 'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; grid-column: 1 / -1;';

            adminCard.innerHTML = `
                <h3 style="color: white;"><i class="fas fa-crown"></i> Admin Overview</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-top: 20px;">
                    <div style="text-align: center; padding: 20px; background: rgba(255,255,255,0.1); border-radius: 12px;">
                        <div style="font-size: 36px; font-weight: 700;">${stats.total_users}</div>
                        <div style="opacity: 0.9; margin-top: 8px;">Total Users</div>
                    </div>
                    <div style="text-align: center; padding: 20px; background: rgba(255,255,255,0.1); border-radius: 12px;">
                        <div style="font-size: 36px; font-weight: 700;">${stats.premium_users}</div>
                        <div style="opacity: 0.9; margin-top: 8px;">Premium Users</div>
                    </div>
                    <div style="text-align: center; padding: 20px; background: rgba(255,255,255,0.1); border-radius: 12px;">
                        <div style="font-size: 36px; font-weight: 700;">${stats.new_users_today}</div>
                        <div style="opacity: 0.9; margin-top: 8px;">New Today</div>
                    </div>
                    <div style="text-align: center; padding: 20px; background: rgba(255,255,255,0.1); border-radius: 12px;">
                        <div style="font-size: 36px; font-weight: 700;">${stats.active_sessions}</div>
                        <div style="opacity: 0.9; margin-top: 8px;">Active Sessions</div>
                    </div>
                </div>
                <div style="margin-top: 20px; padding: 20px; background: rgba(255,255,255,0.1); border-radius: 12px;">
                    <h4 style="color: white; margin-bottom: 12px;"><i class="fas fa-chart-line"></i> Statistics</h4>
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px;">
                        <div>Verification Rate: <strong>${stats.verification_rate}</strong></div>
                        <div>Premium Rate: <strong>${stats.premium_rate}</strong></div>
                    </div>
                </div>
            `;

            dashboardGrid.insertBefore(adminCard, dashboardGrid.firstChild);
        }

    } catch (error) {
        console.error('Error loading admin dashboard:', error);
    }
}

// Update user stats with real data
function updateUserStats(user) {
    // Calculate days active (days since account creation)
    const createdDate = new Date(user.created_at);
    const today = new Date();
    const daysActive = Math.floor((today - createdDate) / (1000 * 60 * 60 * 24));

    // Format member since date
    const memberSince = createdDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });

    // Update stats
    const stats = document.querySelectorAll('.user-stats .stat');
    if (stats[0]) {
        stats[0].querySelector('.number').textContent = '0'; // TODO: Will be dynamic when guides are tracked
    }
    if (stats[1]) {
        stats[1].querySelector('.number').textContent = daysActive;
    }
    if (stats[2]) {
        stats[2].querySelector('.number').textContent = memberSince;
    }

    // Animate the numeric stats
    animateStats();
}

// Update subscription status card
function updateSubscriptionStatus(user) {
    const createdDate = new Date(user.created_at);
    const memberDate = createdDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

    const subscriptionTitle = document.getElementById('subscription-title');
    const subscriptionStatus = document.getElementById('subscription-status');
    const subscriptionInfo = document.getElementById('subscription-info');
    const accountType = document.getElementById('account-type');
    const memberDateEl = document.getElementById('member-date');
    const subscriptionAction = document.getElementById('subscription-action');

    if (user.is_premium) {
        subscriptionTitle.innerHTML = '<i class="fas fa-crown"></i> Premium Account';
        subscriptionStatus.className = 'status active';
        subscriptionStatus.innerHTML = '<i class="fas fa-check-circle"></i> Active';
        subscriptionInfo.textContent = 'You have full access to all study guides and premium Discord features';
        accountType.textContent = 'Premium';
        memberDateEl.textContent = memberDate;
        subscriptionAction.innerHTML = '<i class="fas fa-heart"></i> Thank You for Being Premium!';
        subscriptionAction.style.cursor = 'default';
        subscriptionAction.onclick = null;
    } else {
        accountType.textContent = 'Free';
        memberDateEl.textContent = memberDate;
    }
}

// Update Discord connection status
function updateDiscordStatus(user) {
    const discordStatus = document.getElementById('discord-status');
    const discordInfo = document.getElementById('discord-info');

    if (user.has_discord) {
        discordStatus.className = 'status connected';
        discordStatus.innerHTML = '<i class="fas fa-check-circle"></i> Connected';
        discordInfo.innerHTML = '<strong>Discord Account Linked</strong><br>Access FlorenceBot in The Nursing Collective server';
    }
}

// Animate dashboard stats
function animateStats() {
    const statNumbers = document.querySelectorAll('.user-stats .number');

    statNumbers.forEach(stat => {
        const finalValue = stat.textContent;
        const isPercentage = finalValue.includes('%');
        const numericValue = parseInt(finalValue);

        if (!isNaN(numericValue)) {
            let currentValue = 0;
            const increment = Math.ceil(numericValue / 30) || 1;
            const duration = 1000; // 1 second
            const stepTime = duration / (numericValue / increment);

            const counter = setInterval(() => {
                currentValue += increment;
                if (currentValue >= numericValue) {
                    currentValue = numericValue;
                    clearInterval(counter);
                }
                stat.textContent = currentValue + (isPercentage ? '%' : '');
            }, stepTime);
        }
    });
}

// Show getting started card for new users
function showGettingStartedCard(user) {
    const gettingStartedCard = document.getElementById('getting-started-card');
    if (!gettingStartedCard) return;

    // Check if user is new (account created less than 2 days ago)
    const createdDate = new Date(user.created_at);
    const today = new Date();
    const daysOld = Math.floor((today - createdDate) / (1000 * 60 * 60 * 24));

    // Check if user has already dismissed the card
    const dismissed = localStorage.getItem('gettingStartedDismissed');

    if (daysOld < 2 && !dismissed) {
        // Show the card
        gettingStartedCard.style.display = 'block';

        // Customize third step based on account type
        if (user.is_premium) {
            document.getElementById('premium-step-title').textContent = 'Explore Premium Features';
            document.getElementById('premium-step-desc').textContent = 'You have access to all study guides and features';
        }

        // Store dismissal in localStorage when user clicks "Got it!"
        const dismissBtn = gettingStartedCard.querySelector('button');
        dismissBtn.onclick = function() {
            gettingStartedCard.style.display = 'none';
            localStorage.setItem('gettingStartedDismissed', 'true');
        };
    }
}

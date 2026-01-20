// Settings Page JavaScript
// Profile management, password change, and OAuth connections

// API Configuration
const API_URL = 'https://web-production-592c07.up.railway.app';

// Check authentication
let accessToken = localStorage.getItem('accessToken');
const storedUser = JSON.parse(localStorage.getItem('user') || '{}');

if (!accessToken) {
    // Not logged in, redirect to login
    window.location.href = 'login.html';
}

// ==========================================
// API Service Layer with Auto-Refresh
// ==========================================

/**
 * Centralized API calling function with automatic token refresh
 * @param {string} endpoint - API endpoint (e.g., '/user/profile')
 * @param {object} options - Fetch options (method, body, etc.)
 * @param {boolean} isRetry - Internal flag to prevent infinite retry loops
 * @returns {Promise<object>} - Response data
 */
async function apiCall(endpoint, options = {}, isRetry = false) {
    const token = localStorage.getItem('accessToken');

    // Default headers
    const headers = {
        'Content-Type': 'application/json',
        ...options.headers
    };

    // Add authorization header if token exists
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    try {
        const response = await fetch(`${API_URL}${endpoint}`, {
            ...options,
            headers
        });

        // Handle 401 Unauthorized - Token expired
        if (response.status === 401 && !isRetry) {
            console.log('Access token expired, attempting refresh...');

            try {
                // Attempt to refresh the token
                const newToken = await refreshToken();

                // Retry the original request with new token
                return await apiCall(endpoint, options, true);

            } catch (refreshError) {
                console.error('Token refresh failed:', refreshError);
                // Refresh failed, logout user
                performLogout();
                throw new Error('Session expired. Please login again.');
            }
        }

        // Parse response
        const data = await response.json();

        // Handle other errors
        if (!response.ok) {
            throw new Error(data.error || `Request failed with status ${response.status}`);
        }

        return data;

    } catch (error) {
        // Network or parsing error
        if (error.message.includes('Session expired')) {
            throw error;
        }
        console.error('API call error:', error);
        throw error;
    }
}

/**
 * Refresh the access token using the refresh token
 * @returns {Promise<string>} - New access token
 */
async function refreshToken() {
    const refreshToken = localStorage.getItem('refreshToken');

    if (!refreshToken) {
        throw new Error('No refresh token available');
    }

    try {
        const response = await fetch(`${API_URL}/auth/refresh`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ refresh_token: refreshToken })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || 'Token refresh failed');
        }

        // Update tokens
        localStorage.setItem('accessToken', data.access_token);
        if (data.refresh_token) {
            localStorage.setItem('refreshToken', data.refresh_token);
        }
        localStorage.setItem('tokenTimestamp', Date.now().toString());

        // Update global accessToken variable
        accessToken = data.access_token;

        console.log('Token refreshed successfully');
        return data.access_token;

    } catch (error) {
        console.error('Token refresh error:', error);
        throw error;
    }
}

/**
 * Logout function with cross-tab synchronization
 */
function performLogout() {
    // Clear all auth data
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
    localStorage.removeItem('tokenTimestamp');

    // Set logout flag for cross-tab sync
    localStorage.setItem('logoutEvent', Date.now().toString());

    // Redirect to login
    window.location.href = 'login.html';
}

// Listen for cross-tab logout events
window.addEventListener('storage', function(e) {
    if (e.key === 'logoutEvent' && e.newValue) {
        // Another tab logged out, clear local data and redirect
        console.log('Logout detected in another tab');
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('user');
        localStorage.removeItem('tokenTimestamp');
        window.location.href = 'login.html';
    }
});

document.addEventListener('DOMContentLoaded', async function() {

    // Load user profile
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
                    // Use performLogout for cross-tab sync
                    performLogout();
                }
                userDropdown.classList.remove('active');
            });
        });
    }

    // Profile form submission
    const profileForm = document.getElementById('profile-form');
    if (profileForm) {
        profileForm.addEventListener('submit', handleProfileUpdate);
    }

    // Password form submission
    const passwordForm = document.getElementById('password-form');
    if (passwordForm) {
        passwordForm.addEventListener('submit', handlePasswordChange);

        // Add password strength indicator
        const newPasswordInput = document.getElementById('new-password');
        const confirmPasswordInput = document.getElementById('confirm-new-password');

        if (newPasswordInput) {
            newPasswordInput.addEventListener('input', function() {
                updatePasswordStrength(this.value, 'settings-password-strength');
            });
        }

        // Add password match indicator
        if (confirmPasswordInput && newPasswordInput) {
            confirmPasswordInput.addEventListener('input', function() {
                checkPasswordMatch(newPasswordInput.value, this.value, 'settings-password-match');
            });
            newPasswordInput.addEventListener('input', function() {
                if (confirmPasswordInput.value) {
                    checkPasswordMatch(this.value, confirmPasswordInput.value, 'settings-password-match');
                }
            });
        }
    }
});

// Load user profile and populate form
async function loadUserProfile() {
    try {
        // Use apiCall for automatic token refresh
        const data = await apiCall('/user/profile', {
            method: 'GET'
        });

        const user = data.user;

        // Populate profile form
        document.getElementById('first-name').value = user.first_name || '';
        document.getElementById('last-name').value = user.last_name || '';
        document.getElementById('email').value = user.email || '';
        document.getElementById('nursing-program').value = user.nursing_program || '';

        // Update user avatar with initials
        const userAvatar = document.querySelector('.user-avatar');
        if (userAvatar && user.first_name) {
            userAvatar.innerHTML = `<span style="font-weight: 600; font-size: 18px;">${user.first_name.charAt(0)}</span>`;
        }

        // Update OAuth connection status
        updateOAuthStatus(user);

        // Update local storage
        localStorage.setItem('user', JSON.stringify(user));

    } catch (error) {
        console.error('Error loading profile:', error);
        showAlert('Profile Load Failed', 'Failed to load your profile. Please try logging in again.', 'error');
    }
}

// Update OAuth connection status
function updateOAuthStatus(user) {
    // Discord
    const discordStatus = document.getElementById('discord-connection-status');
    const discordBtn = document.getElementById('discord-connect-btn');
    if (user.has_discord) {
        discordStatus.textContent = 'Connected';
        discordStatus.style.color = '#10b981';
        discordBtn.innerHTML = '<i class="fas fa-unlink"></i> Disconnect';
        discordBtn.onclick = () => showAlert('Coming Soon', 'Disconnect feature will be available soon!', 'info');
    } else {
        discordBtn.onclick = () => connectOAuthProvider('discord');
    }

    // Google
    const googleStatus = document.getElementById('google-connection-status');
    const googleBtn = document.getElementById('google-connect-btn');
    if (user.has_google) {
        googleStatus.textContent = 'Connected';
        googleStatus.style.color = '#10b981';
        googleBtn.innerHTML = '<i class="fas fa-unlink"></i> Disconnect';
        googleBtn.onclick = () => showAlert('Coming Soon', 'Disconnect feature will be available soon!', 'info');
    } else {
        googleBtn.onclick = () => connectOAuthProvider('google');
    }
}

// Connect OAuth provider
async function connectOAuthProvider(provider) {
    try {
        const response = await fetch(`${API_URL}/auth/oauth/${provider}`, {
            method: 'GET',
            
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();

        if (!response.ok || !data.authorization_url) {
            throw new Error(`Failed to get ${provider} authorization URL`);
        }

        // Store current page to return after OAuth
        localStorage.setItem('oauth_return_page', 'settings.html');

        // Redirect to OAuth provider
        window.location.href = data.authorization_url;

    } catch (error) {
        console.error(`Error connecting ${provider}:`, error);
        showAlert('Connection Failed', `Failed to connect ${provider}. Please try again.`, 'error');
    }
}

// Handle profile update
async function handleProfileUpdate(e) {
    e.preventDefault();

    const submitBtn = e.target.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Saving...';

    try {
        // Use apiCall for automatic token refresh
        const data = await apiCall('/user/profile', {
            method: 'PUT',
            body: JSON.stringify({
                first_name: document.getElementById('first-name').value,
                last_name: document.getElementById('last-name').value,
                nursing_program: document.getElementById('nursing-program').value
            })
        });

        // Update local storage
        localStorage.setItem('user', JSON.stringify(data.user));

        // Show success message
        showSuccess('Profile updated successfully!');

        // Update avatar if name changed
        const userAvatar = document.querySelector('.user-avatar');
        if (userAvatar && data.user.first_name) {
            userAvatar.innerHTML = `<span style="font-weight: 600; font-size: 18px;">${data.user.first_name.charAt(0)}</span>`;
        }

    } catch (error) {
        console.error('Error updating profile:', error);
        showAlert('Update Failed', error.message || 'Failed to update profile. Please try again.', 'error');
    } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fas fa-save"></i> Save Changes';
    }
}

// Handle password change
async function handlePasswordChange(e) {
    e.preventDefault();

    const currentPassword = document.getElementById('current-password').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-new-password').value;

    // Validate passwords match
    if (newPassword !== confirmPassword) {
        showAlert('Password Mismatch', 'New passwords do not match!', 'warning');
        return;
    }

    // Validate password length
    if (newPassword.length < 8) {
        showAlert('Weak Password', 'Password must be at least 8 characters long!', 'warning');
        return;
    }

    const submitBtn = e.target.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Updating...';

    try {
        // Use apiCall for automatic token refresh
        await apiCall('/user/change-password', {
            method: 'POST',
            body: JSON.stringify({
                current_password: currentPassword,
                new_password: newPassword
            })
        });

        // Show success message
        showSuccess('Password updated successfully!');

        // Clear form
        document.getElementById('password-form').reset();

    } catch (error) {
        console.error('Error updating password:', error);
        showAlert('Update Failed', error.message || 'Failed to update password. Please try again.', 'error');
    } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fas fa-key"></i> Update Password';
    }
}

// Password strength checker
function updatePasswordStrength(password, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const strengthBar = container.querySelector('.strength-bar');
    const strengthText = container.querySelector('.strength-text');

    if (!password) {
        strengthBar.style.width = '0%';
        strengthText.textContent = '';
        return;
    }

    let strength = 0;
    let label = '';
    let color = '';

    // Check password criteria
    if (password.length >= 8) strength++;
    if (password.length >= 12) strength++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[^a-zA-Z0-9]/.test(password)) strength++;

    // Determine strength level
    if (strength <= 1) {
        label = 'Weak';
        color = '#ef4444';
    } else if (strength === 2) {
        label = 'Fair';
        color = '#f59e0b';
    } else if (strength === 3) {
        label = 'Good';
        color = '#3b82f6';
    } else if (strength === 4) {
        label = 'Strong';
        color = '#10b981';
    } else {
        label = 'Very Strong';
        color = '#059669';
    }

    const width = (strength / 5) * 100;
    strengthBar.style.width = width + '%';
    strengthBar.style.backgroundColor = color;
    strengthText.textContent = label;
    strengthText.style.color = color;
}

// Check if passwords match
function checkPasswordMatch(password1, password2, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (!password2) {
        container.textContent = '';
        return;
    }

    if (password1 === password2) {
        container.textContent = '✓ Passwords match';
        container.style.color = '#10b981';
    } else {
        container.textContent = '✗ Passwords do not match';
        container.style.color = '#ef4444';
    }
}

/**
 * API Service Layer
 * Centralized API service with automatic token refresh and error handling
 * Uses HttpOnly cookies for secure token storage
 */

// API Configuration
const API_URL = 'https://web-production-592c07.up.railway.app';

/**
 * Centralized API calling function with automatic token refresh
 * @param {string} endpoint - API endpoint (e.g., '/user/profile')
 * @param {object} options - Fetch options (method, body, etc.)
 * @param {boolean} isRetry - Internal flag to prevent infinite retry loops
 * @returns {Promise<object>} - Response data
 */
async function apiCall(endpoint, options = {}, isRetry = false) {
    // Default headers
    const headers = {
        'Content-Type': 'application/json',
        ...options.headers
    };

    try {
        const response = await fetch(`${API_URL}${endpoint}`, {
            ...options,
            headers,
            credentials: 'include' // Send cookies with request
        });

        // Handle 401 Unauthorized - Token expired
        if (response.status === 401 && !isRetry) {
            console.log('Access token expired, attempting refresh...');

            try {
                // Attempt to refresh the token
                await refreshToken();

                // Retry the original request with new token (cookie will be updated)
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
 * Refresh the access token using the refresh token cookie
 * @returns {Promise<void>}
 */
async function refreshToken() {
    try {
        const response = await fetch(`${API_URL}/auth/refresh`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include' // Send cookies with request
        });

        if (!response.ok) {
            const data = await response.json();
            throw new Error(data.error || 'Token refresh failed');
        }

        console.log('Token refreshed successfully');

    } catch (error) {
        console.error('Token refresh error:', error);
        throw error;
    }
}

/**
 * Logout function with cross-tab synchronization
 */
async function performLogout() {
    try {
        // Call logout endpoint to clear cookies and revoke session
        await fetch(`${API_URL}/auth/logout`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include'
        });
    } catch (error) {
        console.error('Logout API call failed:', error);
    }

    // Clear local user data (not tokens - those are HttpOnly cookies)
    localStorage.removeItem('user');

    // Set logout flag for cross-tab sync
    localStorage.setItem('logoutEvent', Date.now().toString());

    // Redirect to login
    window.location.href = 'login.html';
}

/**
 * Check if user is authenticated
 * Uses presence of user data as indicator (tokens are in HttpOnly cookies)
 * @returns {boolean} - True if user appears to be authenticated
 */
function isAuthenticated() {
    return !!localStorage.getItem('user');
}

/**
 * Get current user from localStorage
 * @returns {object} - User object or empty object
 */
function getCurrentUser() {
    return JSON.parse(localStorage.getItem('user') || '{}');
}

/**
 * Update current user in localStorage
 * @param {object} userData - User data to store
 */
function setCurrentUser(userData) {
    localStorage.setItem('user', JSON.stringify(userData));
}

/**
 * Require authentication - redirect to login if not authenticated
 */
function requireAuth() {
    if (!isAuthenticated()) {
        window.location.href = 'login.html';
    }
}

/**
 * Verify authentication by calling the server
 * Use this when you need to confirm the user is actually authenticated
 * @returns {Promise<object|null>} - User object if authenticated, null otherwise
 */
async function verifyAuth() {
    try {
        const data = await apiCall('/auth/me');
        if (data.user) {
            setCurrentUser(data.user);
            return data.user;
        }
        return null;
    } catch (error) {
        console.error('Auth verification failed:', error);
        return null;
    }
}

// Listen for cross-tab logout events
window.addEventListener('storage', function(e) {
    if (e.key === 'logoutEvent' && e.newValue) {
        // Another tab logged out, clear local data and redirect
        console.log('Logout detected in another tab');
        localStorage.removeItem('user');
        window.location.href = 'login.html';
    }
});

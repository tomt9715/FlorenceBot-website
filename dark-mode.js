// ============================================
// AUTO DARK MODE WITH SUNRISE/SUNSET DETECTION
// ============================================

class DarkModeManager {
    constructor() {
        this.theme = 'light';
        this.autoMode = true;
        this.userLocation = null;
        this.sunriseTime = null;
        this.sunsetTime = null;

        this.init();
    }

    init() {
        // Load saved preferences
        this.loadPreferences();

        // Apply initial theme (from localStorage or system preference)
        this.applyInitialTheme();

        // Set up toggle button
        this.setupToggleButton();

        // Start auto-detection if enabled
        if (this.autoMode) {
            this.startAutoDetection();
        }

        // Check for system preference changes
        this.watchSystemPreference();
    }

    loadPreferences() {
        // Check localStorage for saved preferences
        const savedTheme = localStorage.getItem('theme');
        const savedAutoMode = localStorage.getItem('autoMode');

        if (savedTheme) {
            this.theme = savedTheme;
            this.autoMode = savedAutoMode === 'true';
        } else {
            // Check system preference
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            this.theme = prefersDark ? 'dark' : 'light';
        }
    }

    applyInitialTheme() {
        document.documentElement.setAttribute('data-theme', this.theme);
        this.updateToggleButton();
    }

    setupToggleButton() {
        const toggleBtn = document.getElementById('theme-toggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => {
                this.toggleTheme();
            });
        }
    }

    toggleTheme() {
        // Manual toggle disables auto mode
        this.autoMode = false;
        localStorage.setItem('autoMode', 'false');

        // Toggle theme
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        this.applyTheme();

        // Save preference
        localStorage.setItem('theme', this.theme);
    }

    applyTheme() {
        document.documentElement.setAttribute('data-theme', this.theme);
        this.updateToggleButton();

        // Dispatch event for other components
        window.dispatchEvent(new CustomEvent('themechange', { detail: { theme: this.theme } }));
    }

    updateToggleButton() {
        // Button icons are handled by CSS based on data-theme attribute
        const toggleBtn = document.getElementById('theme-toggle');
        if (toggleBtn) {
            toggleBtn.setAttribute('aria-label',
                this.theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
            );
        }
    }

    async startAutoDetection() {
        // Try to get user location
        if (navigator.geolocation) {
            try {
                const position = await this.getUserLocation();
                this.userLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };

                // Fetch sunrise/sunset times
                await this.fetchSunriseSunset();

                // Apply appropriate theme
                this.autoApplyTheme();

                // Check every minute
                setInterval(() => this.autoApplyTheme(), 60000);

                // Update sunrise/sunset times daily
                setInterval(() => this.fetchSunriseSunset(), 24 * 60 * 60 * 1000);
            } catch (error) {
                console.log('Location denied, using fallback times');
                this.useFallbackTimes();
            }
        } else {
            // Geolocation not supported, use fallback
            this.useFallbackTimes();
        }
    }

    getUserLocation() {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject, {
                timeout: 10000,
                enableHighAccuracy: false
            });
        });
    }

    async fetchSunriseSunset() {
        try {
            const response = await fetch(
                `https://api.sunrise-sunset.org/json?lat=${this.userLocation.lat}&lng=${this.userLocation.lng}&formatted=0`
            );
            const data = await response.json();

            if (data.status === 'OK') {
                this.sunriseTime = new Date(data.results.sunrise);
                this.sunsetTime = new Date(data.results.sunset);
                console.log('Sunrise/Sunset times loaded:', {
                    sunrise: this.sunriseTime.toLocaleTimeString(),
                    sunset: this.sunsetTime.toLocaleTimeString()
                });
            }
        } catch (error) {
            console.error('Failed to fetch sunrise/sunset times:', error);
            this.useFallbackTimes();
        }
    }

    useFallbackTimes() {
        // Use standard times: 6 AM - 6 PM as light mode
        const now = new Date();
        const sunrise = new Date(now);
        sunrise.setHours(6, 0, 0, 0);

        const sunset = new Date(now);
        sunset.setHours(18, 0, 0, 0);

        this.sunriseTime = sunrise;
        this.sunsetTime = sunset;

        this.autoApplyTheme();

        // Check every minute
        setInterval(() => this.autoApplyTheme(), 60000);
    }

    autoApplyTheme() {
        if (!this.autoMode) return;

        const now = new Date();
        const currentHour = now.getHours();
        const currentMinute = now.getMinutes();
        const currentTime = currentHour * 60 + currentMinute;

        let sunriseMinutes = 6 * 60; // Default 6 AM
        let sunsetMinutes = 18 * 60; // Default 6 PM

        if (this.sunriseTime && this.sunsetTime) {
            sunriseMinutes = this.sunriseTime.getHours() * 60 + this.sunriseTime.getMinutes();
            sunsetMinutes = this.sunsetTime.getHours() * 60 + this.sunsetTime.getMinutes();
        }

        // Determine theme based on time
        const shouldBeDark = currentTime < sunriseMinutes || currentTime >= sunsetMinutes;
        const newTheme = shouldBeDark ? 'dark' : 'light';

        // Only update if theme needs to change
        if (newTheme !== this.theme) {
            this.theme = newTheme;
            this.applyTheme();
            console.log(`Auto-switched to ${newTheme} mode`);
        }
    }

    watchSystemPreference() {
        const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
        darkModeQuery.addEventListener('change', (e) => {
            // Only apply if no manual preference is set
            if (!localStorage.getItem('theme') && this.autoMode) {
                this.theme = e.matches ? 'dark' : 'light';
                this.applyTheme();
            }
        });
    }
}

// Initialize dark mode manager when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.darkModeManager = new DarkModeManager();
    });
} else {
    window.darkModeManager = new DarkModeManager();
}

console.log('🌓 Dark Mode Manager loaded - Auto-switching based on sunrise/sunset times');

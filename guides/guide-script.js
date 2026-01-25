// Guide Page JavaScript
// Handles PDF generation via server-side Playwright, download tracking, and UI interactions

// Configuration - set by data attributes on body element
const PRODUCT_ID = document.body.dataset.productId || 'heart-failure';
const GUIDE_NAME = document.body.dataset.guideName || 'Heart-Failure';
const API_URL = 'https://api.thenursingcollective.pro';

// Force light mode on guide pages (don't affect global preference)
document.documentElement.removeAttribute('data-theme');

// Smooth scroll for TOC links
document.querySelectorAll('.table-of-contents a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Get auth token from localStorage (same as api-service.js)
function getAuthToken() {
    return localStorage.getItem('accessToken');
}

// Track download event
async function trackDownload(source) {
    try {
        const token = getAuthToken();
        if (!token) {
            console.log('No auth token - user not logged in, skipping tracking');
            return;
        }

        const response = await fetch(`${API_URL}/cart/downloads/track`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            credentials: 'include',
            body: JSON.stringify({
                product_id: PRODUCT_ID,
                source: source,
                timestamp: new Date().toISOString()
            })
        });

        if (response.ok) {
            console.log(`Download tracked: ${PRODUCT_ID} from ${source}`);
        }
    } catch (error) {
        console.error('Failed to track download:', error);
    }
}

// Download PDF using server-side generation (Playwright)
async function downloadPDF(btn) {
    const originalText = btn ? btn.innerHTML : '';

    if (btn) {
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating PDF...';
        btn.disabled = true;
    }

    try {
        // Track the download
        await trackDownload('guide_page');

        const token = getAuthToken();
        if (!token) {
            throw new Error('Please log in to download guides');
        }

        // Fetch the PDF from the backend
        const response = await fetch(`${API_URL}/api/guides/${PRODUCT_ID}/pdf`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            credentials: 'include'
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
        a.download = `TNC-${GUIDE_NAME}.pdf`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);

        if (btn) {
            btn.innerHTML = '<i class="fas fa-check"></i> Downloaded!';
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.disabled = false;
            }, 2000);
        }
    } catch (error) {
        console.error('PDF download error:', error);
        if (btn) {
            btn.innerHTML = '<i class="fas fa-exclamation-circle"></i> Error';
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.disabled = false;
            }, 2000);
        }
        // Show error message to user
        alert(error.message || 'Unable to download PDF. Please try again or contact support.');
    }
}

// Download PDF button handler
const downloadBtn = document.getElementById('download-pdf-btn');
if (downloadBtn) {
    downloadBtn.addEventListener('click', function() {
        downloadPDF(this);
    });
}

// Check for auto-download parameter (from dashboard PDF button)
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('print') === 'true' || urlParams.get('download') === 'true') {
        // Auto-trigger PDF download after page loads
        setTimeout(() => {
            downloadPDF(document.getElementById('download-pdf-btn'));
        }, 500);
    }
});

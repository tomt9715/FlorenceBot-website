// Reset Password Page Handler

// API Configuration
const API_URL = 'https://api.thenursingcollective.pro';

// Get token from URL
const urlParams = new URLSearchParams(window.location.search);
const resetToken = urlParams.get('token');

// Check if token exists
if (!resetToken) {
    showMessage('Invalid or missing reset token. Please request a new password reset.', 'error');
    document.getElementById('reset-submit-btn').disabled = true;
}

// Password strength indicator
const passwordInput = document.getElementById('new-password');
const passwordStrength = document.getElementById('password-strength');

if (passwordInput && passwordStrength) {
    passwordInput.addEventListener('input', function() {
        const password = this.value;
        const strengthBar = passwordStrength.querySelector('.strength-bar');
        const strengthText = passwordStrength.querySelector('.strength-text');

        if (password.length === 0) {
            passwordStrength.classList.remove('visible');
            return;
        }

        passwordStrength.classList.add('visible');

        // Calculate password strength
        let strength = 0;

        if (password.length >= 8) strength++;
        if (password.length >= 12) strength++;
        if (/[a-z]/.test(password)) strength++;
        if (/[A-Z]/.test(password)) strength++;
        if (/[0-9]/.test(password)) strength++;
        if (/[^a-zA-Z0-9]/.test(password)) strength++;

        strengthBar.className = 'strength-bar';

        if (strength <= 2) {
            strengthBar.classList.add('weak');
            strengthText.textContent = 'Weak password';
            strengthText.style.color = '#ef4444';
        } else if (strength <= 4) {
            strengthBar.classList.add('medium');
            strengthText.textContent = 'Medium password';
            strengthText.style.color = '#f59e0b';
        } else {
            strengthBar.classList.add('strong');
            strengthText.textContent = 'Strong password';
            strengthText.style.color = '#10b981';
        }
    });
}

// Handle reset password form submission
const resetForm = document.getElementById('reset-password-form');
if (resetForm) {
    resetForm.addEventListener('submit', async function(e) {
        e.preventDefault();

        const newPassword = document.getElementById('new-password').value;
        const confirmPassword = document.getElementById('confirm-new-password').value;
        const submitBtn = document.getElementById('reset-submit-btn');

        // Validate passwords match
        if (newPassword !== confirmPassword) {
            showMessage('Passwords do not match. Please try again.', 'error');
            return;
        }

        // Validate password length
        if (newPassword.length < 8) {
            showMessage('Password must be at least 8 characters long.', 'error');
            return;
        }

        // Disable submit button
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Resetting...</span>';

        try {
            const response = await fetch(`${API_URL}/auth/reset-password`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    token: resetToken,
                    new_password: newPassword
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Password reset failed');
            }

            showMessage('Password reset successful! Redirecting to login...', 'success');

            // Redirect to login after 2 seconds
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 2000);

        } catch (error) {
            console.error('Password reset error:', error);
            showMessage(error.message || 'Failed to reset password. Please try again or request a new reset link.', 'error');
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<i class="fas fa-check-circle"></i><span>Reset Password</span>';
        }
    });
}

// Helper function to show messages
function showMessage(message, type) {
    const messageDiv = document.getElementById('reset-message');
    if (messageDiv) {
        messageDiv.style.display = 'block';
        messageDiv.className = type === 'success' ? 'success-message' : 'error-message';
        messageDiv.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
            <span>${message}</span>
        `;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Toggle password visibility
    const togglePassword = document.querySelector('.toggle-password');
    if (togglePassword) {
        togglePassword.addEventListener('click', function() {
            const passwordInput = document.getElementById('password');
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            this.classList.toggle('fa-eye-slash');
        });
    }

    // Form submission
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        const errorMessage = document.getElementById('errorMessage');
        
        // Demo users
        const users = [
            { username: 'user1', password: 'pass1' },
            { username: 'user2', password: 'pass2' },
            { username: 'admin', password: 'admin123' }
        ];
        
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value.trim();
            
            // Simple validation
            if (!username || !password) {
                errorMessage.textContent = 'Please fill in all fields';
                return;
            }
            
            // Check if user exists
            const user = users.find(u => u.username === username && u.password === password);
            
            if (user) {
                // Add loading effect
                const btn = loginForm.querySelector('.login-btn');
                btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
                btn.disabled = true;
                
                // Simulate API call
                setTimeout(() => {
                    // Store login state
                    localStorage.setItem('isLoggedIn', 'true');
                    localStorage.setItem('username', username);
                    
                    // Redirect to home page
                    window.location.href = 'Home.html';
                }, 1500);
            } else {
                errorMessage.textContent = 'Invalid username or password';
                loginForm.classList.add('shake');
                setTimeout(() => {
                    loginForm.classList.remove('shake');
                }, 500);
            }
        });
        
        // Signup link
        document.getElementById('signupLink').addEventListener('click', function(e) {
            e.preventDefault();
            errorMessage.textContent = 'Sign up feature coming soon! Try demo credentials: user1/pass1';
        });
        
        // Social login buttons
        const socialBtns = document.querySelectorAll('.social-btn');
        socialBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                errorMessage.textContent = `${this.textContent.trim()} integration coming soon!`;
            });
        });
    }


// Hamburger Menu Implementation
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger && navLinks) {
    const menuIcon = hamburger.querySelector('i');
    
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        
        // Toggle between menu and close icons
        if (navLinks.classList.contains('active')) {
            menuIcon.textContent = 'close';
            document.body.style.overflow = 'hidden';
        } else {
            menuIcon.textContent = 'menu';
            document.body.style.overflow = '';
        }
    });
    
    // Close menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuIcon.textContent = 'menu';
            document.body.style.overflow = '';
        });
    });
} else {
    console.error('Hamburger menu elements not found - check your HTML IDs');
}
});


document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Add your login logic here
        handleLogin(username, password);
    });
});

function handleLogin(username, password) {
    console.log('Login attempt:', { username });
    // Add your authentication logic here
    
    // Example redirect to dashboard after successful login
    // window.location.href = '../Dashboard/index.html';
}

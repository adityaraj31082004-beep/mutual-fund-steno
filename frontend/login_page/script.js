function login() {
  const email = document.getElementById('email').value;
  alert(`Welcome back, ${email || 'User'}!`);
}

function signup() {
  alert("Redirecting to Sign Up page...");
}

function visitAsGuest() {
  alert("Continuing as Guest...");
  window.location.href = "beginner.html"; // Example: takes user to beginner page
}

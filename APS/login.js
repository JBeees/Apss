document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Example credentials (for testing)
    const validUsername = "user";
    const validPassword = "password";

    if (username === validUsername && password === validPassword) {
        window.location.href = 'core.html';
    } else {
        document.getElementById('errorMessage').textContent = 'Invalid username or password';
    }
});

document.getElementById('createAccountButton').addEventListener('click', function (event) {
    window.location.href = 'registration.html'; 
});

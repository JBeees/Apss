document.getElementById('idenButton').addEventListener('click', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    if (username.trim() === '' || password.trim() === '') {
        errorMessage.textContent = 'Please fill in all the fields.';
    } else {
        window.location.href = 'core.html';
    }
});
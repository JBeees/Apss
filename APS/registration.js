document.getElementById('signButton').addEventListener('click', function (event) {
    event.preventDefault();
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const errorMessage = document.getElementById('errorMessage');
    if (fullname.trim() === '' || email.trim() === '' || phoneNumber.trim() === '') {
        errorMessage.textContent = 'Please fill in all the fields.';
    } else {
        window.location.href = 'identification.html';
    }
});
document.getElementById('haveAccountButton').addEventListener('click', function (event) {
    window.location.href = 'login.html';
});


document.getElementById('payButton').addEventListener('click', function () {
    if (fullname.trim() === '' || email.trim() === '' || phoneNumber.trim() === '') {
        errorMessage.textContent = 'Please fill in all the fields.';
    } else {
        const paymentMethod = document.getElementById('paymentMethod').value;
        alert(`Pembayaran menggunakan ${paymentMethod} sedang diproses...`);
        setTimeout(() => {
            alert('Pembayaran berhasil!');
            window.location.href = 'core.html';
        }, 2000);
    }
});






function processPayment() {
    const paymentMethod = document.getElementById('paymentMethod').value;
    alert(`Pembayaran menggunakan ${paymentMethod} sedang diproses...`);
    setTimeout(() => {
        alert('Pembayaran berhasil!');
        window.location.href = 'core.html';
    }, 2000);
}
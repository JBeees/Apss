document.getElementById('tombolBayar').addEventListener('click', function () {
    // Mengambil elemen select
    const pilihan = document.getElementById('pembayaran');
    const metodePembayaran = pilihan.value;

    // Validasi apakah pengguna sudah memilih metode pembayaran
    if (!metodePembayaran) {
        alert('Silakan pilih metode pembayaran!');
        return;
    }

    // Menampilkan alert dengan metode pembayaran yang dipilih
    alert(`Pembayaran menggunakan ${metodePembayaran} sedang diproses...`);
    setTimeout(() => {
        alert('Pembayaran berhasil!');
        window.location.href = 'core.html'; // Redirect ke core.html
    }, 2000);
});
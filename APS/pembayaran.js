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
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('product');
const productDetails = {
    1: "Honda Beat",
    2: "Suprax",
    3: "Cafe Racer",
    4: "Harley Davidson",
    5: "Kawasaki Ninja",
    6: "Vespa",
    7: "Ducati",
    8: "Scoopy"
};
const priceId = {
    1: 75000,
    2: 77000,
    3: 100000,
    4: 150000,
    5: 150000,
    6: 90000,
    7: 200000,
    8: 75000
}

const sourceImage = {
    1: "ImageSource/beat.png",
    2: "ImageSource/suprax.png",
    3: "ImageSource/cafe.jpg",
    4: "ImageSource/harley.png",
    5: "ImageSource/kawasaki.png",
    6: "ImageSource/vespa.png",
    7: "ImageSource/ducati.jpeg",
    8: "ImageSource/scoopy.png"
}
document.getElementById("imageCore").src = sourceImage[productId];
document.getElementById("namaMotor").textContent = productDetails[productId];
document.getElementById("hargaBayar").textContent = priceId[productId];
document.getElementById("subTotalHarga").textContent = priceId[productId];
document.getElementById("totalHarga").textContent = setTotal();
function setTotal() {
    let tot = 5000;
    tot += priceId[productId];
    return tot;
}
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

document.getElementById('tombolBayar').addEventListener('click', function () {
    const pilihan = document.getElementById('pembayaran');
    const metodePembayaran = pilihan.value;
    if (!metodePembayaran) {
        alert('Silakan pilih metode pembayaran!');
        return;
    }
    alert(`Pembayaran menggunakan ${metodePembayaran} sedang diproses...`);
    setTimeout(() => {
        alert('Pembayaran berhasil!');
        window.location.href = 'core.html?user=' + userId;
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
const days = parseInt(urlParams.get('days'), 10);
document.getElementById("imageCore").src = sourceImage[productId];
document.getElementById("namaMotor").textContent = productDetails[productId];
document.getElementById("hargaBayar").textContent = priceId[productId];
document.getElementById("subTotalHarga").textContent = priceId[productId] + 'x' + days;
document.getElementById("totalHarga").textContent = setTotal(days);
function setTotal(days) {
    let tot = 5000;
    tot = tot + (priceId[productId] * days);
    return tot;
}
const firebaseConfig = {
    apiKey: "AIzaSyAnjoScF9_AAf0GR23PbsE1uGk_Sd6rkqA",
    authDomain: "apscuy-62e59.firebaseapp.com",
    databaseURL: "https://apscuy-62e59-default-rtdb.firebaseio.com",
    projectId: "apscuy-62e59",
    storageBucket: "apscuy-62e59.firebasestorage.app",
    messagingSenderId: "307732212682",
    appId: "1:307732212682:web:4087c2a39ebe8ade50fd33",
    measurementId: "G-GR5EH32WVJ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const userId = urlParams.get('user');

getDoc(doc(db, "users", userId)).then(docSnap => {
    if (docSnap.exists()) {
        const data = docSnap.data();
        document.getElementById("nameSpan").textContent = data.username;
        document.getElementById("emailSpan").textContent = data.email;
        document.getElementById("phoneSpan").textContent = data.phoneNumber;
    } else {
        console.log("No data found for this user");
    }
}).catch(error => {
    console.log("Error getting document:", error);
});
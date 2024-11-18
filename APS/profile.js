import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";

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
const db = getDatabase(app);
const apsDB = ref(db, "apscuy");
var currentUser = localStorage.getItem("currentUser");
function setData() {
    onValue(apsDB, (snapshot) => {
        snapshot.forEach((childSnapshot) => {
            const userData = childSnapshot.val();
            if (userData.username === currentUser) {
                const usernameShow = document.getElementById('usernameShow');
                const emailShow = document.getElementById('emailShow');
                const phoneShow = document.getElementById('phoneShow'); 
                usernameShow.textContent = userData.username;
                emailShow.textContent = userData.email;
                phoneShow.textContent = userData.phoneNumber;
            }
        });
    });
}
window.onload = function() {
    setData(); 
};
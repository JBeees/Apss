import { currentUser } from "./profile.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";
import { get } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);
const apsDB = ref(db, "apscuy");

document.getElementById('createAccountButton').addEventListener('click', function (event) {
    window.location.href = 'registration.html';
});

document.getElementByIdB("loginForm").addEventListener("submit", reloadData);
function reloadData(e) {
    e.preventDefault();
    const username=document.getElementById()
    
}

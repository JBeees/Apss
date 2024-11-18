import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";

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
document.getElementById("SignForm").addEventListener("submit", regisForm);
function regisForm(e) { 
    e.preventDefault();
    var username = getElementVal('username');
    var email = getElementVal('email');
    var phoneNumber = getElementVal('phoneNumber');
    var password = getElementVal('password');
    console.log(username, email, phoneNumber, password);
    saveData(username, email, phoneNumber, password)
    localStorage.setItem("currentUser", username);
    window.location.href = 'core.html';
    document.getElementById("SignForm").reset();
}

const saveData = (username, email, phoneNumber, password) => {
    const tes = push(apsDB);
    set(tes, {
        username: username,
        email: email,
        phoneNumber: phoneNumber,
        password: password
    })
        .then(() => {
            console.log("Data saved successfully!");
        })
        .catch((error) => {
            console.error("Error saving data: ", error);
        });
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
}


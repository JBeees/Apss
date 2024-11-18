import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

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
const usersRef = ref(db, "users");
const auth = getAuth();

document.getElementById("SignForm").addEventListener("submit", regisForm);

function regisForm(e) {
    e.preventDefault();
    const username = getElementVal("username");
    const email = getElementVal("email");
    const password = getElementVal("password");
    const phoneNumber = getElementVal("phoneNumber");
    console.log(username, email, phoneNumber);
    saveUserData(username, email, phoneNumber);
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert('login')
            window.location.href = "core.html";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}

const saveUserData = (username, email, phoneNumber) => {
    const newUserRef = push(usersRef);
    set(newUserRef, {
        username: username,
        email: email,
        phoneNumber: phoneNumber
    })
        .then(() => {
            console.log("User registered successfully!");
        })
        .catch((error) => {
            console.error("Error saving user data:", error);
        });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};

document.getElementById("haveAccountButton").addEventListener('click', function (event) {
    window.location.href = "login.html";
});

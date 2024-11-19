import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

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
const auth = getAuth();
const db = getFirestore(app);

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("SignForm").addEventListener("submit", regisForm);

    document.getElementById("haveAccountButton").addEventListener("click", () => {
        window.location.href = "login.html";
    });
});

async function regisForm(e) {
    e.preventDefault();

    var username = getElementVal("username");
    var email = getElementVal("email");
    var password = getElementVal("password");
    var phoneNumber = getElementVal("phoneNumber");

    // Validate input fields
    if (!username || !email || !password || !phoneNumber) {
        alert("All fields are required!");
        return;
    }

    try {
        // Create user with Firebase Authentication
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Add user data to Firestore
        const docRef = await addDoc(collection(db, "users"), {
            username: username,
            email: email,
            phoneNumber: phoneNumber,
        });

        alert(`User registered successfully. Document ID: ${docRef.id}`);
        window.location.href = "core.html";
    } catch (error) {
        console.error("Error during registration:", error.code, error.message);
        alert("Error: " + error.message);
    }
}

const getElementVal = (id) => {
    return document.getElementById(id)?.value || "";
};

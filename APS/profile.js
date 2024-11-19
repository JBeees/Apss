import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

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

const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('user');

getDoc(doc(db, "users", userId)).then(docSnap => {
    if (docSnap.exists()) {
        const data = docSnap.data();  // Get the document's data
        document.getElementById("usernameShow").textContent = data.username;
        document.getElementById("emailShow").textContent = data.email;
        document.getElementById("phoneShow").textContent = data.phoneNumber;
        document.getElementById('profileBack').setAttribute('href', 'core.html?user=' + userId);
    } else {
        console.log("No data found for this user");
    }
}).catch(error => {
    console.log("Error getting document:", error);
});

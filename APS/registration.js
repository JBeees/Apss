document.getElementById('haveAccountButton').addEventListener('click', function (event) {
    window.location.href = 'login.html';
});

const firebaseConfig = {
    apiKey: "AIzaSyCS7bOqQoFUK7K-A0ieVh6-0j0KD-zKu_U",
    authDomain: "apss-8c1a3.firebaseapp.com",
    projectId: "apss-8c1a3",
    storageBucket: "apss-8c1a3.firebasestorage.app",
    messagingSenderId: "1066731704855",
    appId: "1:1066731704855:web:3d3879a1e5f9fd09244252",
    measurementId: "G-W60N20EG23"
};
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
console.log("Firebase initialized:", app);
document.getElementById('signButton').addEventListener('click', async () => {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const password = document.getElementById('password').value;

    if (username && email && phoneNumber && password) {
        try {
            await db.collection('users').add({
                username: username,
                email: email,
                password: password,
                phoneNumber: phoneNumber,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            });

            alert('User registered successfully!');
            document.getElementById('username').value = '';
            document.getElementById('email').value = '';
            document.getElementById('phoneNumber').value = '';
            document.getElementById('password').value = '';
        } catch (error) {
            console.error('Error adding user data:', error);
            alert('Failed to register user. Please try again.');
        }
    } else {
        alert('Please fill in all fields.');
    }
});


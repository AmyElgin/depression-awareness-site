
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8RPTDWCPMRLl-IirhunsbBvCw-PRytVs",
  authDomain: "depression-b81de.firebaseapp.com",
  projectId: "depression-b81de",
  storageBucket: "depression-b81de.firebasestorage.app",
  messagingSenderId: "206001450588",
  appId: "1:206001450588:web:4259c6db7d8c40894fc099",
  measurementId: "G-M58XNP9P8H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);




let username = "User_" + Math.floor(Math.random() * 1000); // Generate random username

function displayMessage(message) {
    const chatContainer = document.getElementById('chat-container');
    const messageElement = document.createElement('p');
    messageElement.innerText = `${message.username}: ${message.text}`;
    chatContainer.appendChild(messageElement);
    chatContainer.scrollTop = chatContainer.scrollHeight; // Scroll to latest message
}

function sendMessage() {
    const chatInput = document.getElementById('chat-input');
    const messageText = chatInput.value;
    
    if (messageText.trim()) {
        const message = { username, text: messageText };
        
        // Save the message to Firebase
        db.ref('messages').push(message).then(() => {
            chatInput.value = ''; // Clear input field
        });
    }
}

// Listen for new messages
db.ref('messages').on('child_added', (snapshot) => {
    const message = snapshot.val();
    displayMessage(message);
});

document.getElementById('send-message').addEventListener('click', sendMessage);

// Import Firebase services
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.x.x/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.x.x/firebase-auth.js';
import { getDatabase, ref, set, get } from 'https://www.gstatic.com/firebasejs/9.x.x/firebase-database.js';

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
const auth = getAuth(app);
const db = getDatabase(app);

// Function to start the anonymous chat
function startChat() {
    const chatContainer = document.getElementById('chat-container');
    
    // Example chat interface (You can make this dynamic)
    chatContainer.innerHTML = `
        <p>Start chatting with someone anonymously</p>
        <textarea id="chatMessage" placeholder="Type your message here..."></textarea>
        <button onclick="sendMessage()">Send</button>
    `;
}

// Function to send message to Firebase
function sendMessage() {
    const message = document.getElementById('chatMessage').value;
    
    if (message) {
        // Save message to Firebase (You can customize this logic)
        set(ref(db, 'chat/messages'), {
            message: message,
            timestamp: Date.now()
        }).then(() => {
            alert("Your message has been sent!");
        }).catch((error) => {
            console.error("Error sending message: ", error);
        });
    }
}

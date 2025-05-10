import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js';
import { getDatabase, ref, push } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js';

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
const db = getDatabase(app);

// Start chat
window.startChat = function () {
  const chatContainer = document.getElementById('chat-container');
  chatContainer.innerHTML = `
    <p>Start chatting with someone anonymously</p>
    <textarea id="chatMessage" placeholder="Type your message here..."></textarea>
    <button onclick="sendMessage()">Send</button>
  `;
};

window.sendMessage = function () {
  const message = document.getElementById('chatMessage').value;
  const messagesRef = ref(db, 'chat/messages');

  push(messagesRef, {
    message: message,
    timestamp: Date.now()
  }).then(() => {
    alert("Message sent!");
  }).catch((error) => {
    console.error("Error sending message: ", error);
  });
};

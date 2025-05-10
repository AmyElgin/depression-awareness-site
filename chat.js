import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB8RPTDWCPMRLl-IirhunsbBvCw-PRytVs",
  authDomain: "depression-b81de.firebaseapp.com",
  projectId: "depression-b81de",
  storageBucket: "depression-b81de.firebasestorage.appspot.com",
  messagingSenderId: "206001450588",
  appId: "1:206001450588:web:4259c6db7d8c40894fc099"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.startChat = function () {
  const chatContainer = document.getElementById('chat-container');
  chatContainer.innerHTML = `
    <p>Start chatting anonymously</p>
    <textarea id="chatMessage" placeholder="Type your message..."></textarea>
    <button onclick="sendMessage()">Send</button>
  `;
};

window.sendMessage = async function () {
  const message = document.getElementById('chatMessage').value;
  try {
    await addDoc(collection(db, "chatMessages"), {
      message: message,
      timestamp: Date.now()
    });
    alert("Message sent!");
  } catch (e) {
    console.error("Error sending message: ", e);
  }
};

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

window.startQuiz = function () {
  const quizContainer = document.getElementById('quiz-container');
  quizContainer.innerHTML = `
    <p>On a scale from 1 to 10, how often have you felt hopeless in the past two weeks?</p>
    <input type="number" min="1" max="10" id="response" placeholder="Your answer">
    <button onclick="submitQuiz()">Submit</button>
  `;
};

window.submitQuiz = async function () {
  const response = document.getElementById('response').value;
  try {
    await addDoc(collection(db, "quizResponses"), {
      response: response,
      timestamp: Date.now()
    });
    alert("Your response has been saved!");
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

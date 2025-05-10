import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js';
import { getDatabase, ref, set } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js';

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

// Start quiz
window.startQuiz = function () {
  const quizContainer = document.getElementById('quiz-container');
  quizContainer.innerHTML = `
    <p>On a scale from 1 to 10, how often have you felt hopeless in the past two weeks?</p>
    <input type="number" min="1" max="10" id="response" placeholder="Your answer">
    <button onclick="submitQuiz()">Submit</button>
  `;
};

window.submitQuiz = function () {
  const response = document.getElementById('response').value;
  const newRef = ref(db, 'quiz/responses/' + Date.now());

  set(newRef, {
    response: response
  }).then(() => {
    alert("Your response has been saved!");
  }).catch((error) => {
    console.error("Error saving response: ", error);
  });
};

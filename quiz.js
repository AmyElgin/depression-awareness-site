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



const questions = [
    {
        question: "How often do you feel sad or depressed?",
        options: ["Never", "Sometimes", "Often", "Always"]
    },
    {
        question: "Do you have trouble sleeping?",
        options: ["Never", "Sometimes", "Often", "Always"]
    },
    {
        question: "Have you lost interest in activities you once enjoyed?",
        options: ["Never", "Sometimes", "Often", "Always"]
    },
    // Add more questions as needed
];

let userAnswers = [];

function displayQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    questions.forEach((question, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        questionElement.innerHTML = `
            <p>${question.question}</p>
            ${question.options.map((option, i) => 
                `<label>
                    <input type="radio" name="question-${index}" value="${i}">
                    ${option}
                </label>`).join('')}
        `;
        quizContainer.appendChild(questionElement);
    });
}

function handleQuizSubmit() {
    const resultDiv = document.getElementById('quiz-result');
    let score = 0;
    
    // Collect answers
    questions.forEach((question, index) => {
        const selectedOption = document.querySelector(`input[name="question-${index}"]:checked`);
        if (selectedOption) {
            userAnswers.push(parseInt(selectedOption.value));
        } else {
            userAnswers.push(0); // If no answer is selected
        }
    });

    // Calculate score
    score = userAnswers.reduce((acc, curr) => acc + curr, 0);
    
    // Display result
    if (score < 5) {
        resultDiv.innerText = "You may not be experiencing depression, but if you're feeling unsure, it’s always good to speak with a professional.";
    } else if (score < 10) {
        resultDiv.innerText = "It seems like you might be experiencing some symptoms of depression. Please reach out to someone for support.";
    } else {
        resultDiv.innerText = "You may be dealing with depression. It's crucial to seek professional help immediately.";
    }
}

document.getElementById('submit-quiz').addEventListener('click', handleQuizSubmit);
displayQuiz();

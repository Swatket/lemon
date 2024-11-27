// Your quiz categories
const categories = {
  science: [
    {
      question: "Is the sky blue?",
      options: ["Yes", "No"],
      correctAnswer: 0,
      image: "flame.jpeg"
    },
    {
      question: "What is the chemical symbol for water?",
      options: ["H2O", "O2", "CO2"],
      correctAnswer: 0,
      image: "water.jpg"
    }
  ],
  history: [
    {
      question: "Is the sky blue?",
      options: ["Yes", "No"],
      correctAnswer: 0,
      image: "flame.jpeg"
    },
    {
      question: "What is the chemical symbol for water?",
      options: ["H2O", "O2", "CO2"],
      correctAnswer: 0,
      image: "water.jpg"
    }
  ]
};

let currentQuestionIndex = 0;
let score = 0;
let selectedCategory = [];
let userAnswers = [];  // Track user answers
let username = '';  // Assume you prompt for the username or get it dynamically

const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get('category');

if (category && categories[category]) {
  selectedCategory = categories[category];
} else {
  alert("Invalid category! Redirecting to homepage.");
  window.location.href = "index.html";
}

// Get username from prompt (or use a better method like Firebase Authentication in real apps)
username = prompt("Enter your name to start the quiz:");

// Function to load a question
function loadQuestion() {
  const questionData = selectedCategory[currentQuestionIndex];
  document.getElementById('categoryTitle').innerText = `Category: ${category}`;
  document.getElementById('questionImage').src = questionData.image;
  document.getElementById('question').innerText = questionData.question;

  // Clear existing answer buttons
  const answerContainer = document.getElementById('answerContainer');
  answerContainer.innerHTML = '';

  // Create answer buttons dynamically
  questionData.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.innerText = option;
    button.classList.add('answer-button');
    button.onclick = () => selectAnswer(index);  // Attach event listener
    answerContainer.appendChild(button);
  });

  updateProgressBar();
}

// Function to select an answer
function selectAnswer(selectedIndex) {
  const questionData = selectedCategory[currentQuestionIndex];
  const isCorrect = selectedIndex === questionData.correctAnswer;

  // Track the user's answer (question, selected answer, correct answer, correctness)
  userAnswers.push({
    question: questionData.question,
    selectedAnswer: questionData.options[selectedIndex],
    correctAnswer: questionData.options[questionData.correctAnswer],
    isCorrect: isCorrect
  });

  if (isCorrect) {
    score++;
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < selectedCategory.length) {
    loadQuestion();
  } else {
    endQuiz();
  }
}

// Update progress bar
function updateProgressBar() {
  const progressBar = document.getElementById('progressBar');
  const progressPercentage = ((currentQuestionIndex + 1) / selectedCategory.length) * 100;
  progressBar.style.width = progressPercentage + '%';
}

// End quiz and show summary
function endQuiz() {
  document.getElementById('questionImage').style.display = "none";
  document.getElementById('question').style.display = "none";
  document.getElementById('answerContainer').style.display = "none";
  document.getElementById('progressBarContainer').style.display = "none";

  const summaryImage = document.getElementById('summaryImage');
  summaryImage.src = score === selectedCategory.length ? "perfect.jpg" : score >= 2 ? "good.jpg" : "better-luck.jpg";
  summaryImage.style.display = "block";

  const backToHomeButton = document.getElementById('backToHome');
  backToHomeButton.style.display = "inline-block";

  // Show the submit button
  const submitButton = document.getElementById('submitButton');
  submitButton.style.display = "inline-block";
}

// Go back to the homepage
function goBackToHome() {
  window.location.href = "index.html";
}

// Initialize the first question
loadQuestion();

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvvtAbai-8jUyk3bZa2jaeUzGbtLnIDvc",
  authDomain: "lemon-d3604.firebaseapp.com",
  databaseURL: "https://lemon-d3604-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "lemon-d3604",
  storageBucket: "lemon-d3604.firebasestorage.app",
  messagingSenderId: "462220315312",
  appId: "1:462220315312:web:c5b718b2bb65ee19820975",
}

function submitFinalScore() {
  console.log("Submitting data...");  // Log submission attempt
  console.log("Score data: ", scoreData);  // Log data being sent to Firebase

  const submitButton = document.getElementById('submitButton');
  submitButton.disabled = true;
  submitButton.innerText = "Submitting...";

  const scoreRef = firebase.database().ref(`scores/${category}/${username}/${date}`);
  scoreRef.set(scoreData)
    .then(() => {
      console.log("Data written successfully!");
      alert("Your final score has been submitted!");
    })
    .catch((error) => {
      console.error("Error submitting data:", error);
      submitButton.disabled = false;  // Re-enable button in case of error
      submitButton.innerText = "Submit Final Score";
    });
}

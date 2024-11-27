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
let userAnswers = [];
let username = '';

const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get('category');

if (category && categories[category]) {
  selectedCategory = categories[category];
} else {
  alert("Invalid category! Redirecting to homepage.");
  window.location.href = "index.html";
}

username = prompt("Enter your name to start the quiz:");

function loadQuestion() {
  const questionData = selectedCategory[currentQuestionIndex];
  document.getElementById('categoryTitle').innerText = `Category: ${category}`;
  document.getElementById('questionImage').src = questionData.image;
  document.getElementById('question').innerText = questionData.question;

  const answerContainer = document.getElementById('answerContainer');
  answerContainer.innerHTML = '';

  // Create answer buttons dynamically
  questionData.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.innerText = option;
    button.classList.add('answer-button');
    button.onclick = () => selectAnswer(index);
    answerContainer.appendChild(button);
  });

  updateProgressBar();
}

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
  summaryImage.src = score === selectedCategory.length ? "perfect.gif" : score >= 1 ? "good.jpg" : "better_luck.png";
  summaryImage.style.display = "block";

  const backToHomeButton = document.getElementById('backToHome');
  backToHomeButton.style.display = "inline-block";

  // Show the submit button
  const submitButton = document.getElementById('submitButton');
  submitButton.style.display = "inline-block";
}

function goBackToHome() {
  window.location.href = "index.html";
}

loadQuestion();

const firebaseConfig = {
  apiKey: "AIzaSyDvvtAbai-8jUyk3bZa2jaeUzGbtLnIDvc",
  authDomain: "lemon-d3604.firebaseapp.com",
  databaseURL: "https://lemon-d3604-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "lemon-d3604",
  storageBucket: "lemon-d3604.firebasestorage.app",
  messagingSenderId: "462220315312",
  appId: "1:462220315312:web:c5b718b2bb65ee19820975",
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the Cloud Firestore database
const db = firebase.firestore();

function submitFinalScore() {
  console.log("Submitting data...");
  console.log("Score data: ", scoreData);

  const submitButton = document.getElementById('submitButton');
  submitButton.disabled = true;
  submitButton.innerText = "Submitting...";

  // Get the current date
  const date = new Date().toISOString().slice(0, 10); // Format: YYYY-MM-DD

  // Create the score data object
  const scoreData = {
    score: score,
    userAnswers: userAnswers, // Include user answers if needed
    category: category, // Assuming you have a category variable
    username: username, // Assuming you have a username variable
    date: date
  };

  // Get a reference to the Realtime Database
  const database = firebase.database();

  // Add the score data to the "scores" node in the Realtime Database
  database.ref(`scores/${category}/${username}/${date}`).set(scoreData)
    .then(() => {
      console.log("Data written successfully!");
      alert("Your final score has been submitted!");
    })
    .catch((error) => {
      console.error("Error submitting data:", error);
      submitButton.disabled = false;
      submitButton.innerText = "Submit Final Score";
    });

  // Add the score data to the "scores" collection in Cloud Firestore
  db.collection("scores").add(scoreData)
    .then((docRef) => {
      console.log("Data written successfully! Document ID:", docRef.id);
      alert("Your final score has been submitted!");
    })
    .catch((error) => {
      console.error("Error submitting data:", error);
      submitButton.disabled = false;
      submitButton.innerText = "Submit Final Score";
    });
}

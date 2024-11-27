// Firebase configuration (already provided)
const firebaseConfig = {
    apiKey: "AIzaSyDvvtAbai-8jUyk3bZa2jaeUzGbtLnIDvc",
    authDomain: "lemon-d3604.firebaseapp.com",
    databaseURL: "https://lemon-d3604-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "lemon-d3604",
    storageBucket: "lemon-d3604.firebasestorage.app",
    messagingSenderId: "462220315312",
    appId: "1:462220315312:web:c5b718b2bb65ee19820975",
    measurementId: "G-6630NYYKCY"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

const categories = {
    science: [
        { question: "Is the sky blue?", options: ["Yes", "No"], correctAnswer: 0, image: "flame.jpeg" },
        { question: "Is grass green?", options: ["Yes", "No"], correctAnswer: 0, image: "grass.jpg" },
        { question: "Is fire cold?", options: ["Yes", "No"], correctAnswer: 1, image: "fire.jpg" }
    ],
    history: [
        { question: "Who discovered America?", options: ["Christopher Columbus", "Marco Polo", "Leif Erikson"], correctAnswer: 0, image: "columbus.jpg" },
        { question: "When was the Declaration of Independence signed?", options: ["1776", "1783"], correctAnswer: 0, image: "declaration.jpg" },
        { question: "What was the name of the first President of the US?", options: ["George Washington", "Abraham Lincoln"], correctAnswer: 0, image: "washington.jpg" }
    ],
    technology: [
        { question: "What does CPU stand for?", options: ["Central Processing Unit", "Computer Processing Unit"], correctAnswer: 0, image: "cpu.jpg" },
        { question: "What is the name of the first computer?", options: ["ENIAC", "UNIVAC"], correctAnswer: 0, image: "eniac.jpg" },
        { question: "Which company created the iPhone?", options: ["Apple", "Samsung", "Huawei"], correctAnswer: 0, image: "iphone.jpg" }
    ]
};

let currentQuestionIndex = 0;
let score = 0;
let selectedCategory = [];
const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get('category');

// Check if the category is valid, else redirect to homepage
if (category && categories[category]) {
    selectedCategory = categories[category];
} else {
    alert("Invalid category! Redirecting to homepage.");
    window.location.href = "index.html";
}

// Function to load the question
function loadQuestion() {
    const questionData = selectedCategory[currentQuestionIndex];
    document.getElementById('categoryTitle').innerText = `Category: ${category.charAt(0).toUpperCase() + category.slice(1)}`;
    document.getElementById('questionImage').src = questionData.image;
    document.getElementById('question').innerText = questionData.question;

    // Clear previous options
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = ''; // Clear existing options

    // Dynamically create buttons for each option
    questionData.options.forEach((option, index) => {
        console.log(`Creating option: ${option}`);
        const button = document.createElement('button');
        button.innerText = option;
        button.onclick = () => selectAnswer(index);
        button.className = 'answer-button';
        optionsContainer.appendChild(button);
    });

    updateProgressBar();
}

// Function to update the progress bar
function updateProgressBar() {
    const progressBar = document.getElementById('progressBar');
    const progressPercentage = Math.min(((currentQuestionIndex + 1) / selectedCategory.length) * 100, 100);
    progressBar.style.width = progressPercentage + '%';
}

// Function to handle answer selection
function selectAnswer(selectedIndex) {
    if (selectedIndex === selectedCategory[currentQuestionIndex].correctAnswer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < selectedCategory.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

// Function to end the quiz
function endQuiz() {
    document.getElementById('questionImage').style.display = "none";
    document.getElementById('question').style.display = "none";
    document.getElementById('optionsContainer').style.display = "none";
    document.getElementById('progressBarContainer').style.display = "none";

    const summaryImage = document.getElementById('summaryImage');
    summaryImage.src = score === selectedCategory.length ? "perfect.jpg" : score >= 2 ? "good.jpg" : "better-luck.jpg";
    summaryImage.style.display = "block";

    const backToHomeButton = document.getElementById('backToHome');
    backToHomeButton.style.display = "inline-block";

    // Save the score to Firebase after the quiz ends
    saveScoreToFirebase();
}

// Function to save score to Firebase
function saveScoreToFirebase() {
    const scoreData = {
        score: score,
        category: category,
        date: new Date().toLocaleString()}}

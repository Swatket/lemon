const categories = {
    science: [
        {
            question: "Is the sky blue?",
            options: ["Yes", "No"],
            correctAnswer: 0,
            image: "flame.jpeg"
        },
        {
            question: "Is grass green?",
            options: ["Yes", "No"],
            correctAnswer: 0,
            image: "grass.jpg"
        },
        {
            question: "Is fire cold?",
            options: ["Yes", "No"],
            correctAnswer: 1,
            image: "fire.jpg"
        }
    ],
    history: [
        {
            question: "Who discovered America?",
            options: ["Christopher Columbus", "Marco Polo"],
            correctAnswer: 0,
            image: "columbus.jpg"
        },
        {
            question: "When was the Declaration of Independence signed?",
            options: ["1776", "1783"],
            correctAnswer: 0,
            image: "declaration.jpg"
        },
        {
            question: "What was the name of the first President of the US?",
            options: ["George Washington", "Abraham Lincoln"],
            correctAnswer: 0,
            image: "washington.jpg"
        }
    ],
    technology: [
        {
            question: "What does CPU stand for?",
            options: ["Central Processing Unit", "Computer Processing Unit"],
            correctAnswer: 0,
            image: "cpu.jpg"
        },
        {
            question: "What is the name of the first computer?",
            options: ["ENIAC", "UNIVAC"],
            correctAnswer: 0,
            image: "eniac.jpg"
        },
        {
            question: "Which company created the iPhone?",
            options: ["Apple", "Samsung"],
            correctAnswer: 0,
            image: "iphone.jpg"
        }
    ]
};

let currentQuestionIndex = 0;
let score = 0;
let selectedCategory = [];
const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get('category');

if (category && categories[category]) {
    selectedCategory = categories[category];
} else {
    alert("Invalid category! Redirecting to homepage.");
    window.location.href = "index.html";
}

function loadQuestion() {
    const questionData = selectedCategory[currentQuestionIndex];
    document.getElementById('categoryTitle').innerText = `Category: ${category}`;
    document.getElementById('questionImage').src = questionData.image;
    document.getElementById('question').innerText = questionData.question;
    document.getElementById('optionA').innerText = questionData.options[0];
    document.getElementById('optionB').innerText = questionData.options[1];
    updateProgressBar();
}

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

function updateProgressBar() {
    const progressBar = document.getElementById('progressBar');
    const progressPercentage = ((currentQuestionIndex + 1) / selectedCategory.length) * 100;
    progressBar.style.width = progressPercentage + '%';
}

function endQuiz() {
    document.getElementById('questionImage').style.display = "none";
    document.getElementById('question').style.display = "none";
    document.getElementById('optionA').style.display = "none";
    document.getElementById('optionB').style.display = "none";
    document.getElementById('progressBarContainer').style.display = "none";

    const summaryImage = document.getElementById('summaryImage');
    summaryImage.src = score === selectedCategory.length ? "perfect.jpg" : score >= 2 ? "good.jpg" : "better-luck.jpg";
    summaryImage.style.display = "block";

    const backToHomeButton = document.getElementById('backToHome');
    backToHomeButton.style.display = "inline-block";
}

function goBackToHome() {
    window.location.href = "index.html";
}

// Initialize the first question
loadQuestion();

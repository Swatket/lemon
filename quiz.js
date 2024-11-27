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
],
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

  // Clear any existing buttons
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
  document.getElementById('answerContainer').style.display = "none";
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

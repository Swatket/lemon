const categories = {
  garbage: [
    {
      question: "Why is it important to sort garbage before disposal?",
      type: "text",
      image: "Image/Garbage/Garbage_q1.jpg",
      sound: "sounds/cat.mp3"
    },
    {
      question: "Which of these should go into the compost bin?",
      type: "select",
      options: ["Fruit and vegetable peels", "Glass bottles", "Meat scraps"],
      image: "Image/Garbage/Garbage_q2.jpg",
      sound: "sounds/q2.mp3"
    },
    {
      question: "Why should glass and plastic be separated when recycling?",
      type: "text",
      image: "Image/Garbage/Garbage_q3.jpg",
      sound: "sounds/q3.mp3"
    }
  ]
};

let currentQuestionIndex = 0;
let selectedCategory = [];
let userAnswers = [];
let username = '';
let currentAudio = null;

const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get('category');

if (category && categories[category]) {
  selectedCategory = categories[category];
} else {
  alert("Invalid category! Redirecting to homepage.");
  window.location.href = "index.html";
}

username = prompt("Enter your name to start the quiz:");

function playQuestionSound() {
  if (currentAudio) {
    currentAudio.play().catch(error => {
      console.error("Sound play failed:", error);
    });
  } else {
    alert("No sound available for this question.");
  }
}


function loadQuestion() {
  const questionData = selectedCategory[currentQuestionIndex];
  document.getElementById('categoryTitle').innerText = `Category: ${category}`;
  // Show sound button and set up audio
  document.getElementById('playSoundButton').style.display = "inline-block";
  const soundPath = questionData.sound;
  if (soundPath) {
    currentAudio = new Audio(soundPath);
  }

  document.getElementById('questionImage').src = questionData.image;
  document.getElementById('question').innerText = questionData.question;

  const textInput = document.getElementById('textAnswer');
  const selectContainer = document.getElementById('selectAnswerContainer');
  const submitTextBtn = document.getElementById('submitTextButton');

  if (questionData.type === "text") {
    textInput.style.display = "block";
    selectContainer.style.display = "none";
    submitTextBtn.style.display = "inline-block";
    textInput.value = '';
  } else if (questionData.type === "select") {
    textInput.style.display = "none";
    selectContainer.style.display = "block";
    submitTextBtn.style.display = "none";
    renderSelectOptions(questionData.options);
  }

  updateProgressBar();
}

function renderSelectOptions(options) {
  const selectContainer = document.getElementById('selectAnswerContainer');
  selectContainer.innerHTML = ''; // clear previous options

  options.forEach(optionText => {
    const button = document.createElement('button');
    button.className = 'optionButton';
    button.innerText = optionText;
    button.onclick = () => submitSelectAnswer(optionText);
    selectContainer.appendChild(button);
  });
}

function updateProgressBar() {
  const progressBar = document.getElementById('progressBar');
  const progressPercentage = ((currentQuestionIndex + 1) / selectedCategory.length) * 100;
  progressBar.style.width = progressPercentage + '%';
}

function submitTextAnswer() {
  const input = document.getElementById('textAnswer').value.trim();
  if (!input) {
    alert("Please enter an answer.");
    return;
  }

  const questionData = selectedCategory[currentQuestionIndex];

  userAnswers.push({
    question: questionData.question,
    answer: input
  });

  nextQuestion();
}

function submitSelectAnswer(answerText) {
  const questionData = selectedCategory[currentQuestionIndex];

  userAnswers.push({
    question: questionData.question,
    answer: answerText
  });

  nextQuestion();
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < selectedCategory.length) {
    loadQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  document.getElementById('questionImage').style.display = "none";
  document.getElementById('question').style.display = "none";
  document.getElementById('answerContainer').style.display = "none";
  document.getElementById('progressBarContainer').style.display = "none";
  document.getElementById('categoryTitle').style.display = "none";

  const quizContainer = document.getElementById('quizContainer');

  // Clear previous content except buttons
  quizContainer.innerHTML = '';

  // Add thank you message
  const finishMsg = document.createElement('p');
  finishMsg.style.color = "#80857D"; 
  finishMsg.style.fontWeight = "bold";
  finishMsg.style.fontSize = "20px"; 
  finishMsg.style.textAlign = "center"; 
  finishMsg.textContent = "Thank you for completing the survey!";

  // Add centered image
  const finishImg = document.createElement('img');
  finishImg.src = "perfect.gif"; // replace with your actual image path
  finishImg.style.display = "block";
  finishImg.style.margin = "20px auto";
  finishImg.style.maxWidth = "100%";

  // Create button container
  const buttonRow = document.createElement('div');
  buttonRow.style.display = "flex";
  buttonRow.style.justifyContent = "space-between";
  buttonRow.style.marginTop = "20px";

  // Back to home button
  const backBtn = document.createElement('button');
  backBtn.id = "backToHome";
  backBtn.innerText = "Back to Home";
  backBtn.onclick = goBackToHome;

  // Submit final score button
  const submitBtn = document.createElement('button');
  submitBtn.innerText = "Submit Final Score";
  submitBtn.onclick = submitFinalScore;
  submitBtn.id = "submitButton";

  buttonRow.appendChild(backBtn);
  buttonRow.appendChild(submitBtn);

  quizContainer.appendChild(finishMsg);
  quizContainer.appendChild(finishImg);
  quizContainer.appendChild(buttonRow);
}

function goBackToHome() {
  window.location.href = "index.html";
}

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDvvtAbai-8jUyk3bZa2jaeUzGbtLnIDvc",
  authDomain: "lemon-d3604.firebaseapp.com",
  databaseURL: "https://lemon-d3604-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "lemon-d3604",
  storageBucket: "lemon-d3604.firebasestorage.app",
  messagingSenderId: "462220315312",
  appId: "1:462220315312:web:c5b718b2bb65ee19820975",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

function submitFinalScore() {
  const submitButton = document.getElementById('submitButton');
  submitButton.disabled = true;
  submitButton.innerText = "Submitting...";

  const date = new Date().toISOString().slice(0, 10); // Format: YYYY-MM-DD

  const scoreData = {
    userAnswers: userAnswers,
    username: username,
    date: date
  };

  // Realtime DB
  db.ref(`scores/${username}/${date}`).set(scoreData)
    .then(() => {
      alert("Your answers have been submitted!");
    })
    .catch((error) => {
      console.error("Error submitting data:", error);
      submitButton.disabled = false;
      submitButton.innerText = "Submit Final Score";
    });

  // Firestore
  firebase.firestore().collection("scores").add(scoreData)
    .then(() => {
      console.log("Submitted to Firestore");
    })
    .catch((error) => {
      console.error("Error submitting data:", error);
    });
}

loadQuestion();

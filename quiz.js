const categories = {
    garbage: [
      {
        question: "Why is it important to sort garbage before disposal?",
        options: ["It reduces environmental pollution.", "It takes more time to do so.", "It helps to reuse materials."],
        correctAnswer: 0,
        image: ""
      },
      {
        question: "What should go into a recycling bin?",
        options: ["Paper", "Food scraps", "Plastic bottles"],
        correctAnswer: 2,
        image: ""
      },
      {
        question: "Which of these should go into the compost bin?",
        options: ["Fruit and vegetable peels", "Glass bottles", "Meat scraps"],
        correctAnswer: 0,
        image: ""
      },
      {
        question: "Where should you dispose of electronic waste, like old phones or computers?",
        options: ["General trash bin", "E-waste collection center", "Recycling bin", "Hazardous waste facility"],
        correctAnswer: 1,
        image: ""
      },
      {
        question: "What happens when recyclable materials are mixed with non-recyclables?",
        options: ["They are still processed together.", "The recycling process becomes less efficient.", "The non-recyclables contaminate the recyclable materials."],
        correctAnswer: 1,
        image: ""
      },
      {
        question: "Which material should be discarded as hazardous waste?",
        options: ["Batteries", "Fruit peels", "Plastic bags"],
        correctAnswer: 0,
        image: ""
      },
      {
        question: "Why is it beneficial to use reusable containers?",
        options: ["They help reduce waste.", "They cost more than disposable containers."],
        correctAnswer: 0,
        image: ""
      },
      {
        question: "Why should glass and plastic be separated when recycling?",
        options: ["They are processed differently for recycling.", "It makes the recycling process easier.", "It helps prevent contamination."],
        correctAnswer: 0,
        image: ""
      }
  ],
    tree: [
      {
        question: "Why is conserving trees important?",
        options: ["They provide oxygen.", "They consume too much water.", "They attract pests."],
        correctAnswer: 0,
        image: ""
      },
      {
        question: "What can you do to help conserve trees?",
        options: ["Plant more trees", "Cut down old trees", "Ignore the issue"],
        correctAnswer: 0,
        image: ""
      },
      {
        question: "Which of these activities contributes to deforestation?",
        options: ["Logging for timber", "Recycling paper", "Using reusable bags"],
        correctAnswer: 0,
        image: ""
      },
      {
        question: "What is the impact of deforestation on wildlife?",
        options: ["It creates more habitats", "It destroys natural habitats", "It has no effect on wildlife"],
        correctAnswer: 1,
        image: ""
      },
      {
        question: "How do trees help in combating climate change?",
        options: ["They absorb carbon dioxide", "They release methane", "They create smog"],
        correctAnswer: 0,
        image: ""
      },
      {
        question: "What is a benefit of planting trees in urban areas?",
        options: ["Increases pollution", "Provides shade and reduces heat", "Decreases water retention"],
        correctAnswer: 1,
        image: ""
      },
      {
        question: "What should you do to reduce paper waste and conserve trees?",
        options: ["Use more paper products", "Recycle paper", "Burn paper waste"],
        correctAnswer: 1,
        image: ""
      },
      {
        question: "How does tree conservation benefit humans?",
        options: ["It improves air quality", "It reduces water availability", "It increases waste production"],
        correctAnswer: 0,
        image: ""
      }
    ],
      water: [
        {
          question: "What is one major cause of water pollution?",
          options: ["Industrial waste", "Clean water runoff", "Ocean currents"],
          correctAnswer: 0,
          image: ""
        },
        {
          question: "What can be done to prevent waste pollution in water bodies?",
          options: ["Dumping waste into rivers", "Proper waste disposal and recycling", "Ignoring pollution issues"],
          correctAnswer: 1,
          image: ""
        },
        {
          question: "Which of the following is a common pollutant found in water?",
          options: ["Plastic waste", "Oxygen", "Clean sand"],
          correctAnswer: 0,
          image: ""
        },
        {
          question: "How does waste pollution affect aquatic life?",
          options: ["It provides food for marine animals", "It can harm or kill aquatic organisms", "It improves water quality"],
          correctAnswer: 1,
          image: ""
        },
        {
          question: "What is a major source of land-based pollution that affects water quality?",
          options: ["Factory emissions", "Waste from landfills", "Ocean currents"],
          correctAnswer: 1,
          image: ""
        },
        {
          question: "Which of the following is a consequence of untreated sewage being released into water bodies?",
          options: ["Improved water quality", "Spread of diseases", "Increase in biodiversity"],
          correctAnswer: 1,
          image: ""
        },
        {
          question: "What is a practical way to reduce water pollution?",
          options: ["Use of chemical detergents", "Proper waste management", "Increasing industrial waste"],
          correctAnswer: 1,
          image: ""
        },
        {
          question: "Why is it important to reduce plastic waste in water?",
          options: ["Plastic is biodegradable", "Plastic can harm marine animals and ecosystems", "Plastic improves water clarity"],
          correctAnswer: 1,
          image: ""
        }
      ],
        air: [
          {
            question: "What is the main cause of air pollution?",
            options: ["Industrial emissions", "Fresh air", "Clean water"],
            correctAnswer: 0,
            image: ""
          },
          {
            question: "Which of the following is a harmful gas released into the air by vehicles?",
            options: ["Oxygen", "Carbon monoxide", "Nitrogen"],
            correctAnswer: 1,
            image: ""
          },
          {
            question: "How does air pollution affect human health?",
            options: ["It improves lung function", "It causes respiratory problems", "It has no effect on health"],
            correctAnswer: 1,
            image: ""
          },
          {
            question: "Which of these is a consequence of poor air quality?",
            options: ["Increase in plant growth", "Acid rain", "Lowered ozone levels"],
            correctAnswer: 1,
            image: ""
          },
          {
            question: "How can air pollution be reduced in cities?",
            options: ["Using more fossil fuels", "Using cleaner energy sources and public transport", "Cutting down trees"],
            correctAnswer: 1,
            image: ""
          },
          {
            question: "What is smog?",
            options: ["A type of fog", "A mixture of smoke and fog", "Clean air"],
            correctAnswer: 1,
            image: ""
          },
          {
            question: "Which activity contributes the most to air pollution?",
            options: ["Burning fossil fuels", "Growing plants", "Using electric cars"],
            correctAnswer: 0,
            image: ""
          },
          {
            question: "What can individuals do to reduce air pollution?",
            options: ["Drive more often", "Use less electricity", "Burn more fossil fuels"],
            correctAnswer: 1,
            image: ""
          }
        ],
          stray_animal: [
            {
              question: "What is one of the main causes of the stray animal population?",
              options: ["Overpopulation of animals", "Proper pet care", "Strict animal control laws"],
              correctAnswer: 0,
              image: ""
            },
            {
              question: "What should be done to help reduce the number of stray animals?",
              options: ["Adopt animals from shelters", "Ignore the issue", "Increase animal abandonment"],
              correctAnswer: 0,
              image: ""
            },
            {
              question: "How can stray animals affect local ecosystems?",
              options: ["They help maintain balance", "They can spread diseases", "They don’t have any impact"],
              correctAnswer: 1,
              image: ""
            },
            {
              question: "What is a common problem caused by stray dogs in urban areas?",
              options: ["Decreased traffic", "Increased noise and waste", "Improved local sanitation"],
              correctAnswer: 1,
              image: ""
            },
            {
              question: "How can spaying and neutering help control the stray animal population?",
              options: ["It increases the number of stray animals", "It prevents animals from reproducing", "It causes more animals to become homeless"],
              correctAnswer: 1,
              image: ""
            },
            {
              question: "Which of the following is a risk associated with stray animals?",
              options: ["Higher rates of adoption", "Spread of rabies and other diseases", "Better hygiene conditions in shelters"],
              correctAnswer: 1,
              image: ""
            },
            {
              question: "What is one way to help a stray animal you find?",
              options: ["Ignore it", "Take it to an animal shelter", "Leave it on the street"],
              correctAnswer: 1,
              image: ""
            },
            {
              question: "What is a key factor in preventing animals from becoming strays?",
              options: ["Proper pet ownership and care", "Abandoning pets when they become old", "Ignoring animal welfare issues"],
              correctAnswer: 0,
              image: ""
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

firebase.initializeApp(firebaseConfig);

const db = firebase.database();

function submitFinalScore() {
  console.log("Submitting data...");
  console.log("Score data: ", score);

  const submitButton = document.getElementById('submitButton');
  submitButton.disabled = true;
  submitButton.innerText = "Submitting...";

  // Get the current date
  const date = new Date().toISOString().slice(0, 10); // Format: YYYY-MM-DD

  // Create the score data object
  const scoreData = {
    score: score,
    userAnswers: userAnswers,
    category: category,
    username: username,
    date: date
  };

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

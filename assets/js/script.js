var questions = [
  {
    question:
      "JavaScript is a high-level programming language that provides _____ and interactivity for webpages.",
    options: ["logic", "structure", "coffee", "styling"],
    answer: "logic"
  },
  {
    question: "JavaScript is _____ sensitive.",
    options: ["emotionally", "not", "pain", "case"],
    answer: "case",
  },
  {
    question:
      "JavaScript executes code from ______________ unless interrupted by conditional statements, loops, or function calls.",
    options: ["bottom to top", "left to right", "top to bottom", "right to left"],
    answer: "top to bottom",
  },
  {
    question: "Null represents the ________ of an object.",
    options: ["absence", "undefined", "presence", "string"],
    answer: "absence",
  },
  {
    question: "Which of the following is not a JavaScript data type?",
    options: ["number", "boolean", "symbol", "concat"],
    answer: "concat",
  },
];

// Containers
var startContainer = document.querySelector(".start-container");
var quizContainer = document.querySelector(".quiz-container");
var formContainer = document.querySelector(".form-container");
var scoreboardContainer = document.querySelector(".scoreboard-container");

// Buttons
var scoreboardButton = document.querySelector(".scoreboard-button");
var startButton = document.querySelector(".start-button");
var answerButton = document.querySelector(".answer-buttons");
var submitButton = document.querySelector(".submit-button");
var returnButton = document.querySelector(".return-button");
var resetButton = document.querySelector(".reset-button");

// Counts
var timerEl = document.querySelector(".timer-count");
var scoreEl = document.querySelector(".score-count");

// Others
var firstNameInput = document.querySelector("#first-name");
var questionEl = document.querySelector(".question");
var scoreListEl = document.querySelector(".score-list");
var currentQuestionIndex;
var quizDone;
var timerCount;

function init() {
  startButton.classList.remove("hide");
  quizContainer.classList.add("hide");
  scoreboardContainer.classList.add("hide");
  formContainer.classList.add("hide");
  scoreboardButton.style.visibility = "visible";
  quizContainer.setAttribute("style", "background-color: white");
}

// Start the quiz when start button is pressed
startButton.addEventListener("click", startQuiz);


// Hide the start button when the quiz starts, start timer, and display questions
function startQuiz() {
  startButton.classList.add("hide");
  quizContainer.classList.remove("hide");
  scoreboardButton.style.visibility = "hidden";
  currentQuestionIndex = 0
  timerCount = 50
  quizDone = false
  startTimer();
  displayQuestion();
}

// Start the timer
function startTimer() {
  var timer = setInterval(function () {
    timerCount--;
    timerEl.textContent = timerCount;
    if (timerCount <= 0 || quizDone) {
      showForm();
      clearInterval(timer);
    }
  }, 1000);
}

function displayQuestion() {
  // Displays the current question inside the questions array
  var currentQuestion = questions[currentQuestionIndex].question;
  var currentOptions = questions[currentQuestionIndex].options;
  questionEl.innerHTML = currentQuestion;
  //what do we really want to empty out,
  answerButton.innerHTML = ""
  // Create buttons for each option inside the options array// Found this in a video, the (forEach) 
  currentOptions.forEach(option => {
    var answerEl = document.createElement("button");
    answerEl.innerHTML = option;
    answerButton.appendChild(answerEl);
    answerEl.addEventListener("click", compareAnswers);
  })
}

// Compares event and answer
function compareAnswers(event) {
  var selectedAnswer = event.target;
  if (questions[currentQuestionIndex].answer === selectedAnswer.innerText) {
    quizContainer.setAttribute("style", "background-color: lightgreen");
  } else {
    quizContainer.setAttribute("style", "background-color: lightpink");
    timerCount -= 10;
  }
  checkIfNextQuestion()  
}

function checkIfNextQuestion(){
  if (currentQuestionIndex == questions.length -1) {
    quizDone = true
    return
  } 
    currentQuestionIndex++;
    displayQuestion();
}

// Function that stores the score and the name to the local storage: After all the questions are done, we see the score and the submit form 
function showForm() {
  quizContainer.classList.add("hide");
  formContainer.classList.remove("hide");
  var score = timerCount
  scoreEl.textContent = score;
  submitForm();
}

function submitForm() {
  submitButton.addEventListener("click", function () {
    var userScore = {
      name: firstNameInput.value,
      score: timerCount
    };

    var scoreBoard = JSON.parse(localStorage.getItem("scoreBoard")) || [];
    scoreBoard.push(userScore);
    var updatedScore = JSON.stringify(scoreBoard);
    localStorage.setItem("scoreBoard", updatedScore)
    renderScore()
  })
}
// Function that renders the scores and the name on the scoreboard from the local storage: After we submit, we the see the past scores
function renderScore() {
  formContainer.classList.add("hide");
  startButton.classList.add("hide");
  // On the scoreboard, we see reset and return button
  scoreboardContainer.classList.remove("hide");
  updatedScore = JSON.parse(localStorage.getItem("scoreBoard"));
  scoreListEl.innerHTML = ""
  if (updatedScore == null) {
    scoreListEl.innerHTML = "You don't have any highscores!"
    return
  }
  
  for (x = 0; x < updatedScore.length; x++) {
    var scoreList = document.createElement("li");
    scoreList.textContent = updatedScore[x].name + ": " + updatedScore[x].score;
    scoreListEl.append(scoreList);
  }
}

// When the reset button is pressed, it clears local storage
resetButton.addEventListener("click", function () {
  localStorage.removeItem("scoreBoard")
  renderScore();
});

// When the return button is pressed, it goes back to the start button screen
returnButton.addEventListener("click", init);

// When the scoreboard button is pressed, it shows the highscores
scoreboardButton.addEventListener("click", renderScore)

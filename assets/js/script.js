// Question arrays
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

// Containers for each section
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

// Declare variables with no value
var currentQuestionIndex;
var quizDone;
var timerCount;

//  Other variables
var firstNameInput = document.querySelector("#first-name");
var questionEl = document.querySelector(".question");
var scoreListEl = document.querySelector(".score-list");
var setButton = false;

// The following function sets the page to its initial conditions
function init() {
  startButton.classList.remove("hide");
  quizContainer.classList.add("hide");
  scoreboardContainer.classList.add("hide");
  formContainer.classList.add("hide");
  scoreboardButton.style.visibility = "visible";
  quizContainer.setAttribute("style", "background-color: white");
  timerEl.textContent = 50;
}

// The following event allows the start button to call the startQuiz function on click
startButton.addEventListener("click", startQuiz);

// The following function starts the quiz
function startQuiz() {
  // Hide the unnecessary components of the page when quiz starts
  scoreboardButton.style.visibility = "hidden";
  startButton.classList.add("hide");
  // Show the quiz container
  quizContainer.classList.remove("hide");
  // Set values to current question index and start time
  currentQuestionIndex = 0
  timerCount = 50
  quizDone = false
  startTimer();
  displayQuestion();
}

// The following function starts the timer
function startTimer() {
  var timer = setInterval(function () {
    // Timer is counting down by 1 second
    timerCount--;
    // Show the count down in the timer element
    timerEl.textContent = timerCount;
    // When the quiz is done or time's up, call showForm function and clear the timer
    if (timerCount <= 0 || quizDone) {
      showForm();
      clearInterval(timer);
    }
  }, 1000);
}

// The following function display the questions
function displayQuestion() {
  var currentQuestion = questions[currentQuestionIndex].question;
  var currentOptions = questions[currentQuestionIndex].options;
  questionEl.innerHTML = currentQuestion;
  // Empty out the previous answer buttons
  answerButton.innerHTML = ""
  // Create buttons for each option inside the options array
  currentOptions.forEach(option => {
    var answerEl = document.createElement("button");
    answerEl.innerHTML = option;
    answerButton.appendChild(answerEl);
    // Call the compareAnswers function on click
    answerEl.addEventListener("click", compareAnswers);
  })
}

// The following function checks for the correct answer
function compareAnswers(event) {
  // This is referring to the button that the user clicked
  var selectedAnswer = event.target;
  // Compares the selected answer and the real answer and the quiz container will change color accordingly
  if (questions[currentQuestionIndex].answer === selectedAnswer.innerText) {
    quizContainer.setAttribute("style", "background-color: lightgreen");
  } else {
    quizContainer.setAttribute("style", "background-color: lightpink");
    // If incorrect, a penalty of 10s is taken away from the timer
    timerCount -= 10;
  }
  // Once answer is checked, we check if we have more questions
  checkIfNextQuestion();
}

// The following function will check whether there is more questions and if the quiz should continue
function checkIfNextQuestion() {
  // When the quiz length-1 (i.e., 4) = the currentQuestionIndex (i.e., 4), then end quiz
  if (currentQuestionIndex == questions.length - 1) {
    quizDone = true
    return
  }
  // Else, increase the currentQuestionIndex by 1 and call displayQuestion function again
  currentQuestionIndex++;
  displayQuestion();
}

// The following function will show the submit form
function showForm() {
  quizContainer.classList.add("hide");
  formContainer.classList.remove("hide");
  // Sets the ended time as the score
  var score = timerCount
  scoreEl.textContent = score;
  // Adds event listener if one isn't created for the submit button
  if (setButton == false) {
    saveScore();
    setButton = true;
  }
}

// The following form stores the inputted value for name and the score on click
function saveScore() {
  submitButton.addEventListener("click", function () {
    var userScore = {
      name: firstNameInput.value,
      score: timerCount
    };
    // It renders the current scoreboard and push the most recent score, and updates the scoreboard
    var scoreBoard = JSON.parse(localStorage.getItem("scoreBoard")) || [];
    scoreBoard.push(userScore);
    var updatedScore = JSON.stringify(scoreBoard);
    localStorage.setItem("scoreBoard", updatedScore);
    renderScore();
  })
}

// The following function renders the stored scores in the scoreboard container
function renderScore() {
  // Hides start button when accessed from the init page
  formContainer.classList.add("hide");
  startButton.classList.add("hide");
  scoreboardContainer.classList.remove("hide");
  // Retrieve stored scores from the local storage
  updatedScore = JSON.parse(localStorage.getItem("scoreBoard"));
  scoreListEl.innerHTML = ""
  if (updatedScore == null) {
    scoreListEl.innerHTML = "You don't have any scores yet!"
    return
  }
  // Make a list for all the stored scores 
  for (x = 0; x < updatedScore.length; x++) {
    var scoreList = document.createElement("li");
    scoreList.textContent = updatedScore[x].name + ": " + updatedScore[x].score;
    scoreListEl.append(scoreList);
  }
}

// When the reset button is pressed, it removes all the stored scores from the local storge
resetButton.addEventListener("click", function () {
  localStorage.removeItem("scoreBoard")
  renderScore();
});

// When the return button is pressed, it goes back to the start button screen
returnButton.addEventListener("click", init);

// When the scoreboard button is pressed, it renders the scoreboard
scoreboardButton.addEventListener("click", renderScore);
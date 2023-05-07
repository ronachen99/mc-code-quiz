var questions = [
  {
    question: "JavaScript is a high-level programming language that provides _____ and interactivity for webpages.",
    answer: [
      { text: "logic", correct: true },
      { text: "structure", correct: false },
      { text: "coffee", correct: false },
      { text: "styling", correct: false },
    ],
  },
  {
    question: "JavaScript is _____ sensitive.",
    answer: [
      { text: "emotionally", correct: false },
      { text: "not", correct: false },
      { text: "pain", correct: false },
      { text: "case", correct: true },
    ],
  },
  {
    question:"JavaScript executes code from ______________ unless interrupted by conditional statements, loops, or function calls.",
    answer: [
      { text: "bottom to top", correct: false },
      { text: "left to right", correct: false },
      { text: "top to bottom", correct: true },
      { text: "right to left", correct: false },
    ],
  },
  {
    question: "Null represents the ________ of an object.",
    answer: [
      { text: "absence", correct: true },
      { text: "undefined", correct: false },
      { text: "presence", correct: false },
      { text: "string", correct: false },
    ],
  },
  {
    question: "Which of the following is not a JavaScript data type?",
    answer: [
      { text: "number", correct: false },
      { text: "boolean", correct: false },
      { text: "symbol", correct: false },
      { text: "concat", correct: true },
    ],
  },
];

// Containers
var startContainer = document.querySelector(".start-container");
var quizContainer = document.querySelector(".quiz-container");
var formContainer = document.querySelector(".form-container");
var scoreboardContainer = document.querySelector(".scoreboard-container");

// Buttons
var scoreboardButton = document.querySelector("scoreboard-button");
var startButton = document.querySelector(".start-button");
var answerButton = document.querySelector(".answer-button");
var submitButton = document.querySelector(".submit-button");
var returnButton = document.querySelector(".return-button");
var resetButton = document.querySelector(".reset-button");

// Counts
var timerEl = document.querySelector(".timer-count");

// Others
var questionEl = document.querySelector(".question");
var scoreList = document.querySelector(".score-list");

// Start the quiz when we press on the start button
startButton.addEventListener("click", startQuiz);

// Hide the start button when the quiz starts, start timer, and display questions
function startQuiz() {
    startButton.style.visibility = "hidden";
    quizContainer.classList.remove("hide");
     startTimer();
     displayQuestion();
}


// Start the timer
function startTimer() {
  var timerCount = 50;
  var timer = setInterval(function () {
    timerCount--;
    timerEl.textContent = timerCount;
    // Test if win condition is met
    if (quizDone && timerCount > 0) {
        // timerCount.textContent = score;
        // localStorage.setItem("score", score);
        clearInterval(timer);
        // showForm();
    }

    if (timerCount === 0) {
        // timerCount.textContent = score;
        // localStorage.setItem("score", score);
        clearInterval(timer);
        // showForm();
    }
  }, 1000);
}

function nextQuestion () {

}

function displayQuestion () {


}


//     var currentQuestion = questions[x];
// {
//     questionEl.innerHTML = currentQuestion.question;
//     currentQuestion.a.forEach((a) => {
//     var choiceButton = document.createElement("button");
//     choiceButton.innerHTML = answer.choice;
//     answerButton.appendChild(choiceButton);
// })}

// }

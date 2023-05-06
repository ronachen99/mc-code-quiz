var questions = [
    {
        q:"JavaScript is a high-level programming language that provides _____ and interactivity for webpages.",
        a: [
            {choice: "logic", correct: true},
            {choice: "structure", correct: false},
            {choice: "coffee", correct: false},
            {choice: "styling", correct: false}
        ]
    },
    {
        q:"JavaScript is _____ sensitive.",
        a: [
            {choice: "emotionally", correct: false},
            {choice: "not", correct: false},
            {choice: "pain", correct: false},
            {choice: "case", correct: true}
        ]
    },
    {
        q:"JavaScript executes code from ______________ unless interrupted by conditional statements, loops, or function calls.",
        a: [
            {choice: "bottom to top", correct: false},
            {choice: "left to right", correct: false},
            {choice: "top to bottom", correct: true},
            {choice: "right to left", correct: false}
        ]
    },
    {
        q:"Null represents the ________ of an object.",
        a: [
            {choice: "absence", correct: true},
            {choice: "undefined", correct: false},
            {choice: "presence", correct: false},
            {choice: "string", correct: false}
        ]
    },
    {
        q:"Which of the following is not a JavaScript data type?",
        a: [
            {choice: "number", correct: false },
            {choice: "boolean", correct: false},
            {choice: "symbol", correct: false},
            {choice: "concat", correct: true}
        ]
    },   
];

// Containers
var startContainer = document.querySelector(".start-container");
var quizContainer = document.querySelector(".quiz-container");
var formContainer = document.querySelector(".form-container");
var scoreboardContainer = document.querySelector("scoreboard-container");

// Buttons
var scoreboardButton = document.querySelector("scoreboard-button");
var startButton = document.querySelector(".start-button");
var answerButton = document.querySelector(".answer-button");
var submitButton =  document.querySelector(".submit-button");
var returnButton = document.querySelector(".return-button");
var resetButton = document.querySelector(".reset-button");

// Counts
var timerEl = document.querySelector(".timer-count");
var scoreEl = document.getElementById("#score-count");

// Others
var question = document.getElementById("#question");
var scoreList = document.getElementById("score-list");



// Start the quiz when we press on the start button
startButton.addEventListener("click",startQuiz);


// Hide the start button when the quiz starts, start timer, and display questions
function startQuiz() {
    startButton.setAttribute("style", "display: none");
    startTimer();
    // displayQuestion();//TODO make display qs fx 
}

// Start the timer
function startTimer() {
   var timerCount = 50; 
   var timer = setInterval(function(){
        timerCount--;
        timerEl.textContent = timerCount;

    // Test if win conditiuon is met
    if (quizDone && timerCount > 0) {
        // showScore();
        clearInterval(timer);
        
    }
    if (timerCount === 0) {
        clearInterval(timer);
        // failQuiz();
    }
    }, 1000)
}

//TODO make showscore fx
//TODO make quizdone
//TODO fail quiz
// Display questions and answers

// If wrong answer, we subtract 10 seconds from the timer

// If wrong answer, change background of the button to red

// If right answer, change background of the button to green

// If right or wrong answer, move on to the next question

// If time > 0, then score = timeLeft

// If time = 0, and questions = left = failed test ==> start page

// Function that stores the score and the name to the local storage: After all the questions are done, we see the score and the submit form 

// Function that renders the scores and the name on the scoreboard from the local storage: After we submit, we the see the past scores

// On the scoreboard, we see reset and return button

// When the reset button is pressed, it clears local storage

// When the return button is pressed, it goes back to the start button screen

// When the scoreboard button is pressed, it shows the highscores
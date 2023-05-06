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
var scoreboardContainer = document.querySelector(".scoreboard-container");

// Buttons
var scoreboardButton = document.querySelector("scoreboard-button");
var startButton = document.querySelector(".start-button");
var answerButton = document.querySelector(".answer-button");
var submitButton =  document.querySelector(".submit-button");
var returnButton = document.querySelector(".return-button");
var resetButton = document.querySelector(".reset-button");

// Counts
var timerEl = document.querySelector(".timer-count");
var scoreEl = document.querySelector(".score-count");

// Others
var questionEl= document.querySelector(".question");
var scoreList = document.querySelector(".score-list");




// Start the quiz when we press on the start button
startButton.addEventListener("click", startQuiz);


// Hide the start button when the quiz starts, start timer, and display questions
function startQuiz() {
    startButton.style.visibility = "hidden";
    quizContainer.setAttribute("style","display: flex");
    startTimer();
    displayQuestion(); 
}

// Start the timer
function startTimer() {
    var timerCount = 50; 
   var timer = setInterval(function(){
        timerCount--;
        timerEl.textContent = timerCount;

    // Test if win conditiuon is met
    // if (quizDone && timerCount > 0) {
        // showScore(); //!
    //     clearInterval(timer);
        
    // }
    if (timerCount === 0) {
        clearInterval(timer);
        // showScore(); //!
    }
    }, 1000)
}

// Display questions and answers
function displayQuestion() {
      var currentQuestion = questions[0];
      questionEl.innerHTML= currentQuestion.q;

    currentQuestion.a.forEach(a => {
        var choiceButton = document.createElement("button");
        choiceButton.innerHTML = a.choice;
        answerButton.appendChild(choiceButton);
    });   
}


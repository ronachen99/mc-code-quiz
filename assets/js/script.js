
var startButton = document.querySelector(".start-button");
var displayQuestion = false;
var question = document.querySelector(".quiz");


var questions = ["1+1", "2+2"];
var answers = [["2","3","4"], ["2","3","4"]];


// Calls the startQuiz function when the start button is clicked
startButton.addEventListener("click", startQuiz);

// Starts timer and displays questions when the startQuiz function is called
function startQuiz() {
    timerCount = 50;
    displayQuestion();
    startTimer();
} 

// Function that diplays question

// Function that starts the timer

// Function that stores the score and the name to the local storage

// Function that renders the scores and the name on the scoreboard from the local storage


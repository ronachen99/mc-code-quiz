// Show form
function showForm() {
    quizContainer.setAttribute("style", "display: none");
    formContainer.setAttribute("style", "display: flex");
    score = localStorage.getItem("score");
 }

// Check answer selected
function checkAnswer(event) 
    

    
   if selectedAnswer = a.correct {
        // If right answer, change background of the button to green
        choiceButton.setAttribute("style", "background-color: green");
        nextQuestion();
    } 
    
    else {
        // If wrong answer, we subtract 10 seconds from the timer 
        timerCount - 10;
        // If wrong answer, change background of the button to red
        choiceButton.setAttribute("style", "background-color: red");
        nextQuestion();
}


// If right or wrong answer, move on to the next question
function nextQuestion(){
    while(answerButton.firstchild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

// If time > 0, then score = timeLeft

// If time = 0, and questions = left = failed test ==> start page

// Function that stores the score and the name to the local storage: After all the questions are done, we see the score and the submit form 

// Function that renders the scores and the name on the scoreboard from the local storage: After we submit, we the see the past scores

// On the scoreboard, we see reset and return button

// When the reset button is pressed, it clears local storage

// When the return button is pressed, it goes back to the start button screen

// When the scoreboard button is pressed, it shows the highscores
//TODO make showscore fx
//TODO make quizdone
//TODO fail quiz


//     var currentQuestion = questions[x];
// {
//     questionEl.innerHTML = currentQuestion.question;
//     currentQuestion.a.forEach((a) => {
//     var choiceButton = document.createElement("button");
//     choiceButton.innerHTML = answer.choice;
//     answerButton.appendChild(choiceButton);
// })}

// }

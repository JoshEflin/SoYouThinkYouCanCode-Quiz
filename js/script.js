// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score


var quizBtn = document.querySelector(".begin");
var timerEl = document.querySelector (".timer");

var quizObject = {
    q1: "Am I a cat?",
    q2: "what is cat?",
    q3: "do you eat fish",
    q4: "sample question 4",
}

console.log(timerEl)
// create a quiz function

function bestQuiz() {
    console.log("hello")
    // create a timer function
    var timeRemaining = 30;

    var timer = setInterval(function () {
        timeRemaining--;
        timerEl.textContent = timeRemaining + "seconds left"
    
    },1000)
    

}
// quiz function  contains  a set of questions
// quiz needs a time interval countdown
//  The next question (item in questions object) is an event that occurs when ANY answer is selected
// Questions object asks questions in a random order
// clicking the correct question  adds 1 to a count variable measuring correct answers



// clicking an incorrect questions reduces time remaining in quiz




// when quiz is complete, score is logged to local storage
// 


// add an event listener for button click event to start quiz
quizBtn.addEventListener("click", bestQuiz)
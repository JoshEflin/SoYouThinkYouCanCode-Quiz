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
    question: "Am I a cat?",
    a1: "wrong",
    a2: "wrong",
    a3: "correct",
    a4: " wrong"
};

console.log(timerEl)
// create a quiz function
function endQuiz (){
//  replaces game-arena with score arena.
// inside score arena, append a form to the html and store its values in local storage 

};

function bestQuiz() {
    console.log("hello");
    // create a timer function
    var timeRemaining = 3;
    score = 0

    var timer = setInterval(function () {
        timeRemaining--;
        timerEl.textContent = timeRemaining + "seconds left";
        if (timeRemaining=== 0){
            console.log(score)
            return score;
        }
    
    },1000)
    
    // for loop for quiz object array. For every question (quiz object)  grab EACH answer  and append its value to the HTML in a random order. 
    // the correct answer key will listen for a click that will add to the score counter... 
    // the wrong answer key will subtract valued from timer element or increase the rate of countdown?


};
// quiz function  contains  an arrayu  of question objects
// quiz needs a time interval countdown
//  The next question (item in questions object) is an triggered by an event listenerfor when ANY answer is selected
// 
// clicking the correct question  adds 1 to a count variable measuring correct answers



// clicking an incorrect questions reduces time remaining in quiz




 


// add an event listener for button click event to start quiz
quizBtn.addEventListener("click", bestQuiz)
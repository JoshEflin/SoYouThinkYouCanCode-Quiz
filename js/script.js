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

var quizObject = [{
    question: "How many cups of coffee are in one JavaScript?",
    correct: "JavaScript is a programming language and has nothing to do with coffee",
    a2: "15!",
    a3: "None, a JavaScript is a working prototype of a Hollywood screenplay?",
    a4: "One Javascript contains exactly 4 cups of DECAF only"
},
{
    question: "As a general rule, a develeper should write code so that...",
    correct: "the next developer can easily make sense of its functionality due to detailed comments",
    a2: "the next developer has a very difficult time reading it",
    a3: "it needs to be debugged frequently, leading to job security!",
    a4: "do NOT click me"
},
{
    question: "Javascript doesnt not need a compiler to run because V8 engine renders the Javascript to the webpage....",
    correct: "Just in Time",
    a2: "Almost on time",
    a3: "Just a little late",
    a4: "It doesnt",
    
},
{
    question: "what does ECMA stand for?",
    correct: " European Computer Manufacturers Association",
    a2: "Eichhorn's Christian Ministries Anonymous",
    a3: "Euler's Crazy Mathematical Analysis",
    a4: "Egyption Cat Man Androgens",
    
},
{
    question: "How helpful was this quiz",
    correct: "VERY!",
    a2: "Never make another quiz",
    a3: "for (each question){let userBrain = mushier};",
    a4: "This quiz is IMPOSSIBLE"
},];

console.log(timerEl)
// create a quiz function
function endQuiz (){
//  replaces game-arena with score arena.
// inside score arena, append a form to the html and store its values in local storage 

};
// create a timer functionality
function countdown() {
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
}

questionpicker()
// quiz function  contains  an arrayu  of question objects
// for loop quiz object array. For every question (quiz object)  grab EACH answer  and append its value to the HTML in a random order. 
    
// the correct answer key will listen for a click or a keyboard event that will add to the score counter... 
    
// if correct


// else
// the wrong answer key will subtract valued from timer element or increase the rate of countdown?
    
    
    
//  The next question (item in questions object) is an triggered by an event listenerfor when ANY answer is selected
 
// clicking the correct question  adds 1 to a count variable measuring correct answers

// clicking an incorrect questions reduces time remaining in quiz

function bestQuiz() {
    countdown()
    questionpicker()
    console.log("hello");
    
    
    
    




};
/

// add an event listener for button click event to start quiz
quizBtn.addEventListener("click", bestQuiz)
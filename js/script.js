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

// create all Global variables
var timeRemaining = 10;
var score = 0;
var quizBtn = document.querySelector(".begin");
var timerEl = document.querySelector(".timer");
var gameArena = document.querySelector(".game-arena");

// created HTML elements to be appended in later function
var questionAsked = document.createElement("div");
var answerList = document.createElement("ul");
var correctAnswer = document.createElement("li");
var otherAnswer1 = document.createElement("li");
var otherAnswer2 = document.createElement("li");
var otherAnswer3 = document.createElement("li");

// create an array of question-answer objects
var quizObjects = [{
    question: "How many cups of coffee are in one JavaScript?",
    correct: "JavaScript is a programming language and has nothing to do with coffee",
    a2: "15!",
    a3: "None, a JavaScript is a working prototype of a Hollywood screenplay",
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
    correct: "European Computer Manufacturers Association",
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
var index = 0;
// create a quiz function
function endQuiz() {
    //  replaces game-arena with score arena.
    // inside score arena, append a form to the html and store its values in local storage 
    timeRemaining = 0;
    console.log("we made it to the end")
    var scoreboard = document.createElement("div");
    scoreboard.setAttribute("class", "scoreboard")
    scoreboard.textContent= "WORKING"
    gameArena.appendChild(scoreboard)
};
// create a timer functionality
function countdown() {
    

    var timer = setInterval(function () {
        timeRemaining--;
        timerEl.textContent = timeRemaining + " seconds left";
        if (timeRemaining === 0) {
            console.log(score)
            clearInterval(timer);
            endQuiz()
        }

    }, 1000)
}

function replaceGameArena(){
    gameArena.removeChild(questionAsked)
    gameArena.removeChild(answerList)
}
// function to take in a quiz object from the array and  append all values to HTML based on the values key.
function nextQuestion() {
 index++
 replaceGameArena()
 questionpicker()
}


function questionpicker() {
    var quizObject = quizObjects[index];
    console.log(quizObject)
    if (index>= 5 || timeRemaining===0){
        endQuiz()
    } else {

    // give  elements content and set the class attribute 


    questionAsked.textContent = quizObject.question;
    questionAsked.setAttribute("class", "question");
    gameArena.appendChild(questionAsked)
    
    answerList.setAttribute("class", "answer-list")
    gameArena.appendChild(answerList);
    
    correctAnswer.textContent = quizObject.correct;
    correctAnswer.setAttribute("class", "correct");
    answerList.appendChild(correctAnswer);
    
    otherAnswer1.textContent = quizObject.a2;
    otherAnswer1.setAttribute("class", "incorrect");
    answerList.appendChild(otherAnswer1);
    
    otherAnswer2.textContent = quizObject.a3;
    otherAnswer2.setAttribute("class", "incorrect")
    answerList.appendChild(otherAnswer2);
    
    otherAnswer3.textContent = quizObject.a4;
    otherAnswer3.setAttribute("class", "incorrect")
    answerList.appendChild(otherAnswer3);


    var answerClicked = document.querySelector(".answer-list")

    console.log(answerClicked)
    answerClicked.addEventListener("click", nextQuestion)
    }

}


// the correct answer key will listen for a click or a keyboard event that will add to the score counter... 

// if correct


// else
// the wrong answer key will subtract valued from timer element or increase the rate of countdown?



//  The next question (item in questions object) is an triggered by an event listenerfor when ANY answer is selected

// clicking the correct question  adds 1 to a count variable measuring correct answers

// clicking an incorrect questions reduces time remaining in quiz

function bestQuiz() {
    countdown();
    questionpicker();
};


// add an event listener for button click event to start quiz
quizBtn.addEventListener("click", bestQuiz)


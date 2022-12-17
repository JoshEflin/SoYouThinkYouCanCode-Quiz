
// WHEN the game is over
// THEN I can save my initials and my score

// create all Global variables
var timeRemaining = 100;
var score = 0;
var quizBtn = document.querySelector(".begin");
var timerEl = document.querySelector(".timer");
var gameArena = document.querySelector(".game-arena");
var timer;
var index = 0;
var userInitials;
var storedScore;


// created HTML elements to be appended in later function
var questionAsked = document.createElement("div");
var answerList = document.createElement("ul");
var correctAnswer = document.createElement("li");
var otherAnswer1 = document.createElement("li");
var otherAnswer2 = document.createElement("li");
var otherAnswer3 = document.createElement("li");
var scoreEl = document.createElement("p");

// create an array of question-answer obiects
var quizObiects = [{
    question: "How many cups of coffee are in one JavaScript?",
    correct: "JavaScript is a programming language and has nothing to do with coffee.",
    a2: "15!",
    a3: "None, a JavaScript is a working prototype of a Hollywood screenplay.",
    a4: "One Javascript contains exactly 4 cups of DECAF only."
},
{
    question: "As a general rule, a develeper should write code so that...",
    correct: "The next developer can easily make sense of its functionality due to detailed comments.",
    a2: "The next developer has a very difficult time reading it.",
    a3: "It needs to be debugged frequently, leading to job security!",
    a4: "Do NOT click me"
},
{
    question: "Javascript doesn't not need a compiler to run because V8 engine renders the Javascript to the webpage....",
    correct: "Just in time.",
    a2: "Almost on time.",
    a3: "Just a little late",
    a4: "It doesnt.",

},
{
    question: "What does ECMA stand for?",
    correct: "European Computer Manufacturers Association",
    a2: "Eichhorn's Christian Ministries Anonymous",
    a3: "Euler's Crazy Mathematical Analysis",
    a4: "Egyption Cat Man Androgens",

},
{
    question: "How helpful was this quiz?",
    correct: "VERY!",
    a2: "Never make another quiz.",
    a3: "for (each question){let userBrain = mushier};",
    a4: "This quiz is IMPOSSIBLE."
},];

// create a quiz function
function endQuiz() {
    //  replaces game-arena with score arena.
    // inside score arena, append a form to the html and store its values in local storage 
    clearInterval(timer)
    console.log("we made it to the end")
    gameArena.removeChild(scoreEl, questionAsked, answerList)
    var scoreboard = document.createElement("div");
    scoreboard.setAttribute("class", "scoreboard");
    scoreboard.textContent = "You got " + score + " answers correct ";
    timerEl.textContent = "you had " + timeRemaining + " seconds left!";
    gameArena.appendChild(scoreboard);
    var initials =  document.createElement("input");
    gameArena.appendChild(initials)
    initials.setAttribute("class", "initials")
    document.querySelector(".initials").addEventListener("keyup", function (evt) {
        
        if(evt.key === "Enter"){
            userInitials=localStorage.setItem("initials",JSON.stringify(initials.value));
            storedScore = {
                UI : userInitials,
                score: score,
                timerRemaining: timeRemaining,
            }   
    }
        console.log(storedScore)    
        })

   
    var storedScores = []
   


};
// create a timer functionality
function countdown() {

    timer = setInterval(function () {
        timeRemaining--;
        timerEl.textContent = timeRemaining + " seconds left";
        if (timeRemaining <= 0) {
            clearInterval(timer);
            endQuiz();
        }

    }, 1000);
}

function replaceGameArena() {
    gameArena.removeChild(questionAsked);
    gameArena.removeChild(answerList);
}
// function to take in a quiz obiect from the array and  append all values to HTML based on the values key.
function increaseScore() {
    score += 1;
    gameArena.appendChild(scoreEl);
    scoreEl.textContent = score + " correct answers";
    nextQuestion();
}
function decreaseTime() {
    timeRemaining -= 5;
    nextQuestion();
}
function nextQuestion() {
    index++;
    replaceGameArena();
    mainQuizFunction();
}
// the Shuffler function is a basic shuffling algorithm based on Fisher Yates shuffle. replacing one item in an array with a random item and looping through
function shuffler(answerArray) {
    var m = answerArray.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = answerArray[m];
        answerArray[m] = answerArray[i];
        answerArray[i] = t;
    }

    return answerArray;
}
function mainQuizFunction() {
    var quizObiect = quizObiects[index];
    console.log(quizObiect);
    if (index >= 5 || timeRemaining === 0) {
        endQuiz();
    } else {

        // give  elements content and set the class attribute. Create an array of all the answers and append them to the HTML in random order.

        var answerArray = [correctAnswer, otherAnswer1, otherAnswer2, otherAnswer3];

        questionAsked.textContent = quizObiect.question;
        questionAsked.setAttribute("class", "question");
        gameArena.appendChild(questionAsked);

        answerList.setAttribute("class", "answer-list");
        gameArena.appendChild(answerList);

        correctAnswer.textContent = quizObiect.correct;
        correctAnswer.setAttribute("class", "correct");

        otherAnswer1.textContent = quizObiect.a2;
        otherAnswer1.setAttribute("class", "incorrect");

        otherAnswer2.textContent = quizObiect.a3;
        otherAnswer2.setAttribute("class", "incorrect");

        otherAnswer3.textContent = quizObiect.a4;
        otherAnswer3.setAttribute("class", "incorrect");

        shuffler(answerArray);
        for (i = 0; i < answerArray.length; i++) {
            answerList.appendChild(answerArray[i]);
        }
        // create an event listener for correct answers and incorrect answers.  Use a for loop to give the event listener to each list 
        // element in the array created by querySelectorAll()
        var incorrectClicked = document.querySelectorAll(".incorrect");
        var correctClicked = document.querySelector(".correct");

        correctClicked.addEventListener("click", increaseScore);

        for (i = 0; i < incorrectClicked.length; i++) {
            incorrectClicked[i].addEventListener("click", decreaseTime);


        }
    }
}

function worldsBestQuiz() {
    countdown();
    mainQuizFunction();
};

// add an event listener for button click event to start quiz
quizBtn.addEventListener("click", worldsBestQuiz);



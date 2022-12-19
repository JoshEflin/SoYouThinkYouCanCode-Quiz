// create all Global variables
var timeRemaining; 
var score = 0;
var quizBtn = document.querySelector(".begin");
var timerEl = document.querySelector(".timer");
var gameArena = document.querySelector(".game-arena");
var hiddenEl = document.querySelector(".hidden");
var timer;
var index = 0;
var userInitials;
var storedScore;
var storedScores = [];
var initials;
var scoreList;
var scoreboard;



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
}];

// create a function that ends the quiz
function endQuiz() {
    // replaces game-arena with score arena.
    // inside score arena, append a form to the html and store its values in local storage
    hiddenEl.setAttribute("class", "visible");
    console.log(hiddenEl)
    clearInterval(timer);
    gameArena.removeChild(scoreEl);
    replaceGameArena();
    initials = document.createElement("input");
    gameArena.appendChild(initials);
    initials.setAttribute("class", "initials");
    document.querySelector(".initials").addEventListener("keyup", addToStorage);
}
// creates a scoreboard inside the game arena, and appends a list of user score data
function showHighScores() {
    scoreboard = document.createElement("div");
    scoreboard.setAttribute("class", "scoreboard");
    scoreboard.textContent = "You got " + score + " answers correct ";
    timerEl.textContent = "you had " + timeRemaining + " seconds left!";
    gameArena.appendChild(scoreboard);
    scoreList = document.createElement("ul");
    scoreboard.appendChild(scoreList);
    scoreList.setAttribute("Class", "scoreboard");
    var highScores = document.querySelector(".scoreboard");
    for (i = 0; i < storedScores.length; i++) {
        console.log(storedScores);
        var highScore = document.createElement("li");
        highScore.setAttribute("class", "score");
        highScore.textContent = "PLAYER: " + storedScores[i].userInitials + "  Scored:" + storedScores[i].score + " in " + storedScores[i].timeRemaining + " seconds!";
        highScores.appendChild(highScore);
    }
}
// adds the current user's score to local storage, if there is already an item of the same name in local storage, it is appended.
function addToStorage(evt) {
    {

        if (evt.key === "Enter") {
            userInitials = initials.value;

            storedScore = {
                userInitials: userInitials,
                score: score,
                timeRemaining: timeRemaining,

            }
            storedScores = JSON.parse(localStorage.getItem("storedScores"));
            if (storedScores === null) {
                storedScores = [];
            }
            storedScores.push(storedScore);
            localStorage.setItem("storedScores", JSON.stringify(storedScores));
            showHighScores();

        }
    }
}

// create a timer functionality
function countdown() {
    timeRemaining = 60;
    timer = setInterval(function () {
        timeRemaining--;
        timerEl.textContent = timeRemaining + " seconds left";
        if (timeRemaining <= 0) {
            endQuiz();
        }

    }, 1000);
}
// removes question and answers before adding the next round of questions and anwswers.
function replaceGameArena() {
    gameArena.removeChild(questionAsked);
    gameArena.removeChild(answerList);
}

function increaseScore() {
    score += 1;

    scoreEl.textContent = score + " correct answers";
    nextQuestion();
}
function decreaseTime() {
    timeRemaining -= 5;
    nextQuestion();
}
// makes sure there are questions left to ask before calling the functions that cycle to the next question
function nextQuestion() {
    index++;
    if (index > 4) {
        endQuiz();
    } else {
        replaceGameArena();
        mainQuizFunction();
    }
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
// Grab a question and set of answers, append them to HTML. sets classes for all elements to be targetted by CSS.
function mainQuizFunction() {
    gameArena.appendChild(scoreEl);
    var quizObiect = quizObiects[index];
    // Create an array of all the answers and append them to the HTML in random order.
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
    // Create event listeners on all the answers (note: this is not the best way to do this, should be using event delegation but I ran out of time)
    var incorrectClicked = document.querySelectorAll(".incorrect");
    var correctClicked = document.querySelector(".correct");

    correctClicked.addEventListener("click", increaseScore);

    for (i = 0; i < incorrectClicked.length; i++) {
        incorrectClicked[i].addEventListener("click", decreaseTime);
    }
}

function worldsBestQuiz() {
    console.log(index)
    if (index > 4) {
        gameArena.removeChild(scoreboard);
        gameArena.removeChild(initials);
        hiddenEl.setAttribute("class", "hidden");
    }

    index = 0;
    scoreEl.textContent = "NEW QUIZ";
    score =0 ;
    countdown();
    mainQuizFunction();
};
// add an event listener for button click event to start quiz
quizBtn.addEventListener("click", worldsBestQuiz);
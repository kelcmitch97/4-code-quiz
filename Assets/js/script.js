// Variables
var firstPageContentEl = document.querySelector(".first-page-wrapper");
var quizQuestionsEl = document.querySelector("#quiz");
var startButtonEl = document.querySelector("#start-quiz-button");
var quizResultsEl = document.querySelector("#quiz-results");
var timerEl = document.querySelector("#timer");
var questionTitleEl = document.querySelector("#title");
var questionListEl = document.querySelector("#question-list");

// Timer variables: 
var timeLeft = 75;
var timeInterval;
// Quiz Questions Object
var myQuestions = [
    {
        question: "Commonly used data types DO not include:",
        answers: {
            "1": "strings",
            "2": "booleans",
            "3": "alerts",
            "4": "numbers"
        },
        correctAnswer: "3"
    },
    {
        question: "The condition in an if/else statement us enclosed with _______.",
        answers: {
            "1": "quotes",
            "2": "curly brackets",
            "3": "parentheses",
            "4": "square brackets"
        },
        correctAnswer: "3"
    },
    {
        question: "Arrays in JavaScript can be used to store _______.",
        answers: {
            "1": "numbers and strings",
            "2": "other arrays",
            "3": "booleans",
            "4": "all of the above"
        },
        correctAnswer: "4"
    },
    {
        question: "String values must be enclosed within _______ when being assigned to variables.",
        answers: {
            "1": "commas",
            "2": "curly brackets",
            "3": "quotes",
            "4": "parentheses"
        },
        correctAnswer: "3"
    },
    {
        question: "A very useful took used during development and debugging for printing content to the debugger is:",
        answers: {
            "1": "JavaScript",
            "2": "terminal/bash",
            "3": "for loops",
            "4": "console.log"
        },
        correctAnswer: "4"
    }
];

// Timer that starts when the "Start Quiz" button is clicked
function countdownTimer() {

    timeInterval = setInterval(function () {

        if (timeLeft > 1) {
            timerEl.textContent = "Time: " + timeLeft;
            timeLeft--;
        }
        // if user gets a question wrong, subtract 10 seconds from timer

        else {
            timerEl.textContent = ' ';
            clearInterval(timeInterval);
            alert("TIMES UP!!");
        }
    }, 1000);

};

function questionAnswerHandler (event) {

};

function quizQuestions() {
    var questionTitle = myQuestions[i].question
    questionTitleEl.textContent = questionTitle;
    var answerOption1 = myQuestions[i].answers[0];
    var answerOption2 = myQuestions[i].answers[1];
    var answerOption3 = myQuestions[i].answers[2];
    var answerOption4 = myQuestions[i].answers[3];

    questionListEl.innerHTML = ' ';

    var listOption1 = document.createElement("li");
    listOption1.setAttribute("class", "list-questions");
    var listButton1 = document.createElement("button");
    listButton1.setAttribute("class", "list-button");
    listButton1.textContent = answerOption1;
    listOption1.appendChild(listButton1);
    questionListEl.appendChild(listOption1);
    quizQuestionsEl.appendChild(questionListEl);

    var listOption2 = document.createElement("li");
    listOption2.setAttribute("class", "list-questions");
    var listButton2 = document.createElement("button");
    listButton2.setAttribute("class", "list-button");
    listButton2.textContent = answerOption2;
    listOption2.appendChild(listButton2);
    questionListEl.appendChild(listOption2);
    quizQuestionsEl.appendChild(questionListEl);

    var listOption3 = document.createElement("li");
    listOption3.setAttribute("class", "list-questions");
    var listButton3 = document.createElement("button");
    listButton3.setAttribute("class", "list-button");
    listButton3.textContent = answerOption3;
    listOption3.appendChild(listButton3);
    questionListEl.appendChild(listOption3);
    quizQuestionsEl.appendChild(questionListEl);

    var listOption4 = document.createElement("li");
    listOption4.setAttribute("class", "list-questions");
    var listButton4 = document.createElement("button");
    listButton4.setAttribute("class", "list-button");
    listButton4.textContent = answerOption4;
    listOption1.appendChild(listButton4);
    questionListEl.appendChild(listOption4);
    quizQuestionsEl.appendChild(questionListEl);

    var allButtonsEl = document.querySelectorAll("list-button");
    allButtonsEl.forEach(function(event) {
        event.addEventListener("click", questionAnswerHandler)
    });
};

function quizResults() {

};

startButtonEl.addEventListener("click", function (event) {
    if (event.target === startButtonEl) {
        firstPageContentEl.style.display = "none";
        countdownTimer();
        quizQuestions();
    }
});


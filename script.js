//Start Page Global Variables
var startBtn = document.getElementId("startBtn");
var homeContainer = document.getElementById("homeContainer");
var quizContainer = document.getElementById("quizContainer");
var questionText = document.getElementById("questionText");
var choiceA = document.getElementById("choiceA");
var choiceB = document.getElementById("choiceB");
var choiceC = document.getElementById("choiceC");
var choiceD = document.getElementById("choiceD");
var score = 0;
let i =0;
/*
var time_remaining = 75;
var timerInterval;
var end = false;
*/
//Points calculator
/*var points = function(){
    score = score + 10;
    console.log("You have " + score + " points!");
}
var timer = function() {
     timerInterval = setInterval(() => {
        if (end === false) {
            timer_el.textContent = time_remaining;
            time_remaining --;
            return time_remaining;
        } else {
            timer_el.textContent = "";
            clearInterval(timerInterval);
        }
    }, 1000);

    console.log("TIMER STARTED")
    if (end === true){
        timer_el.textContent = time_remaining;
    }
}*/

//Array of quiz questions
var quizQuestions = [{
    question: "Commonly used data types DO NOT include:",
    answerChoices: ["A: strings", "B: booleans", "C: alerts", "D: numbers"],
    correctAnswer: 2 },
{
    questions: "The condition of an if / else statement is enclosed within ___.",
    answerChoices: ["A: quotes", "B: curly brackets", "C: parentheses", "D: square brackets"],
    correctAnswer: 2 },
    
{
    questions: "Arrays in Javascript can be used to store ___.",
    answerChoices: ["A: numbers and strings", "B: other arrays", "C: booleans", "D: all of the above"],
    correctAnswer: 3 },
{
    questions: "String values must be enclosed within ___ when being assigned to variables.",
    answerChoices: ["A: commas","B: curly brackets", "C: quotes", "D: parentheses"],
    correctAnswer: 3 },
{
    questions: "A very useful tool used during development and debugging for printing content to the debugger is___.",
    answerChoices:[ "A: Javascript", "B: terminal/bash", "C: for loops", "D: console.log"],
    correctAnswer: 3 }
];

//Removes Start Page Elements
/*startBtn.addEventListener("click"), event =>{
    timer();
    startBtn.remove();
    startTitle.remove();
    startParagraph.remove(); 
    startQuizQuestions();
};*/

//Start Quiz
startBtn.addEventListener("click",function startQuizQuestions() {
    startBtn.remove();
    startTitle.remove();
    startParagraph.remove();
    questionText.textContent = quizQuestions[i].questions;
    choiceA.textContent = quizQuestions[i].answerChoices[0];
    choiceB.textContent = quizQuestions[i].answerChoices[1];
    choiceC.textContent = quizQuestions[i].answerChoices[2];
    choiceD.textContent = quizQuestions[i].answerChoices[3];

});


//Display quiz questions and answer choices



//Move forward through questions
/*choiceA.addEventListener('click',function(event){
    event.stopPropagation();
    correctAnswer= quizQuestions[i].correctAnswer;
    console.log(correctAnswer + " is the correct answer!");


});





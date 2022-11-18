//Start Page Global Variables
var startBtn = document.getElementById("startBtn");
var homeContainer = document.getElementById("homeContainer");
var quizContainer = document.getElementById("quizContainer");
var questionText = document.getElementById("questionText");
var choiceA = document.getElementById("choiceA");
var choiceB = document.getElementById("choiceB");
var choiceC = document.getElementById("choiceC");
var choiceD = document.getElementById("choiceD");
var highScores=[];
var output="";
var score = 0;
let i =0;

//Timer Variables
var time_remaining = 75;
var time_start= true;
var end = false;
var countDownTimer = document.getElementById("countDownTimer");

//Count down by seconds
var countDown = setInterval(setCountDown, 1000);

function setCountDown(){
    if(end)
    time_remaining--;
    if(time_remaining<=0){
        quiz_Over();
    time_remaining = 0;
    }
    document.getElementById("timer").innerHTML = time_remaining;
};

//Array of quiz questions
var quizQuestions = [{
    questions: "Commonly used data types DO NOT include:",
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


// Change Display of Home Page Container & Start Quiz
startBtn.addEventListener("click",function() {
    document.getElementById("homeContainer").style.display="none";
    quizContainer.style.display = "block";
    countDownTimer.style.display="block";
    document.getElementById("score").style.display="block";
    document.getElementById("scoreTrack").style.display="block";
    setCountDown();
    startQuizQuestions();
    end= true;
});


//Display quiz questions and answer choices
function startQuizQuestions(){
questionText.textContent = quizQuestions[i].questions;
choiceA.textContent = quizQuestions[i].answerChoices[0];
choiceB.textContent = quizQuestions[i].answerChoices[1];
choiceC.textContent = quizQuestions[i].answerChoices[2];
choiceD.textContent = quizQuestions[i].answerChoices[3];
};

//AddEventListener for all answer choices to move through questions

//Answer Choice A
choiceA.addEventListener('click',function(event){
    event.stopPropagation();
    correctAnswer= quizQuestions[i].correctAnswer;

    //Check if user input is correct answer
    //If correct, flash button to green and display text
    if (0 === correctAnswer){
        document.getElementById("userResponse").innerHTML = "That is Correct!";
        setTimeout(function(){
            document.getElementById("userResponse").innerHTML = "";
            }, 500)

        score = score + 10;

}else{
    time_remaining -= 10;
    document.getElementById("userResponse").innerHTML = "Incorrect";
    setTimeout(function(){
        document.getElementById("userResponse").innerHTML = "";
        }, 500)
    
}
if (i>= quizQuestions.length -1){
quiz_Over();
} else {
    i++
    startQuizQuestions();
};

});

//Answer Choice B
choiceB.addEventListener('click',function(event){
    event.stopPropagation();
    correctAnswer= quizQuestions[i].correctAnswer;

    //Check if user input is correct answer
    if (1 === correctAnswer){
        document.getElementById("userResponse").innerHTML = "That is Correct!";
        setTimeout(function(){
            document.getElementById("userResponse").innerHTML = "";
            }, 500)

        score = score + 10;
    
}else{
    time_remaining -= 10;
    document.getElementById("userResponse").innerHTML = "Incorrect";
    setTimeout(function(){
        document.getElementById("userResponse").innerHTML = "";
        }, 500)
}
if (i>= quizQuestions.length -1){
    quiz_Over();
} else {
    i++
    startQuizQuestions();
};

});

//Answer Choice C
choiceC.addEventListener('click',function(event){
    event.stopPropagation();
    correctAnswer= quizQuestions[i].correctAnswer;

    //Check if user input is correct answer
    if (2 === correctAnswer){
        document.getElementById("userResponse").innerHTML = "That is Correct!";
        setTimeout(function(){
            document.getElementById("userResponse").innerHTML = "";
            }, 500)

        score = score + 10;
            

}else{
    time_remaining -= 10;
    document.getElementById("userResponse").innerHTML = "Incorrect";
    setTimeout(function(){
        document.getElementById("userResponse").innerHTML = "";
        }, 500)
        
}
if (i>= quizQuestions.length -1){
quiz_Over();
} else {
    i++
    startQuizQuestions();
};

});

//Answer Choice D
choiceD.addEventListener('click',function(event){
    event.stopPropagation();
    correctAnswer= quizQuestions[i].correctAnswer;

    //Check if user input is correct answer
    if (3 === correctAnswer){
        document.getElementById("userResponse").innerHTML = "That is Correct!";
        setTimeout(function(){
            document.getElementById("userResponse").innerHTML = "";
            }, 500)
        
        score = score + 10;
}else{
    time_remaining -= 10;
    document.getElementById("userResponse").innerHTML = "Incorrect";
    setTimeout(function(){
        document.getElementById("userResponse").innerHTML = "";
        }, 500)
}
if (i>= quizQuestions.length -1){
quiz_Over();

} else {
    i++
    startQuizQuestions();
};

});

//Quiz Over
function quiz_Over(){
    quizContainer.remove();
    document.getElementById("countDownTimer").style.display="none";
    document.getElementById("scoreTrack").style.display="none";
    document.getElementById("userResponse").innerHTML="";
    document.getElementById("finalScore").innerHTML= score;
    document.getElementById("endGame").style.display="block";
};
//Submit and view high scores

function submitScore(){
    highScores.push(document.getElementById("initials").value+" "+score);
    viewHighScores();
};

function viewHighScores(){
    document.getElementById("endGame").style.display= "none";
    document.getElementById("homeContainer").style.display= "none";
    document.getElementById("highScoresPage").style.display="block";

    output="";
    for(let j=0; j<highScores.length; j++){
         output = output + "  " + highScores[j];
    }
    document.getElementById("highScores").innerHTML= output;                
     clearQuiz();

};

//Return to home page
function goHome(){
    document.getElementById("highScoresPage").style.display="none";
    document.getElementById("homeContainer").style.display="block";
    countDownTimer.style.display="block";
    document.getElementById("score").style.display="block";
    document.getElementById("scoreTrack").style.display="block";
    clearQuiz();
};

//Clear high scores
function clearScores(){
    highScores = [];
    document.getElementById("highScores").innerHTML= highScores;  
};

//Clear page
function clearQuiz(){
startQuizQuestions();
time_remaining=75;
time_start=true;
end=false;
i=0
score=0;
};
var contentEl = document.querySelector('#content');
var startQuizEl = document.querySelector('#startQuiz');
var timeLeftEl = document.querySelector('#timerLeft');
var containerEl = document.querySelector('#container');
var timer = 5;
var currentQuestionIndex = 0;
var score = 0; 


var questions = [
    {
        question: "How do you write a function in Javascript? ",
        choices: ["function()", "function[]", "function{}", "function:"],
        answer: "function()"
    },
    {
        question: "Question?",
        choices: ["answer Choices"],
        answer: "Answer"
    },
    {
        question: "Question?",
        choices: ["answer Choices"],
        answer: "Answer"
    },
]; 

function renderCurrentQuestion () {
    containerEl.innerHTML = "";
    var currentQuestion = questions[currentQuestionIndex];
    
    //console.log(currentQuestion);
   // console.log(typeof currentQuestion);

    var header = document.createElement('h2');
    header.textContent = currentQuestion.questions;
    containerEl.appendChild(header);
    var ulEl = document.createElement('ul')

    for(var i=0; i<currentQuestion.choices.length; i++){
        var liEL=document.createElement('li');
        liEL.textContent=currentQuestion.choices[i];
        ulEl.appendChild(liEL);
    }
    containerEl.appendChild(ulEl);

}



startQuizEl.addEventListener('click', function() {
    renderCurrentQuestion();
    
    var myInterval = setInterval(function() {
        timeLeft.textContent = timer;
        timer--;

        if (timer<0) {
            clearInterval(myInterval);
           var gameover;
        }
    }, 1000);
});

containerEl.addEventListener('click', function(event){
    console.log(event);
    if (event.target.matches('li')){
        var currentQuestion = questions[currentQuestionIndex];
        var userGuess = event.target.textContent;
        if(userGuess === currentQuestion.answer){
            timer+=5;
        }
    } if(userGuess != currentQuestion.answer) {
        timer-5;
    }
});
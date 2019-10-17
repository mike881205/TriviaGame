// Countdown timer function

let clockRunning = false;
let seconds = 10;
let countdownTimer;

function startTimer() {
  clockRunning = true;
  clearInterval(countdownTimer);
  countdownTimer = setInterval(decrement, 1000);
}

function stopTimer() {
  clockRunning = false;
  clearInterval(countdownTimer);
}

function decrement() {
  seconds--;
  $("#countdown").html(seconds);
  if (seconds === 0) {
    stopTimer();
    $("#question").hide();
    $("#choices").hide();
    $("#submit").hide();
    $('#answerHeader').html("Time's Up! The correct answer is:")
    $("#showAnswer").show();
  }
}

//===============================================================
// Page Load
//===============================================================

function pageLoad() {
  $("#quiz").hide()
  stopTimer();
}

pageLoad();

//===============================================================
// Start Quiz
//===============================================================

// Load a random question

const choiceA = $("#A");
const choiceB = $("#B");
const choiceC = $("#C");
const choiceD = $("#D");

let questions = [
  {
    question : "Question 1",
    imgSrc : "img/html.png",
    choiceA : "Correct",
    choiceB : "Wrong",
    choiceC : "Wrong",
    choiceD : "Wrong",
    correct : "A",
    answer : "Answer A"
  },{
    question : "Question 2",
    imgSrc : "img/html.png",
    choiceA : "Wrong",
    choiceB : "Correct",
    choiceC : "Wrong",
    choiceD : "Wrong",
    correct : "B",
    answer : "Answer B"
  },{
    question : "Question 3",
    imgSrc : "img/html.png",
    choiceA : "Wrong",
    choiceB : "Wrong",
    choiceC : "Correct",
    choiceD : "Wrong",
    correct : "C",
    answer : "Answer C"
  },{
    question : "Question 4",
    imgSrc : "img/html.png",
    choiceA : "Wrong",
    choiceB : "Wrong",
    choiceC : "Wrong",
    choiceD : "Correct",
    correct : "D",
    answer : "Answer D"
  }
]

// Generate random question

let randQuestion = questions[Math.floor(Math.random() * questions.length)]

console.log(randQuestion);

function renderQuestion() {
  $("#question").html(randQuestion.question)
  $("#answer").html(randQuestion.answer)
}

$("#start").on("click", function() {
  $("#intro").hide();
  $("#showAnswer").hide();
  $("#quiz").show();
  renderQuestion();
  startTimer();
  })

// const lastQuestion = questions.length - 1;
// let runningQuestion = 0;

// function renderProgress(){

//   for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
//       progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
//   }
// }


// User input

// let checked = false;

// $("#submit").on("click", function() {
//   let userChoice = $("choice");
//   let userAnswer;
  
//   for( let i = 0; i < userChoice.length; i++ ) {
//      if(userChoice[i].checked) {
//        checked = true;
//        userAnswer = userChoice[i].value;
//      }
//   }
  
//   // if the user clicks the submit button without selecting any option, alert the user.
//   if(!checked) {
//     alert("Please select an anwer");
//     return;
//   }
//   // Correct answer
//   if(userAnswer === "A") {
//     $("#question").hide()
//     $("#showAnswer").show()
//     $("#answerHeader").html("Correct!")
//     clearInterval(countdownTimer);
//     clockRunning = false;
//   }
//   // incorrect answer
//   else {
//     $("#question").hide()
//     $("#showAnswer").show()
//     $("#answerHeader").html("Wrong! The correct answer is:")
//     clearInterval(countdownTimer);
//     clockRunning = false;
//   }
  
// })



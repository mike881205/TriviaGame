const intro = $("#intro");
const start = $("#start");
const quiz = $("#showQuiz");
const showQuestion = $("#showQuestion");
const timer = $("#timer");
const question = $("#question");
const choices = $("#choices");
const choiceA = $("#A");
const choiceB = $("#B");
const choiceC = $("#C");
const sumbit = $("#submit");
const showAnswer = $("#showAnswer");
const answerHeader = $("#answerHeader");
const qImg = $("#qImg");
const answer = $("#answer");
const next = $("#next");
const showResults = $("#showResults");
const scoreDiv = $("#scoreDiv");

//===============================================================
// Countdown timer function
//===============================================================

let clockRunning = false;
let seconds = 15;
let countdownTimer;

function startTimer() {
  clockRunning = true;
  clearInterval(countdownTimer);
  countdownTimer = setInterval(decrement, 1000);
  seconds = 15;
}

function stopTimer() {
  clockRunning = false;
  clearInterval(countdownTimer);
}

function decrement() {
  seconds--;
  timer.html(seconds);
  if (seconds === 0) {
    stopTimer();
    showQuestion.hide();
    answerHeader.html("Time's Up! The correct answer is:")
    showAnswer.show();
  }
}

//===============================================================
// Questions
//===============================================================

let questions = [
  {
    question : "Who were the creators of the Ninja Turtles?",
    imgSrc : "img/html.png",
    choiceA : "Kevin Eastman & Peter Laird",
    choiceB : "Lewis & Clark",
    choiceC : "Stan Lee",
    choiceD : "Jack Kirby",
    correct : "A",
    answer : "Kevin Eastman & Peter Laird created the TMNT"
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

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
let score = 0;

function renderQuestion(){
  let q = questions[runningQuestion];
  question.html(q.question);
  choiceA.html(q.choiceA);
  choiceB.html(q.choiceB);
  choiceC.html(q.choiceC);
  choices.show();
}

function renderAnswer(){
  let a = questions[runningQuestion];
  answer.text(a.answer);
}

function renderChoices(){
  let c = questions[runningQuestion];
  choiceA.text(c.choiceA);
  choiceB.text(c.choiceB);
  choiceC.text(c.choiceC);
}

//===============================================================
// Page Load
//===============================================================

function pageLoad() {
  quiz.hide()
  choices.hide()
  stopTimer();
}

pageLoad();

//===============================================================
// Start Quiz
//===============================================================

start.on("click", function() {
  intro.hide();
  quiz.show();
  showAnswer.hide();
  showResults.hide();
  startTimer();
  renderQuestion();
  renderAnswer();
  renderChoices();
  console.log(questions[runningQuestion].choiceA) 
})

// User input

let checked = false;

sumbit.on("click", function() {
  let userChoice = $(".choice");
  let userAnswer;
  
  for( let i = 0; i < userChoice.length; i++ ) {
     if(userChoice[i].checked) {
       checked = true;
       userAnswer = userChoice[i].value;
     }
  }

  if(!checked) {
    alert("Please select an answer");
    return;
  }

  if( userAnswer == questions[runningQuestion].correct){
      // answer is correct
      stopTimer()
      showQuestion.hide();
      showAnswer.show()
      next.show();
      answerHeader.html("Correct!")
      renderAnswer();
      score++;
  }else{
      // answer is wrong
      stopTimer()
      showQuestion.hide();
      showAnswer.show();
      next.show();
      answerHeader.html("Wrong! The correct answer is:")
      renderAnswer();
  }

  if(runningQuestion < lastQuestion){
      runningQuestion++;
      renderQuestion();
  }else{
      // end the quiz and show the score
      scoreRender();
  }
})

function renderCounter(){
  if(runningQuestion < lastQuestion){
      runningQuestion++;
      renderQuestion();
  }else{
      // end the quiz and show the score
      scoreRender();
      next.text("See Results")
  }
}

next.on("click", function(){
  showQuestion.show();
  showAnswer.hide();
  renderCounter();
  startTimer();
})

function scoreRender(){ 
  // calculate the amount of question percent answered by the user
  const scorePerCent = Math.round(100 * score/questions.length);

  // let img = (scorePerCent >= 80) ? "img/5.png" :
  // (scorePerCent >= 60) ? "img/4.png" :
  // (scorePerCent >= 40) ? "img/3.png" :
  // (scorePerCent >= 20) ? "img/2.png" :
  // "img/1.png";

  // scoreDiv.html("<img src="+ img +">");
  scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}
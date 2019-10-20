//===============================================================
// Questions
//===============================================================

let questions = [
  {
      question : "Who were the creators of the Ninja Turtles?",
      imgSrc : "https://live.staticflickr.com/2366/2454492362_0e6c63d45b.jpg",
      choiceA : "Kevin Eastman & Peter Laird",
      choiceB : "Lewis & Clark",
      choiceC : "Stan Lee",
      correct : "A",
      answer : "Kevin Eastman & Peter Laird"
  },{
      question : "In the beginning, all of the turtles wore the same color bandana. What color were they?",
      imgSrc : "https://images.penguinrandomhouse.com/cover/9781684053889",
      choiceA : "Blue",
      choiceB : "Red",
      choiceC : "Green",
      correct : "B",
      answer : "Red"
  },{
      question : "What is the real name of the Turtles' arch nemesis 'The Shredder'?",
      imgSrc : "https://www.syfy.com/sites/syfy/files/styles/1170xauto/public/shredder_in_hell_slice_1.png",
      choiceA : "Norman Osborn",
      choiceB : "Lex Luther",
      choiceC : "Oroku Saki",
      correct : "C",
      answer : "Oroku Saki"
  },{
      question : "What is the name of the company who made the ooze that mutated the turtles?",
      imgSrc : "https://live.staticflickr.com/7405/11259387984_902fda5466_b.jpg",
      choiceA : "TGRI",
      choiceB : "Haliburton",
      choiceC : "Enron",
      correct : "A",
      answer : "TGRI"
  },{
      question : "The evil henchmen Bebop and Rocksteady are what kind of animals?",
      imgSrc : "https://vignette.wikia.nocookie.net/monstermovies/images/c/c1/Bebop_%26_Rocksteady.jpg/revision/latest?cb=20170705125706",
      choiceA : "Rabbit & Fox",
      choiceB : "Warthog & Rhinoceros",
      choiceC : "Armadillo & Bear",
      correct : "B",
      answer : "Warthog & Rhinoceros"
  },{
      question : "What is April O'Neil's profession?",
      imgSrc : "https://am23.akamaized.net/tms/cnt/uploads/2018/07/teenage-mutant-ninja-turtles-1200x675.jpg",
      choiceA : "Mail Carrier",
      choiceB : "Radio Jockey",
      choiceC : "News Reporter",
      correct : "C",
      answer : "News Reporter"
  },{
      question : "Which turtle is known as the 'Party Dude'?",
      imgSrc : "https://i.pinimg.com/originals/4d/2a/a8/4d2aa8438fd7e3409ec0a1fdddb2398f.jpg",
      choiceA : "Michelangelo",
      choiceB : "Raphael",
      choiceC : "Leonardo",
      correct : "A",
      answer : "Michelangelo"
  },{
      question : "What famous entertainer performed the song 'Ninja Rap' in the second live action movie 'Secret of the Ooze'?",
      imgSrc : "http://iwatchstuff.com/2014/08/05/vanilla-ice-turtles.jpg",
      choiceA : "Mos Def",
      choiceB : "Vanilla Ice",
      choiceC : "Jay-Z",
      correct : "B",
      answer : "Vanilla Ice"
  },{
      question : "What year was the very first issue of the Teenage Mutant Ninja Turtles comic book published?",
      imgSrc : "https://www.idwpublishing.com/wp-content/uploads/2016/12/TMNT-AE-cvr.jpg",
      choiceA : "1988",
      choiceB : "1991",
      choiceC : "1984",
      correct : "C",
      answer : "1984"
  },{
      question : "How many years did the cartoon series run for?",
      imgSrc : "https://pm1.narvii.com/6100/2dbc921e1e869b6d98abe5361620abec40b3a2b8_hq.jpg",
      choiceA : "10",
      choiceB : "15",
      choiceC : "5",
      correct : "A",
      answer : "10 years"
  }
]

//===============================================================
// Global Variables
//===============================================================

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
const qImg = $("<img id='qImg'>");
const answer = $("#answer");
const next = $("#next");
const showResults = $("#showResults");
const scoreDiv = $("#scoreDiv");

let clockRunning = false;
let seconds = 20;
let countdownTimer;

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let score = 0;

let checked = false;
let userChoice = $("input");
let userAnswer;

//===============================================================
// Shuffle Questions Function
//===============================================================

function shuffle() {
  var currentIndex = questions.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = questions[currentIndex];
    questions[currentIndex] = questions[randomIndex];
    questions[randomIndex] = temporaryValue;
  }

  return questions;
}

//===============================================================
// Timer function
//===============================================================

//Start Clock
function startTimer() {
  clockRunning = true;

  // Reset clock
  clearInterval(countdownTimer);
  countdownTimer = setInterval(decrement, 1000);
  seconds = 20;
  timer.html(seconds);
  }

// Stop Clock
function stopTimer() {
  clockRunning = false;
  clearInterval(countdownTimer);
  }

// Countdown function
function decrement() {
  seconds--;
  timer.html(seconds);
  
  // Once the timer reaches 0
  if (seconds === 0) {
      
      // Stop the timer
      stopTimer();

      // Hide the question
      showQuestion.hide();

      // Let the user know that time is up
      answerHeader.html("Time's Up! The correct answer is:");

      // Show the asnwer
      showAnswer.show();
  }
}

//===============================================================
// Render Questions, Answers, & Score
//===============================================================

// Render Question
function renderQuestion(){

  // Create a variable to hold the index
  let q = questions[runningQuestion];
  
  // Show the question
  question.html(q.question);

  // Show the choices
  choiceA.html(q.choiceA);
  choiceB.html(q.choiceB);
  choiceC.html(q.choiceC);
  // choices.show();
}

// Render Answer
function renderAnswer(){

  // Create a variable to hold the index
  let a = questions[runningQuestion];
  
  // Show the answer
  answer.text(a.answer);
}

// Render Image
function renderImg(){

  // Create a variable to hold the index
  let i = questions[runningQuestion];
  
  // Show the image
  qImg.attr('src', i.imgSrc).height("400px").width("500px")
  qImg.appendTo("#imgDiv");
}

//===============================================================
// Render Score
//===============================================================

function scoreRender(){ 
  scoreDiv.html("You got " + score + "/10 correct!");
}

//===============================================================
// Page Load
//===============================================================

// When the page loads
function pageLoad() {
    
  // Stop timer
  stopTimer();

  // Hide timer
  timer.hide();

  // Hide quiz section
  quiz.hide()

  // Hide results section
  showResults.hide();
}

pageLoad();

//===============================================================
// Start Quiz
//===============================================================

// When the user clicks "Start"
start.on("click", function() {

  // Shuffle Questions
  shuffle();
  
  // Hide the intro section
  intro.hide();

  // Show Quiz Section
  quiz.show();

  // Hide the answer
  showAnswer.hide();

  // Start countdown timer
  startTimer();

  // Show timer
  timer.show();

  // Render Questions and Answers
  renderQuestion();
  renderAnswer();
  renderImg();
})

// When the user clicks the "submit" button
sumbit.on("click", function() {
  
  // Variables to hold the array of choices
  // let userChoice = $(".choice");
  // let userAnswer;
  
  // Loop through the array of choices
  for( let i = 0; i < userChoice.length; i++ ) {
     
      // Get the user's choice
      if(userChoice[i].checked) {
       checked = true;
       userAnswer = userChoice[i].value;
     }
  }
  
  // If no answer is selected
  if(!checked) {
    alert("Please select an answer");
    return;
  }
  
  // If the selection is correct
  if( userAnswer == questions[runningQuestion].correct){
      
      // Stop the timer
      stopTimer()

      // Hide the timer
      timer.hide();

      // Hide the question
      showQuestion.hide();

      // Show the answer
      showAnswer.show()

      // Show the "next button"
      next.show();

      // Let the user know they're correct
      answerHeader.html("Correct!")
      
      // Show the answer
      answer.show();

      // Show the answer Image
      qImg.show();

      // Increase the score
      score++;
  
  // If the answer is incorrect
  }else{

      // Stop the timer
      stopTimer()

      // Hide the timer
      timer.hide();

      // Hide the question
      showQuestion.hide();

      // Show the answer
      showAnswer.show();

      // Show the "next" button
      next.show();

      // Let the user know they're wrong
      answerHeader.html("Wrong! The correct answer is:")

      // Show the answer
      answer.show();

      // Show the answer Image
      qImg.show();
  }

  if (runningQuestion >= lastQuestion) {
      next.text("See Results")
  }
  
})

// When the user clicks the "next" button
next.on("click", function() {

  // If the current index is not the last index
  if(runningQuestion < lastQuestion){

      // Move to the next question in the array
      runningQuestion++;

      // Clear the answer choices
      for (let i = 0; i < userChoice.length; i++)
      {
       var radioButton = userChoice[i];
       radioButton.checked = false;
       checked = false
      }        

      // Render the next question
      renderQuestion();

      // Render the next answer
      renderAnswer();

      // Render the next image
      renderImg();

      // Hide the "next" button
      next.hide();

      // Show the next question
      showQuestion.show();

      // Hide the next answer
      showAnswer.hide();

      //Show and start the timer
      timer.show();
      startTimer();

  // If the current index is the last index
  }else{

      showAnswer.hide();
      showResults.show();
      scoreRender();
  }
})


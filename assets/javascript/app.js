let countdownTimer;
let clockRunning = false;
let seconds = 30;

//===============================================================
// Page Load
//===============================================================

function pageLoad() {
  $(".quiz").hide()
  clearInterval(countdownTimer);
  clockRunning = false;
}

pageLoad();

//===============================================================
// Start Quiz
//===============================================================

// Countdown timer function

function secondPassed() {
  let minutes = Math.round((seconds - 30)/60);
  let remainingSeconds = seconds % 60;
  if (remainingSeconds < 10) {
      remainingSeconds = "0" + remainingSeconds;  
  }
  $('.countdown').html(minutes + ":" + remainingSeconds);
  if (seconds == 0) {
      clearInterval(countdownTimer);
      $(".question").hide();
      $(".showAnswer").show();
      $('#answerHeader').html("Time's Up! The correct answer is:");
  } else {
      seconds--;
  }
}

// Start Game Function

$("#start").on("click", function() {
  $(".intro").hide();
  $(".showAnswer").hide();
  $(".quiz").show();
  if (!clockRunning) {
    countdownTimer = setInterval('secondPassed()', 1000);
    clockRunning = true;
    }
})

// User input

let checked = false;

$("#submit").on("click", function() {
  let radios = $("#choice");
  let userAnswer;
  
  for( let i = 0; i < radios.length; i++ ) {
     if(radios[i].checked) {
       checked = true;
       userAnswer = radios[i].value;
     }
  }
  
  // if the user clicks the submit button without selecting any option, alert the user.
  if(!checked) {
    alert("Please select an anwer");
    return;
  }
  // Correct answer
  if(userAnswer === "A") {
    $(".question").hide()
    $(".showAnswer").show()
    $("#answerHeader").html("Correct!")
    clearInterval(countdownTimer);
    clockRunning = false;
  }
  // incorrect answer
  else {
    $(".question").hide()
    $(".showAnswer").show()
    $("#answerHeader").html("Wrong! The correct answer is:")
    clearInterval(countdownTimer);
    clockRunning = false;
  }
  
})
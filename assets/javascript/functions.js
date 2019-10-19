//===============================================================
// Timer function
//===============================================================

//Start Clock
function startTimer() {
    clockRunning = true;

    // Reset clock
    clearInterval(countdownTimer);
    countdownTimer = setInterval(decrement, 1000);
    seconds = 15;
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

//===============================================================
// Render Score
//===============================================================

function scoreRender(){ 
    
    // 
    const scorePerCent = Math.round(100 * score/questions.length);
  
    // let img = (scorePerCent >= 80) ? "img/5.png" :
    // (scorePerCent >= 60) ? "img/4.png" :
    // (scorePerCent >= 40) ? "img/3.png" :
    // (scorePerCent >= 20) ? "img/2.png" :
    // "img/1.png";
  
    // scoreDiv.html("<img src="+ img +">");
    scoreDiv.text("You got " + score + "/10 correct!");
  }
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
    console.log(questions[runningQuestion]);
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
         userAnswer = userChoice[i].value
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
        console.log(questions[runningQuestion]);

    // If the current index is the last index
    }else{

        showAnswer.hide();
        showResults.show();
        scoreRender();
    }
})


$(document).ready(function () {

  // js ready
  console.log('ready!');





  const questions = [{
      question: "What pokemon did Ash Ketchum catch first?",
      options: ["Pidgey", "Caterpie", "Weedle", "Spearow"],
      answer: 2,
    },

    {
      question: "How do you evolve Graveler into Golem?",
      options: ["Rock Stone", "Boulder Stone", "Trade evolution", "Level while in a cave"],
      answer: 3,
    },

    {
      question: "Who is the 3rd Gym leader in Pokemon Red/Blue?",
      options: ["Misty", "Gary Oak", "Lt. Surge", "Brock"],
      answer: 3,
    },

    {
      question: "What pokemon is revived from the Dome Fossil?",
      options: ["Omanyte", "Aerodactyl", "Kangaskhan", "Kabuto"],
      answer: 4,
    },

    {
      question: "Ash Ketchum's hometown?",
      options: ["Pewter City", "Lavender Town", "Cerulean City", "Pallet Town"],
      answer: 4,
    },
  ];




  let count = 31; // Countdown max value                                                              //
  let running = false; // Control game state                                                          //
  let unanswered = 0; // number of questions unanswered                                               //
  let numberRight = 0; // number of questions answered correctly                                      //
  let numberWrong = 0; // number of questions answered incorrectly                                    //
  let userAnswer = 0; // grabs value of user click to compare correct answer value                    //
  let numberOfAnswers = questions.length; // Sets game limit per amount of questions                  //
  let questionNumber = 0; // This will allow us to run through order of questions by calling to array //
  let questionUsed = [];
  let counter;

  console.log(userAnswer);


  // *** RESET PAGE FUNCTION *** //

  function reset() {

    console.log('reset works');
    clearInterval(counter);
    count = 31;
    userAnswer = 0;

    $('#question').empty();
    $('.chosenAnswer').remove();
    $('.gifImage').remove();


    showQuestion();
    timer();

  }

  // *** To start a whole new game (UNUSED SO FAR) *** //

  function newGame() {

    // Clear the counter and reset all scores
    clearInterval(counter);
    count = 31;
    userAnswer = 0;
    numberRight = 0;
    numberWrong = 0;
    questionUsed = [];

    console.log(numberRight);
    console.log(numberWrong);
    console.log(questionUsed);

    // clear the DOM
    $('#question').empty();
    $('#answers').empty();
    $('.chosenAnswer').remove();
    $('#gifs').empty();

    // Run Showquestion & timer functions
    showQuestion();
    timer();
    hideReset();
  }




  // *** ALL TIMER CONTROLS *** //


  //timer in function 
  function timer() {
    count = 31;
    //sets timer to go down
    counter = setInterval(showTimer, 1000);
  }

  //show the countdown of the timer
  //if the seconds goes to zero, clear the timer and the page
  function showTimer() {
    count--;
    $('#timer').text(":" + count);


    if (count < 1) {
      console.log('out of time if statement worked!');
      clearInterval(counter);
      unanswered = unanswered++;
      showGif();
      // run some type of reset //


    }
  }










  // *** HIDE THE END GAME RESET BUTTON UNTIL IT'S NEEDED *** //

  function hideReset() {
    $('#resetGameBTN').hide();
  }

  $('#resetGameBTN').on('click', function(){
    newGame();
  });


  // *** Starts Game. Hides Button and runs showQuestion function *** //

  $('#startGameBTN').on('click', function () {


    $('#startGameBTN').hide();
    // .show(); is how to make it reappear

    showQuestion();
    timer();
  });


  // *** Shows questions and answers on screen *** //

  function showQuestion() {


    // clear fields here too //

    $('#question').empty();
    $('.chosenAnswer').remove();
    $('#gifs').empty();


    // THESE ARE FOR RANDOM //


    randomQuestion = Math.floor(Math.random() * questions.length);
    selectedSet = questions[randomQuestion];

    console.log(questionUsed);

    console.log(selectedSet);

    if (questionUsed.length === questions.length) {


      $('#answers').append("<p> Your number correct is: " + numberRight +"</p>");
      $('#answers').append("<p> Your number incorrect is: " + numberWrong +"</p>");
      $('#answers').append("<p> Your number unanswered is: " + unanswered +"</p>");
      console.log('show score screen when number of questions used');
      $('#resetGameBTN').show();



    } else if (questionUsed.includes(randomQuestion)) {
      console.log('rewrite random');
      console.log("rewrite random question number to one that hasn't been used");
      randomQuestion = Math.floor(Math.random() * questions.length);
      showQuestion();

    } else {
      console.log('else');
      questionUsed.push(randomQuestion);
      $('#question').text(selectedSet.question);



      for (let i = 0; i < selectedSet.options.length; i++) {
        let userPick = $('<div>');
        userPick.addClass('chosenAnswer');
        userPick.text(selectedSet.options[i]);
        userPick.attr("data-value", (i + 1));
        $('#answers').append(userPick);


      }

      $(".chosenAnswer").on('click', function () {
        console.log('answer click ran!');
        userAnswer = $(this).data('value');
        console.log(userAnswer);
        clearInterval(counter);
        checkAnswer();
      });

      function checkAnswer() {

        if (userAnswer === selectedSet.answer) {
          console.log('correct!');
          numberRight = numberRight + 1;
          console.log(numberRight);
          showGif();


        } else if (userAnswer != selectedSet.answer) {
          console.log('incorrect!');
          numberWrong = numberWrong + 1;
          console.log(numberWrong);
          showGif();

        } else {
          console.log('unanswered');
          unanswered = unanswered + 1;
          console.log(unanswered);
          showGif();
        }

      }

    }

  }

  // *** Here we show the gif in between *** //

  function showGif() {

    // set the count to only 3 seconds
    let gifCount = 3;

    // create the interval 
    function gifTimer() {
      gifCount = 3;


      //sets timer to go down
      gifCounter = setInterval(showGifTimer, 1000);
    }

    // show the timer to the screen and subtract
    function showGifTimer() {
      gifCount--;



      if (gifCount < 1) {
        console.log('out of time if statement worked!');
        clearInterval(gifCounter);
        reset();
        // run some type of reset //


      }
    }


    if (userAnswer === selectedSet.answer) {
      gifTimer();
      console.log('show correct Gif');
      $('#question').empty();
      $('.chosenAnswer').remove();
      $('#answers').append('<img class="gifImage" src="assets/images/correct.gif">');
      numberRight;
      console.log(numberRight);
      // scoreboard();


    } else if (userAnswer != selectedSet.answer && userAnswer != 0) {
      gifTimer();
      console.log('show incorrect Gif');
      $('#question').empty();
      $('.chosenAnswer').remove();
      $('#answers').append('<img class="gifImage" src="assets/images/incorrect.gif">');
      numberWrong;
      console.log(numberWrong);
      // scoreboard();


    } else {
      gifTimer();
      console.log('show unanswered Gif');
      $('#question').empty();
      $('.chosenAnswer').remove();
      $('#answers').append('<img class="gifImage" src="assets/images/unanswered.gif">');
      unanswered;
      console.log(unanswered);
      // scoreboard();
    }


    // function scoreboard() {
    //   if (unanswered + numberRight + numberWrong === (questions.length + 1)) {
    //     console.log('show score screen');
    //   }
    // }





  }








  hideReset();



});
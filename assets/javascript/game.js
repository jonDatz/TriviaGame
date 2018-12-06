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
      question: "What pokemon did Ash Ketchum catch first?",
      options: ["Pidgey", "Caterpie", "Weedle", "Spearow"],
      answer: 2,
    },
  ];


  console.log(questions[0]);

  let count = 30;
  let counter = setInterval(timer, 1000); // runs every 1 second(1000);
  let unanswered = 0;
  let numberRight = 0;
  let numberWrong = 0;
  let userAnswer = [];
  let numberOfAnswers = questions.length;


  console.log(count);
  console.log(counter);
  console.log(unanswered);
  console.log(numberRight);
  console.log(numberWrong);
  console.log(userAnswer);
  console.log(numberOfAnswers);


  // *** TIMER FUNCTION ** //

  function timer() {
    count = count - 1;

    if (count <= 0) {
      clearInterval(counter);

      // outOfTime();  Show correct answer for a few seconds, with .gif, move onto next question
      // nextQuestion();
    }


    $('#timer').text(":" + count);
  }


  function showQuestion() {
    randomQuestion = Math.floor(Math.random() * questions.length);
    selectedSet = questions[randomQuestion];
    console.log(selectedSet);

    $('#question').text(selectedSet.question);

    for (let i = 0; i < selectedSet.options.length; i++) {
      let userPick = $('<div>');
      userPick.addClass('chosenAnswer');
      userPick.text(selectedSet.options[i]);
      userPick.attr("valueOFGuess", i);
      $('#answers').append(userPick);


    }

  }
  showQuestion();
  // onlclick function
  // needs to recognize whether use has picked right or wrong answer
  // when correct, display happy .gif saying you got it right
  // THEN trigger timer restart AND next question to appear



  // But if user picks incorrect answer
  // show sad .gif then show correct answer for a few seconds
  // THEN trigger timer restart AND next question to appear







});
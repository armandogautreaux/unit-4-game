// -------------------------------------------------------------------------------------

//General Variables
var wins = 0;
var looses = 0;
var targetNumber = 35; //This number is automatic generated after winning or loosing.
var totalScore = 0;

// -------------------------------------------------------------------------------------

//Array Variables
var numberOptions = [];
var images = [
  'assets/images/element1.png',
  'assets/images/element2.png',
  'assets/images/element3.png',
  'assets/images/element4.png'
];
function generateNums() {
  for (var i = 0; i < 4; i++) {
    var num = Math.floor(Math.random() * 9) + 1;
    numberOptions.push(num);
  }
}
generateNums();
console.log(numberOptions);
// -------------------------------------------------------------------------------------

//Most used DOM Elements
var message = $('#message');
var numberToGuess = $('#number-to-guess');
var score = $('#score');

// -------------------------------------------------------------------------------------
//Through add() I include all the functions (and loop) to restart all the events after my conditionals are accomplished.
function add() {
  //This function grabs our last created .class and apply an on.click event.
  $('.crystal-image').on('click', function () {
    var crystalValue = $(this).attr('data-crystalvalue');
    crystalValue = parseInt(crystalValue);
    totalScore += crystalValue;
    score.text(totalScore);

    //Setting Conditional for winning
    if (totalScore === targetNumber) {
      wins++;
      $('#wins').text(wins);

      // Inform the user if the've guessed correctly
      message.text('You have won: ' + wins + ' point(s)');
      // Change target number and score
      targetNumber = Math.floor(Math.random() * 99) + 34;
      numberToGuess.text(targetNumber);
      totalScore = 0;
      score.text(totalScore);
      numberOptions = [];
      generateNums();
      console.log(numberOptions);
      generateImgs(numberOptions);
    }

    //Setting Conditional for loosing
    if (totalScore > targetNumber) {
      looses++;
      $('#looses').text(looses);

      // Inform the user if the've guessed correctly or incorrectly
      message.text('You have lost: ' + looses + ' point(s)');
      // Change target number and score
      targetNumber = Math.floor(Math.random() * 99) + 34;
      numberToGuess.text(targetNumber);
      totalScore = 0;
      score.text(totalScore);
      numberOptions = [];
      generateNums();
      console.log(numberOptions);
      generateImgs(numberOptions);
    }
  });
}

//For Loop to create <img> and assing numbers (through addClass and .attr)
function generateImgs(numberOptions) {
  $('#crystal-container').empty('');
  for (var i = 0; i < numberOptions.length; i++) {
    var imageCrystal = $('<img>');
    imageCrystal.addClass('crystal-image img-fluid w-25 h-25 px-4');
    imageCrystal.attr('data-crystalvalue', numberOptions[i]);
    imageCrystal.attr('src', images[i]);
    $('#crystal-container').append(imageCrystal);
  }
  add();
}
generateImgs(numberOptions);

// -------------------------------------------------------------------------------------

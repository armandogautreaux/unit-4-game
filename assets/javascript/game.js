// -------------------------------------------------------------------------------------

//General Variables
var wins = 0;
var looses = 0;
var targetNumber = 35; //This number is automatic generated after winning or loosing.
var totalScore = 0;

// -------------------------------------------------------------------------------------

//Array Variables
var numberOptions = [4, 8, 5, 7];
var images = [
  'assets/images/element1.png',
  'assets/images/element2.png',
  'assets/images/element3.png',
  'assets/images/element4.png'
];

// -------------------------------------------------------------------------------------

//Most used DOM Elements
var message = $('#message');
var numberToGuess = $('#number-to-guess');
var score = $('#score');

// -------------------------------------------------------------------------------------

//For Loop to create <img> and assing numbers (through addClass and .attr)
for (var i = 0; i < numberOptions.length; i++) {
  var imageCrystal = $('<img>');
  imageCrystal.addClass('crystal-image img-fluid w-25 h-25 px-4');
  imageCrystal.attr('data-crystalvalue', numberOptions[i]);
  imageCrystal.attr('src', images[i]);
  $('#crystal-container').append(imageCrystal);
}

// -------------------------------------------------------------------------------------

//This function grabs our last created .class and apply an on.click event.
$('.crystal-image').on('click', function() {
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
  }
});

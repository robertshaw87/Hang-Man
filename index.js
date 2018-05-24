var Game = require("./GameConstructor.js");
var inquirer = require("inquirer");
var wins = 0;
var losses = 0;
var hangmanGame;

newGame();

function newGame() {
    console.log("\n\n==============================================\n");
    console.log(" Welcome to Hangman!");
    console.log(" Can you guess the word before running out of guesses?");
    console.log("\n==============================================\n\n");
    resetGame();
}
function resetGame() {
    hangmanGame = new Game();
    hangmanGame.reset(playHangman);
}

function playHangman() {
    hangmanGame.displayStatus();
    inquirer.prompt({
        type: "input",
        message: "Please select a letter from A-Z.",
        name: "userLetter",
        validate: function(letter){
            var userLetter = letter.toUpperCase();
            var alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
            if (hangmanGame.alreadyGuessed(userLetter)){
                console.log("\n\nYou've already guessed " + userLetter + ". Please choose a new letter.");
                return false;
            } else if (alphabet.indexOf(userLetter) === -1) {
                console.log("\n\nThat's not a letter from A-Z!");
                return false;
            } else
                return true;
        }
    }).then(function(answer){
        hangmanGame.guess(answer.userLetter.toUpperCase())
        if (hangmanGame.completed()){
            wins++;
            gameAgain();
        } else if (!hangmanGame.anyGuessesLeft()){
            losses++;
            gameAgain();
        } else {
            playHangman();
        }
    })
}

function gameAgain() {
    console.log("\n==============================================\n");
    console.log(" Your Score: ");
    console.log(" " + wins + " wins and " + losses + " losses");
    console.log("\n==============================================\n");
    inquirer.prompt({
        type: "confirm",
        message: "Would you like to play again?",
        name: "playAgain",
        default: false
    }).then(function(answer){
        if (answer.playAgain){
            console.log("Welcome back! Best of luck this round!");
            resetGame();
        } else {
            console.log("\n\n==============================================\n");
            console.log(" Goodbye!");
            console.log(" Come back soon!");
            console.log("\n==============================================\n");     
        }
    })
}
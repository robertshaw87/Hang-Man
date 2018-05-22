var Word = require("./Word.js");
var inquirer = require("inquirer");
var guessesLeft;
var wins = 0;
var losses = 0;
var targetWord;

resetGame();
function resetGame() {
    selectWord();
}
function selectWord() {
    targetWord = new Word("Hello World");
    playHangman();
}

function displayStatus() {
    console.log("\n\n==============================================\n");
    console.log("Guesses Left: " + targetWord.guessesLeft);
    console.log(targetWord.displayWord());
    console.log("\n==============================================\n")
}

function playHangman() {
    displayStatus();
    inquirer.prompt({
        type: "input",
        message: "Please select a letter from A-Z.",
        name: "userLetter",
        validate: function(letter){
            var userLetter = letter.toUpperCase();
            var alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
            if (targetWord.alreadyGuessed(userLetter)){
                console.log("\n\n   You've already guessed " + userLetter + ". Please choose a new letter.")
                return false;
            } else if (alphabet.indexOf(userLetter) === -1) {
                console.log("\n\n   That's not a letter from A-Z!");
                return false;
            } else
                return true;
        }
    }).then(function(answer){
        if(!targetWord.guess(answer.userLetter.toUpperCase())){
            targetWord.guessesLeft--;
        }
        if (targetWord.completed()){
            console.log(targetWord.displayWord());
            console.log("Congratulations! You've succesfully guessed the word!")
            gameWin();
        } else if (targetWord.guessesLeft <= 0){
            console.log("You've run out of guesses!")
            gameLoss();
        } else {
            playHangman();
        }
    })
}

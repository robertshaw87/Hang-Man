var Game = require("./GameConstructor.js");
var inquirer = require("inquirer");
var fs = require("fs");
var hangmanGame;

newGame();

function newGame() {
    console.log("\n\n==============================================\n");
    console.log("  \\                                    ");
    console.log(" ()()      Welcome to Mystery Fruit!    ,");
    console.log("()()()     Can you reveal the fruit     \\`.__.");
    console.log(" ()()   before running out of guesses?   `._,'");
    console.log("  ()                                   ");
    console.log("\n==============================================\n\n");
    fs.readFile("dictionary.txt", "utf8", function(error, data){
        var dictionary = ["Hello World"];
        if (error) {
            console.log(error)
        } else {
            dictionary = data.split(/\r\n|\n/);
        }
        hangmanGame = new Game(dictionary);
        hangmanGame.reset();
        playHangman();
    })   
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
        hangmanGame.guess(answer.userLetter.toUpperCase());
        if (hangmanGame.completed()){
            hangmanGame.wins++;
            gameAgain();
        } else if (!hangmanGame.anyGuessesLeft()){
            hangmanGame.losses++;
            gameAgain();
        } else {
            playHangman();
        }
    });
}

function gameAgain() {
    console.log("\n==============================================\n");
    console.log("                Your Score: ");
    console.log("            " + hangmanGame.wins + " wins and " + hangmanGame.losses + " losses");
    console.log("\n==============================================\n");
    inquirer.prompt({
        type: "confirm",
        message: "Would you like to play again?",
        name: "playAgain",
        default: false
    }).then(function(answer){
        if (answer.playAgain){
            console.log("Welcome back! Best of luck this round!");
            hangmanGame.reset();
            playHangman();
        } else {
            console.log("\n\n==============================================\n");
            console.log("                  Goodbye!");
            console.log("               Come back soon!");
            console.log("\n==============================================\n");     
        }
    })
}
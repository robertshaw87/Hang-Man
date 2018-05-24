var Word = require("./WordConstructor.js");

function ConstructGame(dictionary) {
    this.dictionary = dictionary;
    this.wins = 0;
    this.losses = 0;
    this.reset = function () {
        var randomWord = this.dictionary[Math.floor(Math.random() * this.dictionary.length)];
        this.targetWord = new Word(randomWord);
        this.guessedLetters = [];
        this.guessesLeft = 5;
    }
    this.guess = function(guessLetter) {
        this.guessedLetters.push(guessLetter);
        this.guessedLetters.sort(function (a, b){
            var alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
            return (alphabet.indexOf(a) - alphabet.indexOf(b));
        });
        var guessCorrect = this.targetWord.guess(guessLetter);
        if (guessCorrect){
            console.log("\nYou guessed correctly!");
        } else {
            this.guessesLeft--;
            console.log("\n" + guessLetter + " is not part of the fruit.");
        }
        return guessCorrect;
    }
    this.alreadyGuessed = function (guessLetter){
        return (this.guessedLetters.indexOf(guessLetter) !== -1)
    }
    this.anyGuessesLeft = function () {
        var haveGuessesLeft = (this.guessesLeft > 0);
        if (!haveGuessesLeft){
            console.log("\n\n==============================================\n");
            console.log("        Oh no! You ran out of guesses!");
            console.log("               The fruit was:\n");
            console.log("     " + this.targetWord.displayCompleteWord());
            console.log("\n==============================================\n");
        }
        return haveGuessesLeft;
    }
    this.completed = function () {
        var complete = this.targetWord.completed();
        if (complete) {
            console.log("\n\n==============================================\n");
            console.log("               Congratulations!");
            console.log("       You correctly guessed the fruit:\n");
            console.log("     " + this.targetWord.displayCompleteWord());
            console.log("\n==============================================\n");
        }
        return complete;
    }
    this.displayStatus = function () {
        console.log("\n\n==============================================\n");
        console.log(" Guesses Left: " + this.guessesLeft);
        console.log(" Already guessed: " + this.guessedLetters.join(" ") + "\n");
        console.log("         " + this.targetWord);
        console.log("\n==============================================\n");
    }
}

module.exports = ConstructGame;
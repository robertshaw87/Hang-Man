var Word = require("./WordConstructor.js");

function ConstructGame() {
    this.reset = function (callback) {
        this.targetWord = new Word("hello World");
        this.guessedLetters = [];
        this.guessesLeft = 7;
        callback();
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
            console.log("\n" + guessLetter + " is not part of the word.");
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
            console.log(" Oh no! You ran out of guesses!");
            console.log(" The correct word was: ");
            console.log(" " + this.targetWord.displayCompleteWord());
            console.log("\n==============================================\n");
        }
        return haveGuessesLeft;
    }
    this.completed = function () {
        var complete = this.targetWord.completed();
        if (complete) {
            console.log("\n\n==============================================\n");
            console.log(" Congratulations! You correctly guessed the word:");
            console.log(" " + this.targetWord.displayWord());
            console.log("\n==============================================\n");
        }
        return complete;
    }
    this.displayStatus = function () {
        console.log("\n\n==============================================\n");
        console.log(" Guesses Left: " + this.guessesLeft);
        console.log(" Already guessed: " + this.guessedLetters.join(" ") + "\n");
        console.log(" " + this.targetWord.displayWord());
        console.log("\n==============================================\n");
    }
}

module.exports = ConstructGame;
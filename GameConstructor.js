var Word = require("./WordConstructor.js")

function ConstructGame(word) {
    this.guessedLetters = [];
    this.guessesLeft = 7;
    this.targetWord = new Word(word);
    this.guess = function(guessLetter) {
        this.guessedLetters.push(guessLetter);
        return this.targetWord.guess(guessLetter);
    }


    this.alreadyGuessed = function (guessedLetter){
        return (this.guessedLetters.indexOf(guessedLetter) !== -1)
    }
}

module.exports = ConstructGame
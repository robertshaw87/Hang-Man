var Letter = require("./LetterConstructor.js");

function ConstructWord (word) {
    var wordArray = word.toUpperCase().split("");
    var alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
    this.word = [];
    // defaults non-alphabet characters to already guessed
    for (var i = 0; i < wordArray.length; i++){
        var tempLetter = new Letter(wordArray[i]);
        if (alphabet.indexOf(wordArray[i]) === -1){
            tempLetter.guessed = true;
        }
        this.word.push(tempLetter);
    }
    this.toString = function displayWord() {
        var tempWord = [];
        for (var i = 0; i < this.word.length; i++){
            tempWord.push(this.word[i].toString());
        }
        return tempWord.join(" ");
    }
    this.guess = function (guessedLetter){
        var contained = false;
        for (var i = 0; i < this.word.length; i++){
            if (this.word[i].guess(guessedLetter))
                contained = true;
        }
        return contained;
    }
    this.completed = function () {
        var complete = true;
        for (var i = 0; i < this.word.length; i++){
            if (!this.word[i].guessed){
                complete = false;
            }
        }
        return complete;
    }
    // shows the completed word regardless of current progress
    this.displayCompleteWord = function () {
        var tempWord = [];
        for (var i = 0; i < this.word.length; i++){
            tempWord.push(this.word[i].letter);
        }
        return tempWord.join(" ");
    }
}

module.exports = ConstructWord;
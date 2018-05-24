var Letter = require("./LetterConstructor.js");

function ConstructWord (word) {
    var wordArray = word.toUpperCase().split("");
    this.word = [];
    for (var i = 0; i < wordArray.length; i++){
        var tempLetter = new Letter(wordArray[i]);
        if (wordArray[i] === " "){
            tempLetter.guessed = true;
        }
        this.word.push(tempLetter);
    }
    this.displayWord = function () {
        var tempWord = [];
        for (var i = 0; i < this.word.length; i++){
            tempWord.push(this.word[i].displayLetter());
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
}

module.exports = ConstructWord;
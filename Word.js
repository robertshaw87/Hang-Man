var Letter = require("./Letter.js");

var ConstructWord = function (word) {
    var wordArray = word.toUpperCase().split("");
    this.word = [];
    this.guessedLetters = [];
    this.guessesLeft = 7;
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
        this.guessedLetters.push(guessedLetter);
        for (var i = 0; i < this.word.length; i++){
            if (this.word[i].guess(guessedLetter))
                console.log("\nYou guessed correctly!")
                contained = true;
        }
        if (!contained) {
            console.log("\n" + guessedLetter + " is not part of the word.")
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
    this.alreadyGuessed = function (guessedLetter){
        return (this.guessedLetters.indexOf(guessedLetter) !== -1)
    }
}

module.exports = ConstructWord;
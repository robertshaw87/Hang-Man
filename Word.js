var letter = require("./Letter.js");

exports.ConstructWord = function (word) {
    var wordArray = word.split("");
    this.word = [];
    for (var i = 0; i < wordArray.length; i++){
        var tempLetter = new letter.ConstructLetter(wordArray[i]);
        if (wordArray[i] === " "){
            tempLetter.guessed = true;
        }
        this.word.push(tempLetter);
    }
    this.display = function () {
        var tempWord = [];
        for (var i = 0; i < this.word.length; i++){
            tempWord.push(this.word[i].display());
        }
        return tempWord.join();
    }
    this.guess = function (guessedLetter){
        
    }
}
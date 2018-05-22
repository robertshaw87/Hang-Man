var Word = require("./Word.js");
var inquirer = require("inquirer");

var targetWord;

selectWord();

function selectWord() {
    targetWord = new Word("Hello World");
    playHangman();
}

function playHangman() {
    console.log(targetWord.displayWord());
    inquirer.prompt({
        type: "input",
        message: "Please select a letter from a-z.",
        name: "userLetter",
        validate: function(letter){
            var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
            return (alphabet.indexOf(letter.toLowerCase()) !== -1);
        }
    }).then(function(answer){
        targetWord.guess(answer.userLetter);
        if (targetWord.completed()){
            console.log(targetWord.displayWord());
            console.log("Congratulations! You've succesfully guessed the word!")
        } else {
            playHangman();
        }
    })
}

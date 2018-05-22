var Word = require("./Word.js");

var targetWord = new Word("wombole lombe lllll omb");
console.log(targetWord.displayWord());
targetWord.guess("a")
console.log(targetWord.displayWord());
targetWord.guess("w")
console.log(targetWord.displayWord());
targetWord.guess("o")
console.log(targetWord.displayWord());
targetWord.guess("m")
console.log(targetWord.displayWord());
targetWord.guess("b")
console.log(targetWord.displayWord());
targetWord.guess("l")
console.log(targetWord.displayWord());
targetWord.guess("e")
console.log(targetWord.displayWord());

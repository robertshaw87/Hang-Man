function ConstructLetter (alpha) {
    this.guessed = false;
    this.letter = alpha.toUpperCase();
    this.guess = function (guessedLetter) {
        var correct = (this.letter === guessedLetter.toUpperCase());
        if (correct) {
            this.guessed = true;
        }
        return correct;
    }
    this.toString = function displayLetter() {
        return (this.guessed ? this.letter : "_")
    }
}

module.exports = ConstructLetter;
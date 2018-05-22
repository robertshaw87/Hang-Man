exports.ConstructLetter = function (alpha) {
    this.guessed = false;
    this.letter = alpha.toUpperCase();
    this.check = function (guess) {
        var correct = (this.letter === guess.toUpperCase());
        if (correct) {
            this.guessed = true;
        }
        return correct;
    }
    this.display = function () {
        return (this.guessed ? this.letter : "_")
    }
}
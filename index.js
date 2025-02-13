let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomnumber = Math.ceil(Math.random() * 100);
console.log(randomnumber);


function checkGuess() {
    let guessenumber = parseInt(userInput.value);
    if (guessenumber > randomnumber) {
        gameResult.textContent = "Too high number!"
        gameResult.style.backgroundColor = "red"
    } else if (guessenumber < randomnumber) {
        gameResult.textContent = "Too low number"
        gameResult.style.backgroundColor = "red"
    } else if (guessenumber === randomnumber) {
        gameResult.textContent = "Congratulations! you won."
        gameResult.style.backgroundColor = "green"
    }
}
//  guessing game

let gameNumber = 1000;

let userNumber = prompt("Guess a number: ");

while ( userNumber != gameNumber) {
    userNumber = prompt("You entered a wrong number, please guess a number again: ");
} 

console.log("Congratulations, you entered the right number!");
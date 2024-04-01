const max = prompt("enter the maximum number"); // 1 - 100 (max = 100)
const random = Math.floor(Math.random() * max ) + 1; // max + 1 (excludes 0)
let guess = prompt ("guess the number");

while(true) {
    if (guess == "quit") {
        console.log("you quit the game");
    }
    else if (guess == "random") {
        console.log("congratulations ! you are right ", random);
    }
    else if (guess < random) {
        guess = prompt("the number is less than random (guess). try again" )
    }
    else if (guess > random) {
        guess = prompt("the number is larger than the random(guess). try again");
    } 
    
}

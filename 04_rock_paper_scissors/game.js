// creating rock_paper_scissors
// we want a function called rock_paper_scissors that takes in what the user inputs and outputs either win or lose
// if the user is playing against the computer, then we need the computer to also make a choice but randomly. 
// how to randomly choose an index of an array for the computer choice? saw online that math.random choose random numbers between 
//0 and 1 (using floor to make it a whole number), so multiplying by the array length means it would randomly choose a number 
//within the length of the array
// then we need to write if statements for the different outcomes and returns win or loss 
// after the win or loss of the game is announced, we want to prompt the user to play again 

// extension: change the colour of the output 
// I searched online and found: Approach 1 = Using %C: a CSS styling method
// e.g., console.log("%c GeeksforGeeks", "color:green;"); so I will try this
// previous method did not work so will try another, Using ANSI
// did not have enough time to play around with output colour, just change the code back to before 


function rockPaperScissors(userChoice) {

    const Choice = ["rock", "paper", "scissors"];
    let computerChoice = Choice[Math.floor(Math.random() * Choice.length)];

    if (userChoice == computerChoice ) {
        console.log("draw, play again")
    }

    if (userChoice == "rock" && computerChoice == "scissors") {
        console.log("You won, play again!")
    } else if (userChoice == "paper" && computerChoice == "rock") {
        console.log("You won, play again!")
    } else if (userChoice == "scissors" && computerChoice == "paper") {
        console.log("You won, play again!")
    } else {
        console.log("You lost, try again!")
    }
}

console.log(rockPaperScissors("scissors"));
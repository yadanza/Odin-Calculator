
let choices = ["rock", "paper", "scissors"]

let userWins = 0
let computerWins = 0

function computerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}

function round(user, computer){
    if (user == computer){
        return 0;
    } else if( user == "rock" && computer == "paper"){
        return 1
    } else if( user == "paper" && computer == "scissors"){
        return 1
    } else if( user == "scissors" && computer == "rock"){
        return 1
    } 
    return 2;
}

function rockPaperScissors(){
    
    while(userWins < 4 && computerWins < 4){
        let userInput = prompt("Type in rock, paper, or scissors: ")
        let computerInput = computerChoice()
        if(userInput != choices[0] && userInput != choices[1] && userInput != choices[2]){
            userInput = choices[Math.floor(Math.random() * choices.length)]
            alert("Not a valid option. We'll assume you meant " + userInput)
        }


        let winner = round(userInput, computerInput)

        switch(winner){
            case 0: alert("Tie: You both picked " + computerInput)
            break;
            case 1: computerWins++ 
            alert("Computer chose: " + computerInput + "\nComputer won this round!\n Computer: " + computerWins + " You: " + userWins)
            
            break;
            case 2: userWins++ 
            alert("Congrats, you won this round!\n Computer: " + computerWins + " You: " + userWins)
            
            break;
        }
        console.log(userInput + computerInput)
    }
    if(userWins == 4){
        alert("YOU WIN")
    } else {
        alert("MACHINES WIN")
    }
}
rockPaperScissors()
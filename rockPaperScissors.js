

function getPlayerSelection () {
    let selection = prompt(`Choose Rock, Paper, or Scissors`).toLowerCase();
    return selection;
}

function getComputerSelection() {
    let choiceArray = ["rock","paper","scissors"];
    let choiceGenerator = (Math.trunc(Math.random() * 3));
    console.log(choiceArray[choiceGenerator]);
    return choiceArray[choiceGenerator];  

}

function evaluate(userChoice, computerChoice) {
    if(userChoice === "rock" && computerChoice === "paper") {
        return -1;
    }
    if(userChoice === "paper" && computerChoice === "rock") {
        return 1;
    }
 
    if(userChoice === "paper" && computerChoice === "scissors") {
        return -1;
    }
    if(userChoice === "scissors" && computerChoice === "paper") {
        return 1;
    }
    
    if(userChoice === "scissors" && computerChoice === "rock") {
        return -1;
    }
    if(userChoice === "rock" && computerChoice === "scissors") {
        return 1;
    } else {
        return;
    } 
}

function counter(eval) {   //counter(evaluate)  while(counter(evaluate) === false) {}
  
    if(eval === 1) {
       return 1;
    } else if(eval === -1) {
        return -1;
    } else {
        console.log(`The round was a draw`);
    }
    return;
}

function playRound() {
    return counter(evaluate(getPlayerSelection(), getComputerSelection()));

}

function game() {
    playerCount = 0;
    computerCount = 0;

    while(true) {   
        let innerCount = playRound();

        if(innerCount === 1) {
            playerCount++;
            if(playerCount === 5) {
                break;
            }
            console.log(`The human won this round: ${playerCount} wins`);
        } else if (innerCount === -1) {
            computerCount++;
            if(computerCount === 5) {
                break;
            }
            console.log(`The computer won this round: ${computerCount} wins`);
        }
    }
      
    let winner = playerCount > computerCount ? `The human`: `The computer`; 
    console.log(`The winner is: ${winner}`); 
    
}
game();




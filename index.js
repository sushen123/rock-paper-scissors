function getComputerChoice() {
   let randomNumber = Math.floor(Math.random() * 3);
   switch (randomNumber) {
      case 0: 
         return 'rock';
      case 1: 
         return 'paper';
      case 2:
         return 'scissors';
   }
}

function game(){
   let playerScore = 0;
   let computerScore = 0;

function playRound(playerSelection, computerSelection) {
   playerSelection = playerSelection.toLowerCase().trim();
   if (playerSelection === 'rock' && computerSelection === 'scissors') {
      return "You win";
   } else if (playerSelection === computerSelection) {
      return "Match is tie";
   } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
      return "You win";
   } else if (playerSelection === 'paper' && computerSelection === 'rock') {
      return "You win";
   } else {
      return "Computer wins";
   }
}

for(let i=0; i<5; i++){
   let playerSelection = prompt(`Enter your choice for round ${i +1} (rock,paper, or scissors)`);
   const computerSelection = getComputerChoice();
   console.log(`Round ${i + 1}:`);

   let result = playRound(playerSelection, computerSelection);

   if (result.includes("You win")){
      playerScore++;
   }
   else if (result.includes("Computer wins")){
      computerScore++;
   }

   console.log(result);
   console.log(`Player Score: ${playerScore} | Computer Score: ${computerScore}`)
}

if(playerScore > computerScore) 
{
   console.log("You win the game");
}
else if (playerScore < computerScore){
   console.log("Computer wins the game");
}
else {
   console.log("The game is a tie");
}
}

game();
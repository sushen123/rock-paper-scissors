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

// function game(){
//    let playerScore = 0;
//    let computerScore = 0;

function playRound() {
   let playerScore = 0;
   let computerScore = 0;
   const winningScore= 5;
   let btn1 = document.querySelector(".rock");
   let btn2 = document.querySelector(".paper");
   let btn3 = document.querySelector(".scissors");

   btn1.addEventListener("click", ()=> {
       playerSelection = 'rock';
      updateResult();
   });
   btn2.addEventListener("click", ()=> {
      playerSelection = 'paper';
      updateResult();
   });
   btn3.addEventListener("click", ()=> {
       playerSelection = 'scissors';
      updateResult();
   });

   function updateResult() {
   playerSelection = playerSelection.toLowerCase().trim();
   let computerSelection = getComputerChoice();
   if (playerSelection === 'rock' && computerSelection === 'scissors') {
     result = "You win";
     playerScore++;
   } else if (playerSelection === computerSelection) {
      result =  "Match is tie";
      
   } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
      result = "You win";
      playerScore++;
   } else if (playerSelection === 'paper' && computerSelection === 'rock') {
      result =  "You win";
      playerScore++;
   } else {
      result = "Computer wins";
      computerScore++;
   }
   let div = document.querySelector("div");
   div.innerText = `${result}\n Player Score: ${playerScore} | Computer Score: ${computerScore}`;
   if (playerScore ===winningScore || computerScore === winningScore){
      announceWinner();
   }
}
function announceWinner() {
   let winner = playerScore > computerScore ? "You" : "Computer ";
   let div = document.querySelector("div");
   if(playerScore === computerScore){
      div.innerText += "\n\nIt's a tie!";
   }
   else {
      div.innerText += `\n\n${winner} wins the game`;
   }

 
}
}

playRound();



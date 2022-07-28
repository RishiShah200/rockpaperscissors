var choices = ["Rock", "Paper", "Scissors"];
function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

function getPlayerChoice() {
  var playerChoice = prompt("Please enter your choice from 0-2 (Rock, Paper, Scissors)");
  if (playerChoice != null) {
    console.log(playerChoice);
    return choices[parseInt(playerChoice)];
  }
  return "Error";
}
function playRound(computerChoice, playerChoice) {
  var computerChoice = computerChoice.toLowerCase();
  var playerChoice = playerChoice.toLowerCase();

  if (computerChoice == playerChoice) {
    return "Tie";
  } else if (
    (playerChoice == "Rock" && computerChoice == "Scissors") ||
    (playerChoice == "Scissors" && computerChoice == "Paper") ||
    (playerChoice == "Paper" && computerChoice == "Rock")
  ) {
    return "Player Wins!";
  }
  else{
      return "Computer Wins!";
  }
}

function game(){
    for(let x = 0; x < 5; x++){
        var result = playRound(getComputerChoice(), getPlayerChoice());
        console.log(result);
    }
}

game();

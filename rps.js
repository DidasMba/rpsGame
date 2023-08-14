// Function to get the computer's choice
function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to play a single round
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (!['rock', 'paper', 'scissors'].includes(playerSelection)) {
    return "Invalid choice. Please choose Rock, Paper, or Scissors.";
  }

  if (playerSelection === computerSelection.toLowerCase()) {
    return "It's a tie!";
  } else if (
    (playerSelection === 'rock' && computerSelection === 'Scissors') ||
    (playerSelection === 'paper' && computerSelection === 'Rock') ||
    (playerSelection === 'scissors' && computerSelection === 'Paper')
  ) {
    return `You Win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}.`;
  }
}

// Function to play the game
function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let round = 1; round <= 5; round++) {
    const playerSelection = prompt("Enter your choice: Rock, Paper, or Scissors");
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);

    console.log(`Round ${round}: ${result}`);

    if (result.includes('Win')) {
      playerScore++;
    } else if (result.includes('Lose')) {
      computerScore++;
    }
  }

  if (playerScore > computerScore) {
    console.log("Congratulations! You win the game!");
  } else if (playerScore < computerScore) {
    console.log("Computer wins the game. Better luck next time!");
  } else {
    console.log("It's a tie game!");
  }
}

// Start the game
game();




  
    




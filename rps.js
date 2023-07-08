function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  console.log(getComputerChoice());

  //part two

  function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
  
    if (playerSelection === computerSelection) {
      return "It's a tie!";
    }
  
    if (
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
      return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
  
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
  
  const playerSelection = 'rock';
  const computerSelection = getComputerChoice();
  const result = playRound(playerSelection, computerSelection);
  console.log(result);

   // part 3

  function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let round = 1; round <= 5; round++) {
      const playerSelection = getPlayerChoice();
      const computerSelection = getComputerChoice();
      const result = playRound(playerSelection, computerSelection);
  
      console.log(`Round ${round}: ${result}`);
  
      if (result.startsWith("You Win!")) {
        playerScore++;
      } else if (result.startsWith("You Lose!")) {
        computerScore++;
      }
    }
  
    console.log(`Game over! Final Score - You: ${playerScore}, Computer: ${computerScore}`);
  
    if (playerScore > computerScore) {
      console.log("Congratulations! You win the game!");
    } else if (playerScore < computerScore) {
      console.log("Ho lala ! You lose the game!");
    } else {
      console.log("It's a tie game!");
    }
  }
  
  function getPlayerChoice() {
    let choice = prompt("Enter your choice (Rock, Paper, or Scissors):");
    choice = choice ? choice.trim().toLowerCase() : "";
  
    while (!isValidChoice(choice)) {
      choice = prompt("Invalid choice! Please enter Rock, Paper, or Scissors:").trim().toLowerCase();
    }
  
    return choice;
  }
  
  function isValidChoice(choice) {
    return choice === "rock" || choice === "paper" || choice === "scissors";
  }
  
  // Helper functions from previous implementations
  function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return "It's a tie!";
    }
  
    if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
  
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
  
  // Start the game
  game();
  
    




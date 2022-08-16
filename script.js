let computerScore = 0;
let playerScore = 0;
const endResults = document.querySelector('#end-results');

const getComputerChoice = () => {
  const number = Math.ceil(Math.random() * 3);
  let result = '';
  switch (number) {
    case 1:
      result = 'rock';
      break;
    case 2:
      result = 'paper';
      break;
    case 3:
      result = 'scissors';
      break;
    default:
      break;
  }
  return result;
};

const results = document.querySelector('#result-container');
results.style.cssText =
  'color: red; display: flex; justify-content: center; align-items: center';

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    results.textContent = 'Draw, No Winner!!';
  } else if (
    (computerSelection === 'rock' && playerSelection === 'paper') ||
    (computerSelection === 'paper' && playerSelection === 'scissors') ||
    (computerSelection === 'scissors' && playerSelection === 'rock')
  ) {
    results.textContent = `You Lose, ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}!!`;
    computerScore++;
    keepComputerScore();
  } else {
    results.textContent = `You Win, ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}!!`;
    playerScore++;
    keepPlayerScore();
  }
};

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    console.log({ computerSelection });
    console.log(button.id);
    playRound(button.id, computerSelection);
    if (playerScore === 5 || computerScore === 5) {
      declareWinner();
    }
  });
});

const keepComputerScore = () => {
  let computerScoreBox = document.querySelector('#computer-score');
  computerScoreBox.textContent = computerScore;
};
const keepPlayerScore = () => {
  let playerScoreBox = document.querySelector('#player-score');
  playerScoreBox.textContent = playerScore;
};

const declareWinner = () => {
  if (playerScore > computerScore) {
    endResults.textContent = 'You Win!!';
  } else endResults.tex = 'You Lost!';
  results.textContent = '';
  resetGame();
};

const resetGame = () => {
  playerScore = 0;
  computerScore = 0;
  endResults = '';
  results = '';
};

// console.log(game());

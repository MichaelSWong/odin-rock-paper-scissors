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

const playRound = (playerSelection, computerSelection) => {
  if (computerSelection === 'rock') {
    if (playerSelection.toLowerCase() === 'rock') {
      console.log('Draw, No Winner!!');
      return 0;
    } else if (playerSelection.toLowerCase() === 'paper') {
      console.log(
        `You Win, ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}!!`
      );
      return 1;
    } else {
      console.log(
        `You Lose, ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}!!`
      );
      return -1;
    }
  } else if (computerSelection === 'paper') {
    if (playerSelection.toLowerCase() === 'paper') {
      console.log('Draw, No Winner!!');
      return 0;
    } else if (playerSelection.toLowerCase() === 'scissors') {
      console.log(
        `You Win, ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}!!`
      );
      return 1;
    } else {
      console.log(
        `You Lose, ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}!!`
      );
      return -1;
    }
  } else {
    if (playerSelection.toLowerCase() === 'scissors') {
      console.log('Draw, No Winner!!');
      return 0;
    } else if (playerSelection.toLowerCase() === 'rock') {
      console.log(
        `You Win, ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}!!`
      );
      return 1;
    } else {
      console.log(
        `You Lose, ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}!!`
      );
      return -1;
    }
  }
};

const game = () => {
  let wins = 0;
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt('Please enter Rock, Paper or Scissors: ');
    const computerSelection = getComputerChoice();
    console.log({ wins });
    const test = playRound(playerSelection, computerSelection);
    console.log(typeof test);
    wins += test;
  }
  console.log(wins);
  if (wins === 0) {
    return 'Draw, no winners!';
  } else if (wins > 0) {
    return `You are the winner`;
  } else {
    return 'You are the loser';
  }
};

console.log(game());

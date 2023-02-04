const RPS = ['Rock', 'Paper', 'Scissors'];

const randomNumber = Math.floor(Math.random() * 3);
const playerChoice = RPS[randomNumber];
const computerChoice = RPS[Math.floor(Math.random() * 3)];

let result = '';

if (playerChoice === computerChoice) {
  result = 'Tie';
} else if (playerChoice === 'Rock' && computerChoice === 'Scissors') {
  result = 'You win';
} else if (playerChoice === 'Paper' && computerChoice === 'Rock') {
  result = 'You win';
} else if (playerChoice === 'Scissors' && computerChoice === 'Paper') {
  result = 'You win';
} else {
  result = 'Computer wins';
}

console.log("You chose " + playerChoice + " and the computer chose " + computerChoice + ". " + result);

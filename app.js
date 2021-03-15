/* 
Game Function:
- Player must guess a number between a min ad max
- Player gets a certain amount of guesses
- Notify the player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

//Game variables
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

//UI elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

//Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//Event listener for guess
//parseInt used, to allow comparation between numbers
//value in black => String, in green => Number

guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);

  //Validate
  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  //Check if won
  if(guess === winningNum) {
    //Disable input
    guessInput.disabled = true;
    //Change border color
    guessInput.style.borderColor = 'green';
    //Won message
    setMessage(`${winningNum} is correct!, YOU WIN!!!`, 'green');
  } else {

  }
});

//Set message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
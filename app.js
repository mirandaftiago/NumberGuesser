/* 
Game Function:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify the player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

//Game variables
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
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

//PlayAgain Event listener
game.addEventListener('mousedown', function(e) {
  if(e.target.className === 'play-again') {
    window.location.reload();
  }
})

//Event listener for guess
//parseInt used, to allow comparation between numbers
//value in black => String, in green => Number

guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);

  //Validate
  if(isNaN(guess) || guess < min || guess > max){
    return setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  //Check if won
  if(guess === winningNum) {

    //Game over, won  
    gameOver(true, `${winningNum} is correct, YOU WIN!!!`);

  } else {

    //Wrong number, decrement guesses
    guessesLeft -= 1;
    
    //Check if are guesses left
    if(guessesLeft === 0) {

      //Game over, lost
      gameOver(false, `Game over, you lost. The correct number was ${winningNum}`);

    } else {

      //Change border color
      guessInput.style.borderColor = 'red';

      //Clear input field
      guessInput.value = '';

      //Game continues, wrong answer
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left.`, 'red');
      
      if(guessesLeft === 1) {
        setMessage(`${guess} is not correct, ${guessesLeft} guess left`, 'red');
      }
    }
  }
});

//Set message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}

//GameOver function
function gameOver(won, msg) {
  let color;
  won === true ? color = 'green' : color = 'red';

  //Game over, won && disable input
  guessInput.disabled = true;

  //Change border color
  guessInput.style.borderColor = color;

  //Set text color
  message.style.color = color;

  //Won message
  setMessage(msg);

  //Play again?
  guessBtn.value = 'Play Again?'
  guessBtn.className = 'play-again';
}

//Get Winning Number
function getRandomNum(min , max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let randomNumber = parseInt(Math.random() *100 + 1);

const submit = document.querySelector("#submit");
let userInput =  document.querySelector("#number");
const prevGuess = document.querySelector(".previous");
const remaining = document.querySelector(".remaining");

const lowOrhi = document.querySelector(".hi");
const result = document.querySelector(".result");

const p = document.createElement("p");

let prevgues = [] ;
let numgues = 1;

let playGame = true;

if(playGame) {
    submit.addEventListener('click', (e) => {
        e.preventDefault()
       let guess = parseInt(userInput.value)
       console.log(guess)
       validateGuess(guess)
    })
}

const validateGuess = (guess) => {

    if(isNaN(guess)) {
        console.log(guess)
        alert(" Please Enter a Valid Number");
    } else if(  guess > 100) {
alert("please enter a value less than 100");
    } else if( guess < 1){
alert("Please enter a value greater than one ")
    } else {
        prevgues.push(guess) 
        if(numgues === 11 ){
            displayguess(guess) 
            displayMessage( ` Game Over . Random Number Was ${randomNumber}`) 
            endGame()
        } else {
 displayguess(guess) 
 checkGuess(guess)
        }
    }

}

const checkGuess = (guess) => {
if(guess === randomNumber) {
    displayMessage(`you have guessed the right number ${randomNumber}`)
    endGame()
} else if(guess < randomNumber) {
  displayMessage(` your number is Tooo Low`)
} else if (guess > randomNumber) {
    displayMessage(` your number is too High`)
}
}

const displayguess = (guess) => {
userInput.value = null;
prevGuess.innerHTML += `${guess} `;
numgues++;
remaining.innerHTML = ` ${12 - numgues}`

}

const displayMessage = (guess) => {
lowOrhi.innerHTML = `<h3> ${guess} </h3>`
}



const endGame = () => {
    userInput.value = null;
    userInput.setAttribute('disabled','');
    p.classList.add("button");
    p.innerHTML = `<h2> Start a new Game </h2>`;
    result.appendChild(p);
    playGame = false ;
    startGame();
}

const startGame = () => {

    const newGamebtn = document.querySelector(".button")
    newGamebtn.addEventListener('click',(e) => {
        randomNumber = parseInt(Math.random() *100 + 1);
        prevgues = [];
        numgues = 1;
        remaining.innerHTML = ` ${12 - numgues}`;
        prevGuess.innerHTML = '';
        userInput.removeAttribute('disabled','')
        result.removeChild(p);
        playGame = true;

    })
}
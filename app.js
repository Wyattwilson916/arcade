// Select how many players
// 1 or two?

// function numberOfPlayers(){
//     const players =     
    
// }
const gameStatus = document.createElement('p')
const board = document.querySelector('.board')
const button1 = document.getElementById('one-player')
const button2 = document.getElementById('two-player')
const cellPlay = document.getElementsByClassName('cell')
const resetButton = document.getElementById('reset')

let gameState = {
    gameStatus: 'Player Select',
    //set players to none
    //clear board
}

board.addEventListener('click', function () {
    console.log('Cell has been clicked')
})

gameStatus.classList.add('status')
board.appendChild(gameStatus)
gameStatus.innerText = gameState.gameStatus

function playerSelect(event){

}

button1.addEventListener('click', function () { 
    console.log('button 1 clicked')
})

button2.addEventListener('click', function (){
    console.log('button 2 clicked')
})

function resetGame(){
    gameState = {
        gameStatus: 'Player Select'
    }
}
resetButton.addEventListener('click', function() {
    console.log('Reset Button Pressed')
    resetGame()
})

// Get names or name
// Display Choose number
// Have user(s) input name(s)

// Start game
// Display names or name and computer
//* Display game board
// Randomly decide which player starts
// Assign starting player "X"

// No overlap, take turns
// Make computer play in open spots (bonus if its good)
// Display winner or draw
// Restart? 
// Make board size adjustable
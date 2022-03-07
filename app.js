// const board = document.querySelector('#board')
const gameState = {
    players: ['x', 'o'],
    count: 0,
    board: [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]
  }
currentPlayer = gameState.players[0]



// state
let initialState;

function buildInitialState() {

}

// render
function renderState() {

}

// maybe a dozen or so helper functions for tiny pieces of the interface

// listeners

  // update state, maybe with another dozen or so helper functions...

  renderState() // show the user the new state

const board = document.querySelector('#board');
board.addEventListener('click', function(event){
    let id = event.target.id 
    console.log(id)
    if(gameState.count % 2 === 0 && event.target.innerHTML !== 'o'){
        document.getElementById(id).innerHTML = gameState.players[0]
        gameState.count++ 
    
    } else if(gameState.count % 2 === 1 && event.target.innerHTML !== 'x') {
        document.getElementById(id).innerHTML = gameState.players[1]
        gameState.count++
    }
    const X = 1
    const O = 2
    let pos0 = 0
    let pos1 = 0
    let pos2 = 0
    let pos3 = 0
    let pos4 = 0
    if(id === '0' && document.getElementById(id).innerHTML === 'x'){
        let pos0 = X
        console.log(pos0)
    } 
    if(id === '1' && document.getElementById(id).innerHTML === 'x'){
        let pos1 = X
        console.log(pos1)
    } 
    if(id === '2' && document.getElementById(id).innerHTML === 'x'){
        let pos2 = X
        console.log(pos2)
    } 
    if(id === '3' && document.getElementById(id).innerHTML === 'x'){
        let pos3 = X
        console.log(pos3)
    } 
    if(id === '4' && document.getElementById(id).innerHTML === 'x'){
        let pos4 = X
        console.log(pos4)
    } 
    if(id === '5' && document.getElementById(id).innerHTML === 'x'){
        let pos5 = X
        console.log(pos5)
    }
    if(pos0 === 1 && pos1 === 1 && pos2 === 1){
        console.log('X is the winner')
    } else if(pos3 === 1 && pos4 === 1 && pos5 === 1){
        console.log('X is the winner!')
    }
    
}); // etc

//Find winner

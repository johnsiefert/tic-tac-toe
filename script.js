// player factory function
const createPlayer = (name, marker) => {
    return {name, marker};
}

const game = () => {
let playerOne = createPlayer("Player One" , "X");
let playerTwo = createPlayer("Player Two" , "O");

let activePlayer = playerOne;
let winnerDeclared = false;
let turns = 9;

    let gameboard = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];

}
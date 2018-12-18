// We select the game table
let gameTable = document.getElementById("ticTacToe").children[0];

// We put the columns in row arrays for better organisation
let row1 = [
    gameTable.children[0].children[0],
    gameTable.children[0].children[1],
    gameTable.children[0].children[2]
]
let row2 = [
    gameTable.children[1].children[0],
    gameTable.children[1].children[1],
    gameTable.children[1].children[2]
]
let row3 = [
    gameTable.children[2].children[0],
    gameTable.children[2].children[1],
    gameTable.children[2].children[2]
]

// We create an object game, where we store everything we need for the game
let game = {
    turn: "X", // A property that keeps track of whos turn it is
    next: function(){ // A method that changes the turn from X to O
        if(this.turn === "X"){
            this.turn = "O";
        } else if(this.turn === "O") {
            this.turn = "X";
        }
    },
    isCellFree: function(cell){ // A method that checks a provided cell if it is emptys
        if(cell.innerText === ""){
            return true;
        } else {
            return false;
        }
    },
    reset: function(table){ // A method that resets a provided table and resets the game
        let cells = table.getElementsByTagName("td");
        this.turn = "X";
        for (const cell of cells) {
            cell.innerText = "";
        }
    }
}

// Event listeners and logic inside of them
for (const col of row1) {
    col.addEventListener("click", function(){ // We put event listener on all columns in the row
        if(game.isCellFree(this)){ // First we check if the current cell is free
            this.innerText = game.turn; // Then we add X or O depending on whose turn it is
            game.next(); // And then we change the turn to the next player
        }
    });
}
for (const col of row2) {
    col.addEventListener("click", function(){
        if(game.isCellFree(this)){
            this.innerText = game.turn;
            game.next();
        }
    });
}
for (const col of row3) {
    col.addEventListener("click", function(){
        if(game.isCellFree(this)){
            this.innerText = game.turn;
            game.next();
        }
    });
}

// Here we add a listener for the reset button and reset the game
document.getElementById("reset").addEventListener("click", function(){
    game.reset(gameTable);
});
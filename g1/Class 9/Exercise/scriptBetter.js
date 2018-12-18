let gameTable = document.getElementById("ticTacToe").children[0];

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

let message = document.getElementById("message");

let game = {
    turn: "X",
    isGameWon: false, // tracker if the game is won. If this is true then you can't play any more
    next: function(){
        if(this.turn === "X"){
            this.turn = "O";
        } else if(this.turn === "O") {
            this.turn = "X";
        }
    },
    isCellFree: function(cell){
        if(cell.innerText === ""){
            return true;
        } else {
            return false;
        }
    },
    isWin: function(){ // Method that checks all combinations
        // Horizontal wins
        if(this.areCellsWinning(row1[0],row1[1],row1[2])){
            return true;
        } else if(this.areCellsWinning(row2[0],row2[1],row2[2])){
            return true;
        } else if(this.areCellsWinning(row3[0],row3[1],row3[2])){
            return true;
        } // Vertical wins 
        else if(this.areCellsWinning(row1[0],row2[0],row3[0])){
            return true;
        } else if(this.areCellsWinning(row1[1],row2[1],row3[1])){
            return true;
        } else if(this.areCellsWinning(row1[2],row2[2],row3[2])){
            return true;
        } // Diagonal wins 
        else if(this.areCellsWinning(row1[0],row2[1],row3[2])){
            return true;
        } else if(this.areCellsWinning(row1[2],row2[1],row3[0])){
            return true;
        } // Not a win 
        else {
            return false;
        }
    }, // A method that checks 3 cells if they are winning
    areCellsWinning: function(cell1,cell2,cell3){
        if(cell1.innerText === "X" && cell2.innerText === "X" & cell3.innerText === "X"){
            return true;
        }
        if(cell1.innerText === "O" && cell2.innerText === "O" & cell3.innerText === "O"){
            return true;
        }
        return false;
    },
    reset: function(table){
        let cells = table.getElementsByTagName("td");
        this.turn = "X";
        this.isGameWon = false; // The isGameWon is reset to false so you can play again
        message.innerText = ""; // The message is cleared
        for (const cell of cells) {
            cell.innerText = "";
        }
    }
}

for (const col of row1) {
    col.addEventListener("click", function(){
        if(game.isCellFree(this)){
            this.innerText = game.turn;
            if(game.isWin() && !game.isGameWon){ // if game is won and the isGameWon property is false ( checking if the game is won for the first time )
                message.innerText = `${game.turn} is a winner!`; // We display a message who is winner
                game.turn = ""; // We change the turn to an empty string.
                // This way the next() method does not work any more so the players can't play after someone has won
                game.isGameWon = true; // We change the status of isGame won to true.
            }
            game.next();
        }
    });
}
for (const col of row2) {
    col.addEventListener("click", function(){
        if(game.isCellFree(this)){
            this.innerText = game.turn;
            if(game.isWin() && !game.isGameWon){
                message.innerText = `${game.turn} is a winner!`;
                game.turn = "";
                game.isGameWon = true;
            }
            game.next();
        }
    });
}
for (const col of row3) {
    col.addEventListener("click", function(){
        if(game.isCellFree(this)){
            this.innerText = game.turn;
            if(game.isWin() && !game.isGameWon){
                message.innerText = `${game.turn} is a winner!`;
                game.turn = "";
                game.isGameWon = true;
            }
            game.next();
        }
    });
}

document.getElementById("reset").addEventListener("click", function(){
    game.reset(gameTable);
});

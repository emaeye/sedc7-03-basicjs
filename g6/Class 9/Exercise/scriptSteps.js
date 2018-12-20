
// Part 2 : Select all the cells ( fields )
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












// Part 3 : Make a game object and methods for the game
let game = {
    turn: "X",
    next: function(){
        //TODO
    },
    isCellFree: function(cell){
        //TODO
    },
    reset: function(table){
        //TODO
    }
}












// Part 3 : Make a game object and methods for the game
let game = {
    // Part 3.1 : Where and how to keep track of whos turn it is
    turn: "X",
    next: function(){
        if(this.turn === "X"){
            this.turn = "O";
        } else {
            this.turn = "X";
        }
    },
















    // Part 3.2 : How to check if a cell is free
    isCellFree: function(cell){
        if(cell.innerText === ""){
            return true;
        } else {
            return false;
        }
    },

















    // Part 3.3 : How to reset the table to play again
    reset: function(table){
        let cells = table.getElementsByTagName("td");
        for (const cell of cells) {
            cell.innerText = "";
        }
    }
}

















// Part 4 : Add event listeners to all cells ( fields ) and the reset button
for (const col of row1) {
    col.addEventListener("click", function(){
        if(game.isCellFree(this)){
            this.innerText = game.turn;
            game.next();
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

document.getElementById("reset").addEventListener("click", function(){
    game.reset(gameTable);
})
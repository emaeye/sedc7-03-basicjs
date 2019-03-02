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

let game = {
    turn: "X",
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
    reset: function(table){
        let cells = table.getElementsByTagName("td");
        this.turn = "X";
        for (const cell of cells) {
            cell.innerText = "";
        }
    }
}

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
});
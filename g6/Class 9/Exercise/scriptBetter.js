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


console.log(gameTable);
console.log(row1);
console.log(row2);
console.log(row3);




let message = document.getElementById("message");
let fireCrackers = document.getElementsByClassName("fire-cracker");


let game = {
    turn: "X",
    isGameWon: false,
    next: function () {
        if (this.turn === "X") {
            this.turn = "O";
            message.innerText = `It's player's ${this.turn} turn!`;
        } else if (this.turn === "O") {
            this.turn = "X";
            message.innerText = `It's player's ${this.turn} turn!`;
        }
    },
    isCellFree: function (cell) {
        if (cell.innerText === "") {
            return true;
        } else {
            return false;
        }
    },
    isWin: function () {
        if (this.areCellsWinning(row1[0], row1[1], row1[2])) {
            return true;
        } else if (this.areCellsWinning(row2[0], row2[1], row2[2])) {
            return true;
        } else if (this.areCellsWinning(row3[0], row3[1], row3[2])) {
            return true;
        } else if (this.areCellsWinning(row1[0], row2[0], row3[0])) {
            return true;
        } else if (this.areCellsWinning(row1[1], row2[1], row3[1])) {
            return true;
        } else if (this.areCellsWinning(row1[2], row2[2], row3[2])) {
            return true;
        } else if (this.areCellsWinning(row1[0], row2[1], row3[2])) {
            return true;
        } else if (this.areCellsWinning(row1[2], row2[1], row3[0])) {
            return true;
        } else {
            return false;
        }
    },
    areCellsWinning: function (cell1, cell2, cell3) {
        if (cell1.innerText === "X" && cell2.innerText === "X" & cell3.innerText === "X") {
            return true;
        }
        if (cell1.innerText === "O" && cell2.innerText === "O" & cell3.innerText === "O") {
            return true;
        }
        return false;
    },
    reset: function (table) {
        let cells = table.getElementsByTagName("td");
        this.turn = "X";
        this.isGameWon = false;
        message.innerText = "";
        for (const cell of cells) {
            cell.innerText = "";
        }
    },
    // Optional Method for adding firecracker gif when someones win
    fireCrackerAdd: function () {
        for (const fireCracker of fireCrackers) {
            fireCracker.src = "fire-cracker.gif";
        }
    },
    // Optional Method for removing firecracker gif when someones win on reset button click
    fireCrackerRemove: function(){
        for (const fireCracker of fireCrackers) {
            fireCracker.src = "";
        }
    }
}

for (const col of row1) {
    col.addEventListener("click", function () {
        if (game.isCellFree(this)) {
            this.innerText = game.turn;
            if (game.isWin() && !game.isGameWon) {
                message.innerText = `${game.turn} is a winner!`;
                game.fireCrackerAdd();
                game.turn = "";
                game.isGameWon = true;
            }
            game.next();
        }
    });
}
for (const col of row2) {
    col.addEventListener("click", function () {
        if (game.isCellFree(this)) {
            this.innerText = game.turn;
            if (game.isWin() && !game.isGameWon) {
                message.innerText = `${game.turn} is a winner!`;
                game.fireCrackerAdd();
                game.turn = "";
                game.isGameWon = true;
            }
            game.next();
        }
    });
}
for (const col of row3) {
    col.addEventListener("click", function () {
        if (game.isCellFree(this)) {
            this.innerText = game.turn;
            if (game.isWin() && !game.isGameWon) {
                message.innerText = `${game.turn} is a winner!`;
                game.fireCrackerAdd();
                game.turn = "";
                game.isGameWon = true;
            }
            game.next();
        }
    });
}

document.getElementById("reset").addEventListener("click", function () {
    game.reset(gameTable);
    game.fireCrackerRemove();
});
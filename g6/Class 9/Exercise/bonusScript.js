// Bonus
function isWin(){
    if(areCellsWinning(row1[0],row1[1],row1[2])){
        return true;
    } else if(areCellsWinning(row2[0],row2[1],row2[2])){
        return true;
    } else if(areCellsWinning(row3[0],row3[1],row3[2])){
        return true;
    } else if(areCellsWinning(row1[0],row2[0],row3[0])){
        return true;
    } else if(areCellsWinning(row1[1],row2[1],row3[1])){
        return true;
    } else if(areCellsWinning(row1[2],row2[2],row3[2])){
        return true;
    } else if(areCellsWinning(row1[0],row2[1],row3[2])){
        return true;
    } else if(areCellsWinning(row1[2],row2[1],row3[0])){
        return true;
    } else {
        return false;
    }
} 

let message = document.getElementById("message");


if(isWin() && !game.isWon){
    message.innerText = `${game.turn} is a winner!`;
    game.turn = "";
    game.isWon = true;
}

function areCellsWinning(cell1,cell2,cell3){
    if(cell1.innerText === "X" && cell2.innerText === "X" & cell3.innerText === "X"){
        return true;
    }
    if(cell1.innerText === "O" && cell2.innerText === "O" & cell3.innerText === "O"){
        return true;
    }
    return false;
}
function createBoard(){
    const figures  = ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"];
    const pns  = ["♟"];

    let board = document.getElementById("board");

    for(let i = 0; i < 8 ; i++){
        let row = board.insertRow(i);

        for(let j = 0; j < 8; j++){
            let cell = row.insertCell(j);
            if( (i+j) % 2 == 0 ) {
                cell.classList.add("black-cell");
            } else {
                cell.classList.add("white-cell");
            }

            if(i == 0 || i == 7) cell.innerHTML = pns;
            if(i == 1 || i == 6) cell.innerHTML = figures[j];
        }
    }
}

createBoard();
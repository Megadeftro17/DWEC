const figuras  = ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"];
const peones  = ["♟"];

let tablero = document.getElementById('tablero');

for(let i = 0; i < 8; i++){

    let fila = tablero.insertRow(i);

    for(let j = 0; j < 8; j++){
        let celda = fila.insertCell(j);

        if((i+j) % 2 == 0){
            //celda.style.backgroundColor = "#FFFFFF";
            celda.classList.add("casilla-clara");
        } else {
            //celda.style.backgroundColor = "#000000";
            celda.classList.add('casilla-oscura');
        }

        if(i == 1 || i == 6){
            celda.innerHTML = peones;
        }
        if(i == 0 || i == 7){
            celda.innerHTML = figuras[j];
        }
    }
}
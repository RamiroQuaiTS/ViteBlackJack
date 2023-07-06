export const crearCarta = (carta, turno, divCartasJugadores) => {
    const imgCarta = document.createElement('img');
    imgCarta.className = "carta";
    imgCarta.src = `assets/cartas/${carta}.png`;

    if(puntosJugadoresDom[turno].innerText === '0'){
        divCartasJugadores[turno].innerHTML = '';
    }

    divCartasJugadores[turno].append(imgCarta);
}
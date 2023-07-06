import { pedirCarta } from './pedir-carta'

let numeroCartasIA = 0; 

export const turnoIA = (puntoMinimos, deck = []) => {
    numeroCartasIA++;
    divCartasJugadores[divCartasJugadores.length-1].innerHTML = '';
    do{ 
        const carta = pedirCarta(deck);
        acumuladoPuntos(carta, puntosJuadores.length - 1)
        
        crearCarta(carta, puntosJuadores.length - 1)

        if(numeroCartasIA === 5){
            mensajeVictoria('IA');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
        }
    }while((puntosJuadores[divCartasJugadores.length-1] <= puntoMinimos) && (puntoMinimos  <= 21));

    setTimeout(() => {
        const ganador = puntosJuadores[divCartasJugadores.length-1]=== puntoMinimos ? "" :
        puntoMinimos > 21 ? "IA" :
        puntosJuadores[divCartasJugadores.length-1] > 21 ? "Jugador" :
        puntosJuadores[divCartasJugadores.length-1] <= 21 && puntoMinimos >21 ? "IA" : 
        puntoMinimos <= 21 && puntosJuadores[divCartasJugadores.length-1] <= 21 ? 
        puntosJuadores[divCartasJugadores.length-1] > puntoMinimos ? "IA" : "Jugador" 
        :"";

        mensajeVictoria(ganador); 
    }, 50);   

}
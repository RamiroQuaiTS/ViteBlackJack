import {valorCarta} from './valor-carta'

/**
 * 
 * @param {*} carta 
 * @param {*} turno 
 * @returns 
 */
export const acumuladoPuntos =(carta, turno) => {
    puntosJuadores[turno] = puntosJuadores[turno] + valorCarta(carta, turno)*1;
    puntosJugadoresDom[turno].innerText = puntosJuadores[turno];
    return puntosJuadores[turno]
}
/**
 * Toma la carta y obetiene el valor de la carta
 * @param { String} carta Carta que se le quiere sacar el valor.
 * @param { Number } turno Turno actual. 
 * @returns {Number} Regresa el valor de la carta actual.
 */
export const valorCarta = (carta, turno = 0) =>{
    const valor = carta.substring(0, carta.length-1);
    return valor === "A" ? 
                turno == 0 ? 
                    prompt("El valor de la carta es A. ¿Deseas que su valor sea 1 u 11?", "1") : 
                    11 :
                (!isNaN(valor)) ? valor*1 : 10;
}
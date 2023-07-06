
/**
 * Se pide una carta y regresa la primera carta que encuentra y la borra del mismo Deck
 * @param {Array<String>} deck el deck actual de las cartas.
 * @returns {String} Regresa una sola carta y la elimina del Deck
 */
export const pedirCarta = (deck) => {
    return deck.length === 0 ? "Ya no hay cartas" : deck.pop()
}
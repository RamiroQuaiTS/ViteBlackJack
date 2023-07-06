import _ from 'underscore'

/**
 * Esta función es para crear un nuevo Deck de cartas en la apliación.
 * @param {Array<String>} tiposCarta Son los tipos de cartas como corazon picas trebol y dimantea
 * @param {Array<String>} tiposEspeciales Son los tipos de artas espciales como As, Reina, Joto y Rey
 * @returns {Array<String>} Retorna el nuevo Deck ya lleno y aleatorio.
 */
export const crearDeck = (tiposCarta, tiposEspeciales) => {

    let error = "";

    if(!tiposCarta || tiposCarta.length === 0) 
        throw Error("Tipos de carta es obligatorio y debe de ser un arreglo de strings");
    if(!tiposEspeciales || tiposEspeciales.length === 0) 
        throw Error("Tipos especiales es obligatorio y debe de ser un arreglo de strings");

    let deck = [];
    for(let i = 2; i<=10; i++){
        for(let tipo of tiposCarta){
            deck.push(`${i}${tipo}`)
        }
    }

    for(let tipo of tiposCarta){
        for(let especial of tiposEspeciales){
            deck.push(`${especial}${tipo}`)
        }
    }
    deck = _.shuffle(deck);

    return deck;
}


/**
 * Esta función me permite tomar una carta
 * @param {array<string>} deck 
 * @returns {string}
 */


export const pedirCarta = (deck) => {

    if (!deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop(); //Elimina la ultima carta del deck[]
    return carta;
}

// pedirCarta();
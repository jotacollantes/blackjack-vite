import _ from 'underscore'
export const miNombre='Juan Jose'

/**
 * Esta funcion crea un nuevo deck de cartas
 * @param {array<string>} tiposDeCarta ['C','D','H','S']
 * @param {array<string>} tiposEspeciales ['A','J','Q','K']
 * @returns {array<string>}
 * Retorna un nuevo deck de carta
 */
export const crearDeck = (tiposDeCarta,tiposEspeciales) => {

    if (!tiposDeCarta) throw  new Error('Tipo de carta es necesario')
   if (!tiposDeCarta.length > 0) throw  new Error(' Tipos de carta tiene que ser un arreglo')
    if (!tiposEspeciales) throw new Error('Tipos especiales es obligatorio')
    if (!tiposEspeciales.length > 0) throw new Error('Tipos especiales tiene que ser un arreglo')   


    let deck         = [];
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }
   // console.log('tipos de carta',deck)
   for( let esp of tiposEspeciales ) {
    for( let tipo of tiposDeCarta ) {
        
            deck.push( esp + tipo);
        }
    }


    console.log('tipos especiales',deck)
    // console.log( deck );
    //* distribuye de manera aleatoria los elementos de un arreglo
    deck = _.shuffle( deck ); 
    //console.log( deck );
    return deck;
}
//export default crearDeck
/**
 * 
 * @param {string} carta 
 * @returns {number}
 */

export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            //J,Q,k valen 10,A vale 11
            ( valor === 'A' ) ? 11 : 10
            //con la multiplicacion x 1 el valor string lo convertimos a numeric
            : valor * 1;
}
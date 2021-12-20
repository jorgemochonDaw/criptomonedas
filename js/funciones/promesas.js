import {
    selectCripto,
    objDineros
} from './../funciones/funciones.js';
import {
    mostrarCotizacionHTML,
    mostrarSpinner
} from './../funciones/html.js';
/** Funcion en la cual hacemos la peticion a la api, si todo es correcto ejecuta las funciones mandando la data como parametro a las funciones necesarias,
 *  en caso de error, lanza un mensaje. */
export function consultarCripto() {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => obtenerCripto(resultado.Data))
        .then(criptomonedas => selectCripto(criptomonedas))
        .catch(error => console.log(error));
}

/** Creamos un objeto asíncrono de la data, que si todo es correcto resolve retorna el obj.*/
export const obtenerCripto = criptomonedas => new Promise(resolve => {
    resolve(criptomonedas);
});


/**Funcion en la cual hacemos la consulta a la api.
 * Importamos el objeto objDineros con el fin de usar sus valores como parametros de la url, para la carga precisa de la data. 
 * Durante la carga ejecutamos una especie de spinner que es un loading.
 * */
export function consultarAPI() {
    const {
        moneda,
        criptomoneda
    } = objDineros;
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
    mostrarSpinner();
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(cotizacion => {
            mostrarCotizacionHTML(cotizacion.DISPLAY[criptomoneda][moneda]);
        });
}
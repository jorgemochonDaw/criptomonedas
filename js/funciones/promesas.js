import {
    selectCripto,
    objDineros
} from './../funciones/funciones.js';
import {
    mostrarCotizacionHTML,
    mostrarSpinner
} from './../funciones/html.js';
export function consultarCripto() {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => obtenerCripto(resultado.Data))
        .then(criptomonedas => selectCripto(criptomonedas))
        .catch(error => console.log(error));
}

export const obtenerCripto = criptomonedas => new Promise(resolve => {
    resolve(criptomonedas);
});

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
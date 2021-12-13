import { selectCripto } from './../funciones/funciones.js'
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
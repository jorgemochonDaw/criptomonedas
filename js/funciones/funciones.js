import { consultarAPI } from './../funciones/promesas.js';
export const objDineros = {
    moneda: '',
    criptomoneda: '',
};

export function selectCripto(criptomonedas) {
    criptomonedas.forEach(cripto => {
        const { FullName, Name } = cripto.CoinInfo;
        $('<option>').val(Name).text(FullName).appendTo('#criptomonedas');
    });

}

export function leerValor(e)  {
    objDineros[e.target.name] = e.target.value;
}

export function submitFormulario(e) {
    e.preventDefault();
    const {  moneda, criptomoneda } = objDineros;
    if (moneda === '' || criptomoneda === '') {
        mostrarAlerta('Ambos campos son obligatorios');
        return;
    }
    consultarAPI();
}

function mostrarAlerta(mensaje) {
    const divMensaje = $('<p>').text(mensaje).addClass('error').appendTo('#formulario');
    setTimeout(() => {
        divMensaje.remove();
    }, 3000);
}
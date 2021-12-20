import { consultarAPI } from './../funciones/promesas.js';

/** Objeto de la informacion a recoger, la criptomoneda y el formato de la moneda.*/
export const objDineros = {
    moneda: '',
    criptomoneda: '',
};

/** Funcion que recibe la data de la api con el fin de mostrar la informacion requerida en la página,
 * llenando las opciones del select, para que el usuario seleccione la criptomoneda y el formato de la moneda deseada.
 * */
export function selectCripto(criptomonedas) {
    criptomonedas.forEach(cripto => {
        const { FullName, Name } = cripto.CoinInfo;
        $('<option>').val(Name).text(FullName).appendTo('#criptomonedas');
    });

}

/** Funcion en la cual leemos los valores seleccionados por el usuario y lo almacenamos en el obj objDineros.*/
export function leerValor(e)  {
    objDineros[e.target.name] = e.target.value;
}

/** Funcion en la cual verificamos si el usuario ha seleccionado todos los datos y así cargar la información, llamando a la funcion consultarApi,
 * en caso que no cumpla con los requisitos, se muestra una alerta en la pantalla.*/
export function submitFormulario(e) {
    e.preventDefault();
    const {  moneda, criptomoneda } = objDineros;
    if (moneda === '' || criptomoneda === '') {
        mostrarAlerta('Ambos campos son obligatorios');
        return;
    }
    consultarAPI();
}


/** Funcion que nos crea la alerta si el usuario no cumple con los requisitos.*/
function mostrarAlerta(mensaje) {
    const divMensaje = $('<p>').text(mensaje).addClass('error').appendTo('#formulario');
    setTimeout(() => {
        divMensaje.remove();
    }, 3000);
}
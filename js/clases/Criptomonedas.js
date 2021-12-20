import { submitFormulario, leerValor } from './../funciones/funciones.js';
import { consultarCripto } from './../funciones/promesas.js';

/** Creamos la clase criptomonedas para ejecutar eventos.*/
class Criptomonedas {
    constructor() {
        this.event();
    }
/** Eventos de la app.*/
    event() {
        $(document).ready(() => {
            consultarCripto();
            $('#formulario').submit(submitFormulario);
            $('#criptomonedas').change(leerValor);
            $('#moneda').change(leerValor);
        });
    }
}

export default Criptomonedas;
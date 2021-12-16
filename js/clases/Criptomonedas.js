import { submitFormulario, leerValor } from './../funciones/funciones.js';
import { consultarCripto } from './../funciones/promesas.js';
import { ejecutarMicrofono } from './../funciones/voz.js';
class Criptomonedas {
    constructor() {
        this.event();
    }

    event() {
        $(document).ready(() => {
            consultarCripto();
            $('#formulario').submit(submitFormulario);
            $('#criptomonedas').change(leerValor);
            $('#moneda').change(leerValor);
            $('#microfono').click(ejecutarMicrofono);
        });
    }
}

export default Criptomonedas;
import { submitFormulario, leerValor } from './../funciones/funciones.js';
import { consultarCripto } from './../funciones/promesas.js';
class Criptomonedas {
    constructor() {
        this.event();
    }

    event() {
        $(document).ready(() => {
            consultarCripto();
            $('#formulario').click('submit', submitFormulario);
            $('#criptomonedas').change(() => leerValor);
            $('#moneda').change(() => leerValor);
        });
    }
}

export default Criptomonedas;
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
    notificacion(objDineros);
}

export default function notificacion(valores) {

    console.log(valores);
    if (valores.criptomoneda != "") {
        console.log('fd');
        switch (valores.criptomoneda) {
            case 'BTC':
                Notification.requestPermission()
                if (Notification.permission === 'granted') {
                    const notificacion = new Notification('g', {
                        icon: './../../img/bitcoin.jpg',
                        body: 'Visitar página oficial Bitcoin'
                    });

                    notificacion.onclick = () => { window.open('https://bitcoin.org/es/') };
                }
                break;
        }
    }
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
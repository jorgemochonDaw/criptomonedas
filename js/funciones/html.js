
/** Funcion en la cual muestra de forma visual el resultado a pedir del usuario.
 * Ejecutamos la funcion limpiarHtml para limpiar la pagina una vez echo refresh
*/
export function mostrarCotizacionHTML(cotizacion) {
    limpiarHTML();
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE  } = cotizacion;
    const precio = document.createElement('p');
    precio.classList.add('precio');
    precio.innerHTML = `El Precio es: <span> ${PRICE} </span>`;
    const precioAlto = document.createElement('p');
    precioAlto.innerHTML = `<p>Precio más alto del día: <span>${HIGHDAY}</span> </p>`;
    const precioBajo = document.createElement('p');
    precioBajo.innerHTML = `<p>Precio más bajo del día: <span>${LOWDAY}</span> </p>`;
    const ultimasHoras = document.createElement('p');
    ultimasHoras.innerHTML = `<p>Variación últimas 24 horas: <span>${CHANGEPCT24HOUR}%</span></p>`;
    const ultimaActualizacion = document.createElement('p');
    ultimaActualizacion.innerHTML = `<p>Última Actualización: <span>${LASTUPDATE}</span></p>`;
    resultado.appendChild(precio);
    resultado.appendChild(precioAlto);
    resultado.appendChild(precioBajo);
    resultado.appendChild(ultimasHoras);
    resultado.appendChild(ultimaActualizacion);
    formulario.appendChild(resultado);
}


/** Funcion en la cual creamos el spinner y lo añadimos al html para que se visualice.*/
export function mostrarSpinner() {
    limpiarHTML();
    $('<div>').addClass('spinner').html(
        `
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>    
    `
    ).appendTo('#resultado');
}


/** Limpiamos el resultado en caso de refresh*/
function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}
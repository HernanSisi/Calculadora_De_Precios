import { calcularPrecioTotal } from "./calcularPrecio.js";

export const generadorDeTarjetas = ({nombre,descripcion,precio,imagen}) => {
    let tarjeta = document.createElement('div');
    tarjeta.classList.add('tarjetas');
    let imag = document.createElement('img');
    imag.classList.add('tarjetas__imagen');
    imag.src = imagen;
    let agrupadorUno = document.createElement('div');
    agrupadorUno.classList.add('tarjetas__agrupador__sector1');
    agrupadorUno.appendChild(imag);
    agrupadorUno.appendChild(generadorInformacion(nombre,descripcion));
    tarjeta.appendChild(agrupadorUno);
    let agrupadorDos = document.createElement('div');
    agrupadorDos.classList.add('tarjetas__agrupador__sector2');
    agrupadorDos.appendChild(generarCantidadDisminuir());
    let agrupadorPreciosCantidad = document.createElement('div');
    agrupadorPreciosCantidad.classList.add('tarjetas__precios__contenedor');
    agrupadorPreciosCantidad.appendChild(generadorDePrecio(precio));
    agrupadorPreciosCantidad.appendChild(generarCantidad());
    agrupadorDos.appendChild(agrupadorPreciosCantidad);
    agrupadorDos.appendChild(generarCantidadAumentar())
    tarjeta.appendChild(agrupadorDos);
    return tarjeta;
};
const generadorInformacion = (nombre, descripcion) => {
    let info = document.createElement('div');
    info.classList.add('tarjetas__informacion');
    let titulo = document.createElement('h3');
    titulo.classList.add('tarjetas__titulo');
    titulo.textContent = nombre;
    info.appendChild(titulo);
    let subtitulo = document.createElement('p');
    subtitulo.classList.add('tarjetas__descripcion');
    subtitulo.textContent = descripcion;
    info.appendChild(subtitulo);
    return info;
};
const generadorDePrecio = (precio) => {
    let costo = document.createElement('div');
    costo.classList.add('tarjetas__precios');
    let precioOriginal = document.createElement('h2');
    precioOriginal.classList.add('tarjetas__precio');
    precioOriginal.textContent = precio + '$ x';
    precioOriginal.dataset.precio = precio;
    costo.appendChild(precioOriginal);
    let rebaja = document.createElement('span');
    rebaja.classList.add('tarjetas__precio__descuento');
    rebaja.dataset.descuento = '';
    costo.appendChild(rebaja);
    return costo;
};
const generarCantidadAumentar = () => {
    let aumentar = document.createElement('button');
    aumentar.classList.add('tarjetas__btn__aumentar');
    let sigMas = document.createElement('i');
    sigMas.classList.add('fa-solid', 'fa-plus');
    aumentar.appendChild(sigMas);
    aumentar.addEventListener('click',btnAumentar);
    return aumentar;
};
const generarCantidadDisminuir = () => {
    let disminuir = document.createElement('button');
    let sigMenos = document.createElement('i');
    sigMenos.classList.add('fa-solid', 'fa-minus');
    disminuir.appendChild(sigMenos);
    disminuir.addEventListener('click',btnDisminuir);
    disminuir.classList.add('tarjetas__btn__disminuir');
    return disminuir;
}
const generarCantidad = () => {
    let cantidades = document.createElement('div');
    cantidades.classList.add('tarjetas__cantidad');
    let contador = document.createElement('span');
    // contador.classList.
    contador.classList.add('tarjetas__inp__cantidad');
    contador.dataset.cantidad = 0;
    contador.textContent = 0;
    cantidades.appendChild(contador);
    return cantidades;
}

const btnAumentar = (event) => {
    let avance = () => {
        if (event.path[0].classList.value == 'tarjetas__btn__aumentar') {
            return 2;
        }
        return 3;
    }
    let contador = event.path[avance()].querySelector('[data-cantidad]');
    if (contador.dataset.cantidad <99) {
        contador.dataset.cantidad++;
        contador.textContent = contador.dataset.cantidad;
        calcularPrecioTotal();
    }
};
const btnDisminuir = (event) => {
    let avance = () => {
        if (event.path[0].classList.value == 'tarjetas__btn__aumentar') {
            return 2;
        }
        return 3;
    }
    let contador = event.path[avance()].querySelector('[data-cantidad]');
    if (contador.dataset.cantidad > 0) {
        contador.dataset.cantidad--;
        contador.textContent = contador.dataset.cantidad;
        calcularPrecioTotal();
    }
};
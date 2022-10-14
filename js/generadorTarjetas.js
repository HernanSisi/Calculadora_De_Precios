import { calcularPrecioTotal } from "./calcularPrecio.js";

export const generadorDeTarjetas = ({nombre,descripcion,precio,imagen}) => {
    let tarjeta = document.createElement('div');
    tarjeta.classList.add('tarjetas');
    let imag = document.createElement('img');
    imag.classList.add('tarjetas__imagen');
    imag.src = imagen;
    tarjeta.appendChild(imag);
    tarjeta.appendChild(generadorInformacion(nombre,descripcion));
    tarjeta.appendChild(generadorDePrecio(precio));
    tarjeta.appendChild(generarCantidad());

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
const generarCantidad = () => {
    let cantidades = document.createElement('div');
    cantidades.classList.add('tarjetas__cantidad');
    let contador = document.createElement('span');
    contador.classList.add('tarjetas__inp__cantidad');
    contador.dataset.cantidad = 0;
    contador.textContent = 0;
    cantidades.appendChild(contador);
    let botonera = document.createElement('div');
    botonera.classList.add('tarjetas__btns');
    let aumentar = document.createElement('button');
    aumentar.classList.add('tarjetas__btn__aumentar');
    aumentar.textContent = '+';
    aumentar.addEventListener('click',btnAumentar);
    botonera.appendChild(aumentar);
    let disminuir = document.createElement('button');
    disminuir.classList.add('tarjetas__btn__disminuir');
    disminuir.textContent = '-';
    disminuir.addEventListener('click',btnDisminuir);
    botonera.appendChild(disminuir);
    cantidades.appendChild(botonera);
    return cantidades;
}
const btnAumentar = (event) => {
    let contador = event.path[2].querySelector('[data-cantidad]');
    if (contador.dataset.cantidad <99) {
        contador.dataset.cantidad++;
        contador.textContent = contador.dataset.cantidad;
        calcularPrecioTotal();
    }
};
const btnDisminuir = (event) => {
    let contador = event.path[2].querySelector('[data-cantidad]');
    if (contador.dataset.cantidad > 0) {
        contador.dataset.cantidad--;
        contador.textContent = contador.dataset.cantidad;
        calcularPrecioTotal();
    }
};
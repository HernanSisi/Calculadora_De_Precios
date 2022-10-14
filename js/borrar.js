import { calcularPrecioTotal } from "./calcularPrecio.js";

export const borrar = () =>{
    const cantidades = document.querySelectorAll('[data-cantidad]');
    cantidades.forEach(i =>{
        i.dataset.cantidad = 0;
        i.textContent = 0;
        calcularPrecioTotal();
    });
};
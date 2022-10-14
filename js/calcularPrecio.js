import { redondear } from "./redondearPrecio.js";

export const calcularPrecioTotal = () => {
    let total = 0;
    const tarjetas = document.querySelectorAll('.tarjetas');
    const descuento = document.querySelector('[data-rebaja]').value;
    tarjetas.forEach(i => {
        const precio = i.querySelector('[data-precio]').dataset.precio;
        const cantidad = i.querySelector('[data-cantidad]').dataset.cantidad;
        total += (redondear(precio, descuento))*cantidad;
    });
    document.querySelector('[data-total]').textContent = total + '$';
};
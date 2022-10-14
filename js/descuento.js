import { calcularPrecioTotal } from "./calcularPrecio.js";
import { redondear } from "./redondearPrecio.js";

export const calcularDescuentos = () => {
    const tarjetas = document.querySelectorAll('.tarjetas');
    const descuento = document.querySelector('[data-rebaja]').value;
    tarjetas.forEach(i => {
        const precioDescuento = i.querySelector('[data-descuento]');
        const precioOriginal = i.querySelector('[data-precio]');
        if (descuento == 0) {
            precioOriginal.classList.remove('tarjetas__precio--tachado');
            precioOriginal.textContent = precioOriginal.dataset.precio + '$ x';
            precioDescuento.textContent = '';
            calcularPrecioTotal();
            return;
        }
        /* var test = 2353;
        var testString = test.toString();
        var lastone = testString[testString.length -1];
        test + ( - lastone); */
        
        precioOriginal.classList.add('tarjetas__precio--tachado');
        precioDescuento.textContent = redondear(precioOriginal.dataset.precio, descuento) + '$ x';
        precioOriginal.textContent = precioOriginal.dataset.precio;
        calcularPrecioTotal();
    });
};
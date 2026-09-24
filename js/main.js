import { borrar } from "./borrar.js";
import { calcularDescuentos } from "./descuento.js";
import { generadorDeTarjetas } from "./generadorTarjetas.js";

fetch("source/json/data.json")
    .then(respuesta => respuesta.json())
    .then(({ productos = [] }) => {
        const contenedor = document.querySelector('.calculadora__tarjetas');
        productos.forEach(producto => contenedor.appendChild(generadorDeTarjetas(producto)));
        calcularDescuentos();
    })
    .catch(error => console.error("No se pudieron cargar los productos:", error));

document.querySelector('[data-borrar]').addEventListener('click', borrar);
document.querySelector('[data-rebaja]').addEventListener('change', calcularDescuentos);

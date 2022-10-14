import { borrar } from "./borrar.js";
import { calcularPrecioTotal } from "./calcularPrecio.js";
import { calcularDescuentos } from "./descuento.js";
import { generadorDeTarjetas } from "./generadorTarjetas.js";


var xhr = new XMLHttpRequest;
xhr.open("GET", "https://raw.githubusercontent.com/HernanSisi/Calculadora_De_Precios/main/source/json/data.json");
xhr.addEventListener("load", function () {
        var respuesta = JSON.parse(xhr.response) || [];
        respuesta.productos.forEach(i => {
            document.querySelector('.calculadora__tarjetas').appendChild(generadorDeTarjetas(i));
        });
    });
    xhr.send();

    document.querySelector('[data-borrar]').addEventListener('click', borrar);
    document.querySelector('[data-rebaja]').addEventListener('change', calcularDescuentos);
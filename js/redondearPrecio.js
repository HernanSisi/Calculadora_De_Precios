export const redondear = (precio, descuento) => {
    // Se redondea a entero para evitar errores de coma flotante (ej: 245.00000000000003)
    let descuentoFinal = Math.round(Number(precio) * (1 - Number(descuento)));
    let ultimoDigito = descuentoFinal % 10;
    if (ultimoDigito <= 3) {
        descuentoFinal -= ultimoDigito;
    } else if (ultimoDigito >= 8) {
        descuentoFinal += (10 - ultimoDigito);
    } else {
        descuentoFinal += (5 - ultimoDigito);
    }
    return descuentoFinal;
}

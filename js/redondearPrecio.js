export const redondear = (precio, descuento) => {
    let descuentoFinal = (precio - precio * descuento);
    let ultimoDigito = parseInt(descuentoFinal.toString()[descuentoFinal.toString().length -1]);
    if (ultimoDigito <=3) {
        descuentoFinal -= ultimoDigito;
    } else if (ultimoDigito >= 8){
        descuentoFinal += (10 - ultimoDigito);
    } else{
        descuentoFinal += (5 - ultimoDigito);
    }
    return descuentoFinal;
}
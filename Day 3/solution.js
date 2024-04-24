function calcularPaginas(p, c){
    if (p < 0 || c < 0) { 
    return 0;
} else {
    return p * c
}
}

const resultado = calcularPaginas(5, 10)
console.log(resultado)
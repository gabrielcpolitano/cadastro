function calcularIMC(peso, altura) {
    const imc = peso / (altura * altura);


if (imc <= 18.5) {
    return 'Abaixo do peso';
} else if (imc <= 25.0) {
    return 'Normal';
} else if (imc <= 30.0) {
    return 'Sobrepeso';
} else {
    return 'Obeso';
}

}

// Exemplo de uso da função:
const resultado = calcularIMC(50, 1.75); //Altere os valoress para testar
console.log(resultado);

function playSoccer(name) {
    // Chega se o primeiro caractere do nome é 'R' ou 'r'
    if (name.charAt(0).toLowerCase() === 'r') {
        return name + ' play soccer';
    } else {
        return name + ' does not play soccer'
    }

}
const resultado = playSoccer('Ronaldo')
console.log(resultado)
function duplicarCaracteres(str) {
    return str.split('').map(function(c) {
        return c + c;
    }).join('');
}

console.log(duplicarCaracteres('Gabriel'));
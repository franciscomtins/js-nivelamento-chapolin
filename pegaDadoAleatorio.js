
function pegaDadoAleatorio (array) {
    const indice = Math.floor(Math.random() * array.length)
    return array[indice]
}

module.exports = pegaDadoAleatorio
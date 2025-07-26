const pegaDadoAleatorio = require('./pegaDadoAleatorio')
const viloes = require('./dados/viloes')
const objetos = require('./dados/objetos')
const frasesClassicas = require('./dados/frasesClassicas')

coisasAleatoriasDoMundoDoChapolin()

function coisasAleatoriasDoMundoDoChapolin() {
    console.log('')
    console.log('Mais rápido que uma tartarura')
    console.log('Mais forte que uma formiga')
    console.log('Mais inteligente que um asno')
    console.log('Ele é o ....')
    console.log('')
    console.log('CHA PO LIN')
    console.log('')
    console.log('Coisas aleatórias do mundo do Chapolin:')
    console.log('')
    console.log(`Vilão: ${pegaDadoAleatorio(viloes)}`)
    console.log(`Objeto: ${pegaDadoAleatorio(objetos)}`)
    console.log(`Frase Clássica: ${pegaDadoAleatorio(frasesClassicas)}`)
    console.log('')
}


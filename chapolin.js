const pegaDadoAleatorio = require('./pegaDadoAleatorio')

const viloes = [
    'Poucas Trancas',
    'Quase Nada',
    'Tripa Seca',
    'Racha Cuca',
    'Pirata Alma Negra',
    'Rosa Rumorosa'
]

const objeto = [
    'Marreta Biônica',
    'Aerolito',
    'Carnerninho de anotações',
    'Chirrin Chirrion do Diabo',
    'Pipulas de nanicolina'
]

const frasesClassicas = [
    'Não contavam com minha astúcia',
    'Siga-me os bons',
    'MInhas anteninhas de vinil estão dectando a presença do inimigo',
    'Se aproveitam da minha nobreza',
    'Suspeitei desde o princípio',
    'Palma! Palma! Não priemos cânico!',
    'Todos os meus movimentos são friamente calculados'
]


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
    console.log(`Objeto: ${pegaDadoAleatorio(objeto)}`)
    console.log(`Frase Clássica: ${pegaDadoAleatorio(frasesClassicas)}`)
    console.log('')
}

/*
function pegaDadoAleatorio(array) {
    const indice = Math.floor(Math.random() * array.length)
    return array[indice]
}
*/
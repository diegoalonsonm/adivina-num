let numeroSecreto
let intentos
let listaNumerosSorteados = []
let numeroMaximo = 10

function asignarTexto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento)
    elementoHTML.innerHTML = texto
}

function intentoUsuario() {
    let numeroUsuario = parseInt(document.getElementById('numeroUsuario').value)

    if (numeroUsuario === numeroSecreto) {
        asignarTexto('p', `has acertado el numero en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}`)
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if (numeroUsuario > numeroSecreto) {
            asignarTexto('p', 'el numero es menor')
        } else {
            asignarTexto('p', 'el numero es mayor')
        }
        intentos++
        limpiarInput()
    }
    return
}

function limpiarInput() {
    document.getElementById('numeroUsuario').value = ''
}

function generarNumero() {
    let numero = Math.floor(Math.random() * numeroMaximo) + 1

    console.log(numero)
    console.log(listaNumerosSorteados)

    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTexto('p', 'no hay mas numeros disponibles')
    } else {
        if (listaNumerosSorteados.includes(numero)) {
            return generarNumero()
        } else {
            listaNumerosSorteados.push(numero)
            return numero
        }
    }
    
}

function mensajeIniciales() {
    asignarTexto('h1', 'juego numero secreto')
    numeroSecreto = generarNumero()
    asignarTexto('p', `ingresa un numero entre 1 y ${numeroMaximo}`)
    intentos = 1
}

function reiniciarJuego() {
    limpiarInput()
    mensajeIniciales()
    document.getElementById('reiniciar').setAttribute('disabled', true)
}

mensajeIniciales()
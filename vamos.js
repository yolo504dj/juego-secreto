let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento (elemento,texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento () {
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
    if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento("p",`Acertaste el numero en ${intentos} ${intentos === 1 ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        // El usuario no acerto
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento("p","El numero secreto es menor");
        } else {
            asignarTextoElemento("p","El numero secreto es mayor");
        }
        intentos ++;
        limpiarCaja();
    }
    console.log(numeroSecreto);
    return;
}

//limpiar juego

function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";
}


function generarNumeroSecreto() {
        let numerogenerado = Math.floor(Math.random()*10)+1;
        console.log(numerogenerado);
        console.log(listaNumerosSorteados);
        // si sorteamos todos los numeros
        if (listaNumerosSorteados.length == numeroMaximo) {
            asignarTextoElemento("p","Ya se sortearon todos los numerosposibles");
        } else {
        // si el numero generado esta incluido en la lista hacemos una opracion si no se sigue jugando
        if (listaNumerosSorteados.includes(numerogenerado)){
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numerogenerado);
            return numerogenerado;
        }
    }
}
//Reiniciar juego

function condicionesIniciales(){
    asignarTextoElemento("h1","Juego del numero secreto");
    asignarTextoElemento("p","indicame un numero del 1 al 10");
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;    
    console.log(numeroSecreto);
}

function reiniciarjuego() {
    //limppiar caja
    limpiarCaja();
    //indicar mensaje de intervalo
    // generar numero aleatorio
    condicionesIniciales();
    // inicicializar el numero de intentos
    // deshabilitar el boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled","true");
}

condicionesIniciales();
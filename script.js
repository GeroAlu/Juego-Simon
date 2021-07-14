const opciones = ["verde", "rojo", "amarillo", "azul"]
let listaJugador = [];
let listaComputadora = [];

function opcionAleatoria() {
    let aleatorio = Math.floor(Math.random() * 4);
    let opcion = opciones[aleatorio];
    return opcion
}


function comenzarJuego() {
    $(".parte").unbind();
    $(".parte").click(chequearOpciones);
    listaJugador = [];
    listaComputadora = [];
    let opcion = opcionAleatoria();
    agregarOpcion(opcion);
}

function agregarOpcion(opcion) {
    listaComputadora.push(opcion);
    for(let i in listaComputadora) {
        setTimeout (function() {
            $("#" + listaComputadora[i]).addClass(listaComputadora[i] + "-comun");
            setTimeout (function() {
                $("#" + listaComputadora[i]).removeClass(listaComputadora[i] + "-comun");
            }, 500);
        }, i * 700);
    }
}

function chequearOpciones(evento) {
    listaJugador.push(evento.target.id);
    let indice = listaJugador.length - 1;
    if (listaJugador[indice] !== listaComputadora[indice]) {
        perdio();
        return;
    }
    if (listaJugador.length === listaComputadora.length) {
        listaJugador = [];
        let opcion = opcionAleatoria();
        agregarOpcion(opcion);
    }
}

function perdio() {
    $("#puntaje").text(listaComputadora.length - 1);
    listaJugador = [];
    listaComputadora = [];
    $(".parte").unbind();
}

$("#boton").click(comenzarJuego);


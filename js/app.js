

let valor = document.getElementById('n1')
let respuesta = document.getElementById('res')
let boton = document.getElementById('calculi')

function esPar() {

    let numero = parseInt(valor.value)
    if ((numero % 2) == 0) {
        let resultado = "Es Par"
        respuesta.innerText = resultado
    } else {
        let resultado2 = "Es ImPar"
        respuesta.innerText = resultado2
    }

}


boton.onclick = esPar
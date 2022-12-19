const seccionBatalla = document.getElementById('campo-batalla');
const imgAtaqueJugador = document.getElementById('img-ataque-jugador');
const imgAtaquePc = document.getElementById('img-ataque-pc');
const btnPiedra = document.getElementById('btn-piedra');
const btnPapel = document.getElementById('btn-papel');
const btnTijeras = document.getElementById('btn-tijeras');
const jugadorPuntos = document.getElementById('jugador_puntos');
const pcPuntos = document.getElementById('pc_puntos');

let opcionJugador;
let opcionPc;
let imgJugador;
let imgPc;
let jugador = 0;
let pc = 0;


function iniciar(){
    seccionBatalla.style.display = 'none';
    seteoMarcador()
}

function seteoMarcador(){
    jugadorPuntos.innerHTML = jugador
    pcPuntos.innerHTML = pc
}


btnPiedra.addEventListener('click', function(){
    opcionJugador = "Piedra";
    tiradaJugador();
})

btnPapel.addEventListener('click', function(){
    opcionJugador = "Papel";
    tiradaJugador();
})

btnTijeras.addEventListener('click', function(){
    opcionJugador = "Tijeras";
    tiradaJugador();
})


function tiradaJugador(){
    var aleaorio = Aleatorio();

    if(aleaorio == 0){
        opcionPc = "Piedra";
    }else if(aleaorio == 1){
        opcionPc = "Papel";
    }else if(aleaorio == 2){
        opcionPc = "Tijeras"
    };

    batalla()

}

function batalla(){
    if(opcionJugador == opcionPc){
    }else if(opcionJugador == "Piedra" && opcionPc == "Tijeras"){
        ganaste()
    }else if(opcionJugador == "Papel" && opcionPc == "Piedra"){
        ganaste()
    }else if(opcionJugador == "Tijeras" && opcionPc == "Papel"){
        ganaste()
    }else{
        pc--;
    };
    seteoMarcador()
    resulltado()

}


function ganaste(){
    jugador++;
}


function Aleatorio(){
    let n = Math.floor(Math.random() * 3);
    return n;
}

function temporizador(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
  
const imagenes = [
    {
        name: "Piedra",
        url: "assets/Piedra.PNG" 
    },
    {
        name: "Papel",
        url: "assets/Papel.PNG" 
    },
    {
        name: "Tijeras",
        url: "assets/Tijeras.PNG" 
    }
]

function resulltado(){
    for(let i=0;i< 3;i++){
        if(opcionJugador == imagenes[i].name){
            imgJugador = imagenes[i].url;
            var inserta = `<img class="img-batalla" src=${imgJugador}>`;
            imgAtaqueJugador.innerHTML = inserta;
        };
        
        if(opcionPc == imagenes[i].name){
            imgPc = imagenes[i].url;
            var inserta = `<img class="img-batalla" src=${imgPc}>`;
            imgAtaquePc.innerHTML = inserta;
        };
        
    };


    seccionBatalla.style.display = 'flex';
    esperar(3000)
    
}

async function esperar(time) {
    await temporizador(time);
    seccionBatalla.style.display = 'none'; 
}


window.addEventListener('load', iniciar);
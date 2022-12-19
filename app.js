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
];



function iniciar(){
    seccionBatalla.style.display = 'none';
    seteoMarcador()
};

function seteoMarcador(){
    jugadorPuntos.innerHTML = jugador
    pcPuntos.innerHTML = pc
};


btnPiedra.addEventListener('click', function(){
    opcionJugador = "Piedra";
    opPc();
});

btnPapel.addEventListener('click', function(){
    opcionJugador = "Papel";
    opPc();
});

btnTijeras.addEventListener('click', function(){
    opcionJugador = "Tijeras";
    opPc();
})


function opPc(){
    var aleaorio = nAleatorio();

    if(aleaorio == 0){
        opcionPc = "Piedra";
    }else if(aleaorio == 1){
        opcionPc = "Papel";
    }else if(aleaorio == 2){
        opcionPc = "Tijeras"
    };

    batalla();

};

function batalla(){
    if(opcionJugador == opcionPc){
        msj = "Empate";
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
    addImagenes();

}


function ganaste(){
    jugador++;
}


function nAleatorio(){
    let n = Math.floor(Math.random() * 3);
    return n;
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  


function addImagenes(){
    for(let i=0;i<imagenes.length;i++){
        if(opcionJugador == imagenes[i].name){
            imgJugador = imagenes[i].url;
            var inserta = `<img class="img-batalla" src=${imgJugador} alt="">`;
            imgAtaqueJugador.innerHTML = inserta;
        };
        
        if(opcionPc == imagenes[i].name){
            imgPc = imagenes[i].url;
            var inserta = `<img class="img-batalla" src=${imgPc} alt="">`;
            imgAtaquePc.innerHTML = inserta;
        };
        
    };


    seccionBatalla.style.display = 'flex';
    test(2000)
    
};

async function test(time) {
    console.log('start timer');
    await sleep(time);
    console.log('after 1 second');
    seccionBatalla.style.display = 'none'; 
}


window.addEventListener('load', iniciar);
/* (function(){
init();
function init(){
    document.getElementById("seccionRutinas").addEventListener("click", procesarClick);
    document.getElementById("seccionEjercicios").addEventListener("click", procesarClick);
    document.getElementById("seccionProgreso").addEventListener("click", procesarClick);
    document.getElementById("seccionPerfil").addEventListener("click", procesarClick);
}
function procesarClick(evt){
    str = evt.target.id;
    if(str == "seccionRutinas"){
        document.getElementById("rutinas").classList.remove("hidden");
    }
}
})(); */

window.onload = init;
var btns;
var secciones;

function init(){
    initialize_variables();
    initialize_events();
}

function initialize_variables(){
    btns = [];
    btns[0] = document.getElementById("seccion_intro");
    btns[1] = document.getElementById("seccion_rutinas");
    btns[2] = document.getElementById("seccion_ejercicios");
    btns[3] = document.getElementById("seccion_progreso");
    btns[4] = document.getElementById("seccion_perfil");

    secciones = [];
    secciones[0] = document.getElementById("intro");
    secciones[1] = document.getElementById("rutinas");
    secciones[2] = document.getElementById("ejercicios");
    secciones[3] = document.getElementById("progreso");
    secciones[4] = document.getElementById("perfil");
}

function initialize_events(){
    for(var i in btns){
        btns[i].addEventListener("click",processClick);
    }
}

function processClick(evt){
    var str = evt.target.id;
    var section = str.split("_")[1];
    var ref = document.getElementById(section);
    hide();
    ref.className = "animated slideInDown";
}

function hide(){
    for(var i in secciones){
        secciones[i].className = "hidden";
    }
}
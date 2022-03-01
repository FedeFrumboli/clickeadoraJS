'use strict'

const clickeadora = document.getElementById("clickeadora");
const dobleClickeadora = document.getElementById("dobleClickeadora");

function getPosicion(event){
    clickeadora.style.top = (event.clientY - 12) + "px";
    clickeadora.style.left = (event.clientX + 7) + "px";
    dobleClickeadora.style.top = (event.clientY - 26) + "px";
    dobleClickeadora.style.left = (event.clientX + 7) + "px";
}

function animacionClick(event){
    clickeadora.style.animationName = "mostrarClick";
    setTimeout(function(){
        clickeadora.style.animationName = "desactivado";
    }, 300);
}

function animacionDobleClick(event){
    clickeadora.style.animationName = "desactivado";
    dobleClickeadora.style.animationName = "mostrarClick";
    setTimeout(function(){
        dobleClickeadora.style.animationName = "desactivado";
    }, 300);
}

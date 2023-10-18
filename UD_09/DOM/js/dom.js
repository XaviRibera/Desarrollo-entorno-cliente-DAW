"use strict"

let capa = document.getElementById("l-main");

function crearP(){
    let p = document.createElement("p");
    let t = document.createTextNode(prompt("Dime texto del parrafo:"));
    p.appendChild(t);
    capa.appendChild(p);
};

function crearImg(){
    let img = document.createElement("img");
    img.src = "assets/gtr.jpg";
    capa.appendChild(img);
}

function seleccionar(){
    let parrafos = document.getElementsByTagName("p");
    console.log(parrafos);
    Array.from(parrafos).forEach(p => console.log(p.firstChild));
}

function seleccionarPorCapas(){
    let capaSel = prompt("Dime c1 o c2");
    let c = document.getElementById("l-"+capaSel);

    console.log(c);

    let parrafos = c.getElementsByTagName("p");
    Array.from(parrafos).forEach(p => console.log(p.firstChild));
}

function seleccionarPorClases(){
    let parrafos = document.getElementsByClassName("c-text-primary");
    Array.from(parrafos).forEach(p => console.log(p.innerHTML));
}

function crearBoton(){
    let b = document.createElement("button");
    let t = document.createTextNode(prompt("Texto pal boton: "));
    b.appendChild(t);
    b.onclick = ()=>alert("has pulsado el fcking boton");
    capa.appendChild(b);
}
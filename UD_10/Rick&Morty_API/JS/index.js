"use scrict"

let capa = document.getElementById("l-contenedor");

characters.data.forEach(char => printCharacters(char));

function printCharacters(char){
    let div = document.createElement("div"); //Creamos los elementos HTML
    let img = document.createElement("img");
    let id = document.createElement("p");
    let nombre = document.createElement("p");
    let textoId = document.createTextNode("Id: " + char.id);  //Se crea un nodo de texto que contiene "Id: " seguido del id del personaje
    let textoNombre = document.createTextNode("Nombre: " + char.name);

    div.appendChild(img);
    div.appendChild(id);  //Estas haciendo que div contenga esos 3 elementos
    div.appendChild(nombre);

     
    id.appendChild(textoId);  //Estas haciendo que el elemento id contenga el nodo de texto textoId
    nombre.appendChild(textoNombre);
    img.src = char.image;
    img.id = char.id;
    img.addEventListener("click", fichaPersonaje);

    capa.appendChild(div);  //El elemento <div class="c-card"> que contiene la informacion se agrega al elemento seleccionado en capa
}

function fichaPersonaje(){
    let id = this.id;
    let char = characters.data.find(p => p.id==id);
    console.log(char);
    document.getElementById("imagenFicha").src = char.image;
    document.getElementById("idFicha").innerHTML = "Id: " + char.id;
    document.getElementById("nombreFicha").innerHTML = "Nombre: " + char.name;
    document.getElementById("statusFicha").innerHTML = "Status: " + char.status;
    document.getElementById("speciesFicha").innerHTML = "Specie: " + char.species;
    document.getElementById("genderFicha").innerHTML = "Gender: " + char.gender;

    document.getElementById("fichaCharacter").showModal();
}
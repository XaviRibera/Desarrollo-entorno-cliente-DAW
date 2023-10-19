"use strict"

pizzas.forEach(pizza => printHUD(pizza));
changeImport(0);

function printHUD(pizza){
    let btn = document.createElement("button");
    btn.codigo = pizza.codigo;
    btn.textContent = pizza.nombre;
    btn.onclick = showIngredients;

    document.getElementById("botones").appendChild(btn);
}

function showIngredients(){
    let codigo = this.codigo;
    let pizza = pizzas.find(pizza => pizza.codigo == codigo);
    let ingredientsText = "";
    let precio = parseInt(5);
    pizza.ingredientes.forEach(ingredient => {
        ingredientsText += ingredient.ingrediente + "<br>";
        precio = precio + parseFloat(ingredient.precio);
    });

    if(document.getElementsByClassName('imagencss')[0]){
        document.getElementsByClassName('imagencss')[0].remove();
    }
    
    let img = document.createElement("img");
    img.src = "assets/" + pizza.codigo + ".jpg";
    img.classList.add('imagencss');
    document.getElementById("fotopizza").appendChild(img);

    document.getElementById("ingredientes").innerHTML = ingredientsText;
    changeImport(precio);
}

function changeImport(precio){
    document.getElementById("importe").innerHTML = "Importe: " + precio;
}
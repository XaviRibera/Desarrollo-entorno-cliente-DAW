//Valor this en Fat Arrow

let persona={
    nombre:"Pepe",
    saludar:()=>console.log(`Hola ${this.nombre}`)
};
persona.saludar()

let persona2={
    nombre:"Pepe",
    saludar:function(){console.log(`Hola ${this.nombre}`)}
};
persona2.saludar()

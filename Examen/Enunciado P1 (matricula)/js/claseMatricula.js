// Definicion clase Matricula		
class Matricula{
		
		constructor(){
			this.dni = null;
			this.nombre = null;
			this.modulos = [];
		}
		
		anyadeModulo(modulo){
			if(!this.modulos.includes(modulo)){
				this.modulos.push(modulo);
			}
		}
		
		borraModulo(codigo){
			this.modulos = this.modulos.filter(mod => mod.codigo != codigo);
			this.verMatricula();
		}
		
		verMatricula(){
			let capaMatricula = document.getElementById("capamatricula");
			let datosModulos = "<table class='table table-bordered table-striped'>";
			this.modulos.forEach(mod => {
				datosModulos += `<tr><td> ${mod.nombre}</td><td>${mod.creditos}</td><td><button id="${"borrar"+mod.codigo}" class='btn btn-danger'>Borrar</button></td></tr>`
			})
			datosModulos += "</table";
			capaMatricula.innerHTML = datosModulos;
			this.modulos.forEach(mod => {
				document.getElementById("borrar"+mod.codigo).addEventListener("click",()=>{this.borraModulo(mod.codigo)});
			});
		}

		verDatosPersonales(){
			document.getElementById("dni").value = this.dni;
			document.getElementById("nombre").value = this.nombre;
		}

		modificarDatosPersonales(dni,nombre){
			if(this.dni != dni)
				this.dni = dni;
			if(this.nombre != nombre)
				this.nombre = nombre;
		}
	
	}
class Carrito{

	constructor(id){	
		this.id = id;
		this.articulos = [];
		this.unidades = new Map();			
	}

	anyadeArticulo(articulo){
		this.articulos.push(articulo);
		this.unidades.set(articulo.codigo, 1);
	}			
				
	borraArticulo(codigo){	
		this.articulos = this.articulos.filter(article => article.codigo != codigo);
		this.unidades.delete(codigo);
		this.verCarrito();
	}
	
	modificaUnidades(codigoArticulo,cantidad){	
		
		if(this.unidades.get(codigoArticulo) + cantidad === 0){
			this.borraArticulo(codigoArticulo);
			this.unidades.delete(codigoArticulo);
		}else{
			this.unidades.set(codigoArticulo, this.unidades.get(codigoArticulo) + cantidad);
		}
		this.verCarrito();
	}	
			
	verCarrito(){
		let tabla = document.getElementById("tablaCarrito");
		let idPedido = document.getElementById("idPedido")
		idPedido.innerHTML = "";
		idPedido.appendChild(document.createTextNode("ID: " + this.id));
		let totalCarrito = document.getElementById("total");
		let sumaTotal = 0;
		tabla.getElementsByTagName("tbody")[0].innerHTML = ""

		 this.articulos.forEach(article => {

			let rowArticle = document.createElement("tr");

			let cellImg = document.createElement("td");
			let articleImg = document.createElement("img");
			articleImg.className = "imgCarrito";
			articleImg.src = "./assets/" + article.codigo + ".jpg";
			cellImg.appendChild(articleImg);

			let cellName = document.createElement("td");
			let articleName = document.createTextNode(article.nombre);
			cellName.appendChild(articleName);

			let cellDesc = document.createElement("td");
			let articleDesc = document.createTextNode(article.descripcion);
			cellDesc.appendChild(articleDesc);

			let cellPrice = document.createElement("td");
			let articlePrice = document.createTextNode(article.precio);
			cellPrice.appendChild(articlePrice);

			let cellTotal = document.createElement("td");
			let total = this.unidades.get(article.codigo) * article.precio;
			let articleTotal = document.createTextNode(total);
			cellTotal.appendChild(articleTotal);
			sumaTotal += total;

			let cellUnits = document.createElement("td");
			let articleUnits = document.createTextNode(this.unidades.get(article.codigo));
			cellUnits.appendChild(articleUnits);

			let cellActions = document.createElement("td");
			cellActions.className = "tdAcciones";

			let btnAumentarUnits = document.createElement("button");
			btnAumentarUnits.className = "buttonUds buttonAumentar";
			btnAumentarUnits.textContent = "  +  ";
			cellActions.appendChild(btnAumentarUnits);
			btnAumentarUnits.addEventListener("click", () => this.modificaUnidades(article.codigo,1));

			let btnDisminuarUnits = document.createElement("button");
			btnDisminuarUnits.className = "buttonUds buttonDisminuir";
			btnDisminuarUnits.textContent = "  -  ";
			cellActions.appendChild(btnDisminuarUnits);
			btnDisminuarUnits.addEventListener("click", () => this.modificaUnidades(article.codigo,-1));

			let btnBorrarArticle = document.createElement("button");
			btnBorrarArticle.className = "buttonUds buttonBorrar";
			btnBorrarArticle.textContent = "Borrar";
			cellActions.appendChild(btnBorrarArticle);
			btnBorrarArticle.addEventListener("click", () => this.borraArticulo(article.codigo));

			rowArticle.appendChild(cellImg);
			rowArticle.appendChild(cellName);
			rowArticle.appendChild(cellDesc);
			rowArticle.appendChild(cellPrice);
			rowArticle.appendChild(cellTotal);
			rowArticle.appendChild(cellUnits);
			rowArticle.appendChild(cellActions);

			tabla.getElementsByTagName("tbody")[0].appendChild(rowArticle);
		 }) 
		totalCarrito.innerHTML = "";
		totalCarrito.appendChild(document.createTextNode(sumaTotal));
	}			
}

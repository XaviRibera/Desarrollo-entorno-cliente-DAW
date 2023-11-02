	criterios=["Sin ordenar","Ascendente por precio", "Descendente por precio"]
	
	function creaListaCriterios(){
		
	}


	function pintaArticulos(){

		
		listaArticulos.forEach(articulo => montarArticulo(articulo));
		
		
	}

	function montarArticulo(articulo){
		let article = document.createElement("div");

		let articleImg = document.createElement("img");
		articleImg.src = "assets/" + articulo.codigo + ".jpg";
		article.appendChild(articleImg);

		let articleTitle = document.createElement("p");
		articleTitle.appendChild(document.createTextNode(articulo.nombre));
		article.appendChild(articleTitle);

		let articleCharacteristics = document.createElement("p");
		articleCharacteristics.appendChild(document.createTextNode(articulo.descripcion));
		article.appendChild(articleCharacteristics);

		let articlePrice = document.createElement("p");
		articlePrice.appendChild(document.createTextNode(articulo.precio + "€"));
		article.appendChild(articlePrice);

		let articleBuyBtn = document.createElement("button");
		articleBuyBtn.appendChild(document.createTextNode("Comprar"));
		article.appendChild(articleBuyBtn);

		document.getElementById("contenedor").appendChild(article);
	}
	
	
	function ponArticuloEnCarrito(){
		
	}


	function verCarro(){
	
	}

	function efectuaPedido(){
	
	}

	window.onload=()=>{
		pintaArticulos();
	}


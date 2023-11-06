	criterios=["Sin ordenar","Ascendente por precio", "Descendente por precio"]
	
	function creaListaCriterios(){
		let listaFiltro = document.getElementById("criteriosOrdenacion");
		criterios.forEach(d =>{ let op = document.createElement("option")
									op.text=d;
									op.value=d;
									listaFiltro.appendChild(op)
								})
		listaFiltro.addEventListener("change",pintaArticulos);
	}


	function pintaArticulos(){
		document.getElementById("contenedor").innerHTML="";
		let listaFiltro = document.getElementById("criteriosOrdenacion");
		if(listaFiltro.value == "Sin ordenar"){
			listaArticulos.forEach(articulo => montarArticulo(articulo));
		} else if(listaFiltro.value == "Ascendente por precio"){
			listaArticulos.sort(function(a,b){
				return a - b;
			}).forEach(articulo => montarArticulo(articulo));
		}
		
	}

	function montarArticulo(articulo){
		let article = document.createElement("div");
		article.classList.add("card");

		let articleImg = document.createElement("img");
		articleImg.classList.add("card-img-top");
		articleImg.src = "assets/" + articulo.codigo + ".jpg";
		article.appendChild(articleImg);

		let articleBody = document.createElement("div");
		articleBody.classList.add("card-body");

		let articleTitle = document.createElement("p");
		articleTitle.classList.add("card-title");
		articleTitle.appendChild(document.createTextNode(articulo.nombre));
		articleBody.appendChild(articleTitle);

		let articleCharacteristics = document.createElement("p");
		articleCharacteristics.classList.add("card-text");
		articleCharacteristics.appendChild(document.createTextNode(articulo.descripcion));
		articleBody.appendChild(articleCharacteristics);

		article.appendChild(articleBody);

		let articlePrice = document.createElement("p");
		articlePrice.classList.add("card-text");
		articlePrice.classList.add("text-center");
		articlePrice.appendChild(document.createTextNode(articulo.precio + "€"));
		article.appendChild(articlePrice);

		let articleBuyBtn = document.createElement("button");
		articleBuyBtn.id = articulo.codigo;
		articleBuyBtn.classList.add("btn-success");
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
		creaListaCriterios();
		pintaArticulos();
	}


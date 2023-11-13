	criterios=["Sin ordenar","Ascendente por precio", "Descendente por precio"];

	window.onload=()=>{
		creaListaCriterios();
		let miCarrito = new Carrito();
		pintaArticulos(miCarrito);
		document.getElementById("carrito").addEventListener("click",verCarro);
	}
	
	function creaListaCriterios(){
		let listaFiltro = document.getElementById("criteriosOrdenacion");
		criterios.forEach(d =>{ let op = document.createElement("option")
									op.text=d;
									op.value=d;
									listaFiltro.appendChild(op)
								})
		listaFiltro.addEventListener("change",pintaArticulos);
	}


	function pintaArticulos(miCarrito){
		document.getElementById("contenedor").innerHTML="";
		let listaFiltro = document.getElementById("criteriosOrdenacion");
		if(listaFiltro.value === "Sin ordenar"){
			listaArticulos.forEach(articulo => montarArticulo(articulo,miCarrito));
		} else if(listaFiltro.value === "Ascendente por precio"){
			let listaOrdenada = [...listaArticulos];
			listaOrdenada.sort(function(a,b){
				return a.precio - b.precio;
			});
			listaOrdenada.forEach(articulo => montarArticulo(articulo,miCarrito));
		}else if(listaFiltro.value === "Descendente por precio"){
			let listaOrdenada = [...listaArticulos];
			listaOrdenada.sort(function(a,b){
				return b.precio - a.precio;
			});
			listaOrdenada.forEach(articulo => montarArticulo(articulo,miCarrito));
		}
		
	}

	function montarArticulo(articulo,miCarrito){
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
		articleBuyBtn.addEventListener("click", function (){	ponArticuloEnCarrito(miCarrito,article.codigo);		});
		article.appendChild(articleBuyBtn);

		document.getElementById("contenedor").appendChild(article);
	}
	
	
	function ponArticuloEnCarrito(miCarrito,codigoArticle){
		let article = miCarrito.articulos.find(article => article.codigo == codigoArticle);
		if(article){
			miCarrito.aumentarUnidades(codigoArticle);
		}else{
			miCarrito.anyadeArticulo(article);
		}
	}


	function verCarro(miCarrito){
		document.getElementById("miDialogo").showModal();
	}

	function efectuaPedido(miCarrito){
		miCarrito = new Carrito();
	}

	


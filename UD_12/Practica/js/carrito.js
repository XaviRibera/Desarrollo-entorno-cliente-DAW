class Carrito{

	constructor(id){	
		this.articulos = [];
		this.unidades = new Map();			
	}
						
	anyadeArticulo(articulo){
		this.articulos.push(articulo);
		this.unidades.set(articulo.codigo, 1);
		this.verCarrito();
	}			
				
	borraArticulo(codigo){	

	}
	
	modificaUnidades(codigo,n){	

	}	
			
	verCarrito(){
		
	}			
}

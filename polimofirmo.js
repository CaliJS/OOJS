var padre = {
	metodo: function funcion1 () {
		return this.propiedad;
	},
	propiedad: 'valor'
}

var polimorfismo = Object.create( padre );
polimorfismo.metodo = function funcion2 () {
	console.log( this.propiedad + '!!');
}

polimorfismo.val = 'valor1';
polimorfismo.metodo();
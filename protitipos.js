var prototipo = {
	metodo: function funcion () {
		return this.propiedad;
	}
}

var objeto1 = Object.create( prototipo );
objeto1.propiedad = 'valor1';
objeto1.metodo();

var objeto2 = Object.create( prototipo );
objeto2.propiedad = 'valor2';
objeto2.metodo();
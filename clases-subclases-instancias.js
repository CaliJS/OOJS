var clase = {
	metodo: function funcion1 () {
		console.log( this.propiedad );
	}
}

var instancia1 = Object.create( clase );
instancia1.propiedad = 'valor1';
instancia1.metodo();

var instancia2 = Object.create( clase );
instancia2.propiedad = 'valor2';
instancia2.metodo();

var subClase = Object.create( clase );
subClase.metodo = function funcion2 () {
	return clase.metodo.call(this) + '!!';
}

var instancia3 = Object.create( prototipoPolimorfismo );
instancia3.propiedad = 'valor3';
instancia3.metodo();

var instancia4 = Object.create( prototipoPolimorfismo );
instancia4.propiedad = 'valor4';
instancia4.metodo();
var padre = {
	metodo: function funcion () {
		return this.propiedad;
	},
	propiedad: 'valor'
}

var hijo = Object.create(padre);
hijo.propiedad = 'valor2';

var nieto = Object.create(hijo);

padre.metodo();
hijo.metodo();
nieto.metodo();

});
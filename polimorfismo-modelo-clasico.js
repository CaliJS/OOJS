function ConstructorSuperClase (value) {
	this._val = value;
}

ConstructorSuperClase.prototype.metodo = function funcion1 () {
	return this._val;
}

var instancia1 = new ConstructorSuperClase('valor 1');
console.log( instancia1.metodo() );

var instancia2 = new ConstructorSuperClase('valor 2');
console.log( instancia2.metodo() );

function ConstructorSubClase ( value ) {
	ConstructorSuperClase.call(this, value);
}

ConstructorSubClase.prototype = Object.create( ConstructorSuperClase.prototype );

ConstructorSubClase.prototype.constructor = ConstructorSubClase;

ConstructorSubClase.prototype.metodo = function funcion2() {
	return ConstructorSuperClase.prototype.metodo.call( this ) + '!!';
};

var instancia3 = new ConstructorSubClase('valor 3');
console.log( instancia3.metodo()   );

var instancia4 = new ConstructorSubClase('valor 4');
console.log( instancia4.metodo() );
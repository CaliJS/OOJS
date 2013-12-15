var clase = {
  constructor: function funcion0(value){
    this._val = value;
  },
  metodo: function funcion1 () {
    console.log( this._val );
  }
}

var instancia1 = Object.create( clase );
instancia1.constructor('valor1');
instancia1.metodo();
  
var instancia2 = Object.create( clase );
instancia2.constructor('valor2');
instancia2.metodo();
  
var subClase = Object.create( clase );
subClase.metodo = function funcion2 () {
  return clase.metodo.call(this) + '!!';
}
  
var instancia3 = Object.create( subClase );
instancia3.constructor('valor3');
instancia3.metodo();
  
var instancia4 = Object.create( subClase );
instancia4.constructor('valor4');
instancia4.metodo();
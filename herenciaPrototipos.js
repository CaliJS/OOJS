var person = {
	firstName : 'John',
	lastName : 'Doe'
};

Object.defineProperty(person, 'fullName', {
	get : function() {
		'use strict';

		return this.firstName + ' ' + this.lastName;
	}
});

var employee = Object.create(person, {
	sayHi : {
		value: function() {
			'use strict';
			return this.__proto__.sayHi.call(this) + '. My name is ' + this.fullName;
 		},
		writable : false,
		enumerable : true
	}
});

person.sayHi = function() {
	'use strict';
	return 'Hi there';
};
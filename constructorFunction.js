var Person = function(firstName, lastName) {
	'use strict';

	this.firstName = firstName;
	this.lastName = lastName;
};

Object.defineProperties(Person.prototype, {
	sayHi : {
		value : function () {
			'use strict';

			return 'Hi there';
		},
		enumerable : true
	},
	fullName : {
		get : function() {
			'use strict';

			return this.firstName + ' ' + this.lastName;
		},
		enumerable : true
	}
});

var johnDoe = new Person('John', 'Doe');

console.log(johnDoe.sayHi());
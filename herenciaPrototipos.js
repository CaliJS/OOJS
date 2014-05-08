var Person = function(firstName, lastName) {
	'use strict';

	this.firstName = firstName;
	this.lastName = lastName;
};

Object.defineProperties(Person.prototype, {
	sayHi :{
		value : function() {
			'use strict';

			return 'Hi there.';
		}
	},
	fullName : {
		get : function() {
			'use strict';

			return this.firstName + ' ' + this.lastName;
		},
		enumerable : true
	} 
});

var Employee = function(firstName, lastName, position) {
	'use strict';

	Person.call(this, firstName, lastName);
	this.position = position;
};

Employee.prototype = Object.create(Person.prototype, {
	sayHi :{
		value : function() {
			'use strict';

			return Person.prototype.sayHi.call(this) + ' My name is ' + this.fullName;
		}
	},
	fullName : {
		get : (function() {
			'use strict';
			var desc = Object.getOwnPropertyDescriptor(Person.prototype, 'fullName').get;
			return function () {
				return desc.call(this) + ', ' + this.position;
			};
		}()),
		enumerable : true
	} 
});

var johnDoe = new Employee('John', 'Doe', 'Manager');
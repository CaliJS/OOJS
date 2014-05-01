var createPerson = function(firstName, lastName) {
    'use strict';
    var person = {
        firstName : firstName,
        lastName : lastName,
      sayHello : function() {
        return 'Hi there.';
      }
    };
    
    Object.defineProperty(person, 'fullName', {
        get : function() {
            return this.firstName + ' ' + this.lastName;
        },
        enumerable : true,
        configurable : true
    });
    
    return person;
};

var johnDoe = createPerson('John', 'Doe');

var createEmployee = function(firstName, lastName, position) {
    'use strict';
    var person = createPerson(firstName, lastName);
  
    person.position = position;
  
    var fullName = Object.getOwnPropertyDescriptor(person, 'fullName');
  
    var fullNameFunction = fullName.get.bind(person);
    
    Object.defineProperty(person, 'fullName', {
        get : function() {
            return fullNameFunction() + ', ' + this.position;
        },
        enumerable : true,
        configurable : true
    });
  
    var sayHelloFn = person.sayHello.bind(person);
  
    person.sayHello = function() {
      return sayHelloFn() + ' My name is ' + this.fullName;
    };
  
    return person;
};

var johnDoe = createEmployee('John', 'Doe', 'Manager');

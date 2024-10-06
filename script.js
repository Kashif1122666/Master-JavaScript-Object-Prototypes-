// prototype attached to an array , we seen earler but haven't discuss prototypes with it
// var numbers = [1,2,3];
// console.log(numbers);

// let's create an object
// var person = {
//   name : "ali",
//   age: 28
// }
// console.log(person);

//   Example: for prototype

//   constructor function
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// // Adding a method to the Prototype
// Person.prototype.greet = function() {
//   console.log("Hello , my name is " + this.name + " and I am " +  this.age + " years old ");
// };

// var person1 = new Person("Alice" , 30);
// var person2 = new Person("Bob" , 20);
// person1.greet();
// person2.greet();

// // Adding property to the prototype 
// Person.prototype.salary = 3000;
// console.log(person1.salary);
// console.log(person2.salary);



// Adding methods to Built-In object prototype   
//    Example:

// Array.prototype.first = function() {
//     return this[0];
//   };

//   var numbers = [1,2,3,4]; 
//   console.log(numbers.first());//output: 1);


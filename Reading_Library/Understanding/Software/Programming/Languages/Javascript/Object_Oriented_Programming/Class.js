// There are no classes in JavaScript (prototype).
// - ES6 Classes: constructor
// - Traditional Way: function Vehicle ()
//   - Vehicle.prototype.getDetails
// Everything in Javascript is an object
// It is a prototype based object oriented language,
// which means it doesn't have classes rather
// it defines behaviors using a constructor function
// and then reuse it using the prototype.

class Vehicle { 
  constructor(name, maker, engine) { 
    this.name = name; 
    this.maker =  maker; 
    this.engine = engine; 
  } 
  getDetails(){ 
      return (`The name of the bike is ${this.name}.`) 
  } 
} 

// Traditional Way 
// function Vehicle(name,maker,engine){ 
//   this.name = name, 
//   this.maker = maker, 
//   this.engine = engine 
// }; 

// Vehicle.prototype.getDetails = function(){ 
//   console.log('The name of the bike is '+ this.name); 
// } 
let bike1 = new Vehicle('Hayabusa', 'Suzuki', '1340cc'); 
let bike2 = new Vehicle('Ninja', 'Kawasaki', '998cc'); 
  
console.log(bike1.name);
console.log(bike2.maker);
console.log(bike1.getDetails()); 
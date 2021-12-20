// Everything in Javascript is an object

// Object Literal
let SpecificNinja = {
  first_name : "Bruce",
  last_name : "Lee",

  fullName : function(){
    return `${this.first_name} ${this.last_name} is a Ninja`
  }
}

console.log(SpecificNinja)
console.log(SpecificNinja.fullName())

// Object constructor
function ninja(first_name,last_name) {
  this.first_name = first_name;
  this.last_name = last_name;
}

let ninja1 = new ninja('Tommy','Bahama');
let ninja2 = new ninja('Jackie','Chan');
console.log(`Ninja 1: ${ninja1.first_name} ${ninja1.last_name}`)
console.log(`Ninja 2: ${ninja2.first_name} ${ninja2.last_name}`)

// Object.create()

const developer = {
  isStudying : true,
  printIntroduction : function(){
    console.log(`My name is ${this.name}. Am I studying? ${this.isStudying}`)
  }
}

const thisguy = Object.create(developer);
thisguy.name = 'Ben';
thisguy.printIntroduction();

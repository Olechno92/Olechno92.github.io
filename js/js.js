

//второй метод

function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function(food) {
  console.log(this.name + ' eating ' + food);
};

function Lion(name){
 Animal.call(this, name);
}

Lion.prototype = Object.create(Animal.prototype);
Lion.prototype.run = function(){
  console.log(this.name + ' is running');
}

function Rabbit() {
 Animal.call(this, name);
}

Rabbit.prototype = Object.create(Animal.prototype);
Rabbit.prototype.jump = function(){
  console.log(this.name + ' is jumping');
}

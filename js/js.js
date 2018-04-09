var Animal = {
eat: undefined,
run: undefined,
jump: undefined
};

var animal = {
eat: ('food')
};

animal.__proto__ = Animal;

var lion = {
run: 'running'
};

lion.__proto__ = animal;

var rabbit = {
jump: 'jumping'
};

rabbit.__proto__ = animal;

//второй метод

function Animal() {
this.eat = undefined,
this.run = undefined,
this.jump = undefined
};

var animal = new Animal('first')

animal.eat = 'food'

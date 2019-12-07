var Human = /** @class */ (function () {
    function Human(name) {
        this.name = name;
    }
    Human.prototype.say = function () {
        console.log('Hello', this.name);
    };
    Human.hello = function () {
        console.log('Hello');
    };
    return Human;
}());
var obj = new Human('satoshi');
console.log(obj.say());
console.log(Human.hello());
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.speak = function () {
        console.log(this.name + ' makes anoise.');
    };
    return Animal;
}());
var animal = new Animal('Im Animal');
console.log(animal.speak());

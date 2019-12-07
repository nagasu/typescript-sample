class Human {
  private readonly name: string;

  constructor(name: string) {
    this.name = name;
  }

  say(): void {
    console.log('Hello', this.name);
  }

  static hello(): void {
    console.log('Hello');
  }
}

const obj: Human = new Human('satoshi');
console.log(obj.say());
console.log(Human.hello());

class Animal {
  protected readonly name: string;

  constructor(name: string) {
    this.name = name;
  }

  speak() {
    console.log(this.name + ' makes anoise.');
  }
}

class Dog extends Animal {
  speak() {
    super.speak();
    console.log(this.name + ' makes anoise.');
  }
}

const animal: Animal = new Animal('Im Animal');
console.log(animal.speak());

const dog: Dog = new Dog('Im Dog');
console.log(dog.speak());

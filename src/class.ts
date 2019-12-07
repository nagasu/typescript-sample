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

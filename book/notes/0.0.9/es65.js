class Animal {
    static name = '动物';

    constructor() {
        // ...
    }
}

let animal = new Animal();
console.log(Animal.name); // 动物
console.log(animal.name); // undefined

class Animal {
    static isAnimal(animal) {
        return animal instanceof Animal;
    }
}

let animal = new Animal('动物');
console.log(Animal.isAnimal(animal)); // true
console.log(animal.isAnimal(animal)); // TypeError: animal.isAnimal is not a function

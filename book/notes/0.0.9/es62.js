class Animal {
    constructor(name) {
        this.name = name;
    }
    get newName() {
        return `获取: ${this.name}`;
    }
    set newName(value) {
        this.name = `新的${value}`
    }
}

let animal = new Animal('动物');
animal.newName = '大动物';
console.log(animal.newName);

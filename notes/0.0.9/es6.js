// 实例、构造函数、属性和方法
class Animal {
    constructor(name) {
        this.name = name;
    }
    showName() {
        return `我是${this.name}`
    }
}

let animal = new Animal('动物');
console.log(animal.showName()); // 我是动物


// 继承与多态
class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    showName() {
        return `我是一只${this.name}`
    }
}

let cat = new Cat('猫');
console.log(cat.showName()); // 我是一只猫

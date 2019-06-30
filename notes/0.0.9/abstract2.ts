// 抽象类
abstract class AbstractPerson {
    constructor(public name: string, public age: number, public weight: number) { }

    showName(): string {
        return `我的名字是${this.name}`;
    }

    abstract showAge(): void;
}

// 基类
class Person extends AbstractPerson {
    constructor(name: string, age: number, weight: number) {
        super(name, age, weight);
    }
    showAge(): void {
        console.log(`我的年龄${this.age}`)
    }
    showWeight(): void {
        console.log(`我的体重${this.weight}`)
    }
}


let person1: AbstractPerson;
let person2: AbstractPerson;

person1 = new AbstractPerson('pr', 30, 110);
person2 = new Person('pr', 30, 110);

console.log(person2.showName());
person2.showAge();
person2.showWeight();

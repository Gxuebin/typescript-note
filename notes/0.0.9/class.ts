class Star {
    public name: string = 'pr';
    protected age: number = 18;
    private weight: number = 90;
    readonly gender: string = '女';

    public constructor(name: string, age: number, weight: number, gender: string) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.gender = gender;
    }
}

class ChinaStar extends Star {
    constructor(name: string, age: number, weight: number, gender: string) {
        super(name, age, weight, gender);
    }

    showName(): string {
        return `我是${this.name}`
    }

    showAge(): string {
        return `我实际年龄${this.age}`
    }

    showWeight(): string {
        return `我的体重${this.weight}`
    }

    showGender(): string {
        return `我的性别${this.gender}`
    }
}

let pr = new ChinaStar('pr', 30, 120, '男');
pr.name = '江湖再见';
pr.age = 18;
pr.weight = 100;
pr.gender = '女';

console.log(pr.name);
console.log(pr.age);
console.log(pr.weight);
console.log(pr.gender);

console.log(pr.showName());
console.log(pr.showAge());
console.log(pr.showWeight());
console.log(pr.showGender());

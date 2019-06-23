interface Person8 {
    readonly name: string;
    age?: number | string;
    [propName: string]: any;
}

let pr8: Person8 = {
    name: '胖芮',
    age: 30,
    address: '杭州'
}

pr8.age = 18; // 永远18岁
pr8.name = '胖芮2代'; // 火影看多了


let pr8_1: Person8 = {
    address: '杭州'
}

pr8_1.age = 18;
pr8_1.name = '胖芮3代';

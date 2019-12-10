interface Person6 {
    name: string;
    age?: number;
    [propName: string]: string;
}

let pr6: Person6 = {
    name: '胖芮',
    age: 30,
    address: '杭州'
}

let pr6_1: Person6 = {
    name: '胖芮',
    age: '30',
    address: '杭州'
}

interface Person7 {
    name: string;
    age?: number | string;
    [propName: string]: string | number;
}

let pr7: Person7 = {
    name: '胖芮',
    age: 30,
    address: '杭州'
}

let pr7_1: Person7 = {
    name: '胖芮',
    age: '30',
    address: '杭州'
}

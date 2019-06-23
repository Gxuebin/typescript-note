interface Person5 {
    name: string;
    age?: number;
    [propName: string]: any;
}

let pr5: Person5 = {
    name: '胖芮',
    isMan: true,
    address: '杭州'
}

interface Length {
    length: number;
}

function same6<T extends Length>(arg: T): T {
    console.log(arg.length);
    return arg;
}
console.log(same6(18));
console.log(same6('十八'));
console.log(same6(['pr', '30', 'boy']));

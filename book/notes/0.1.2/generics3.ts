function same3<T>(arg: T): T {
    return '十八';
}
console.log(same3(18));

function same3_1<T>(arg: T): T {
    return arg;
}
console.log(same3_1<number>(18));
console.log(same3_1('十八'));

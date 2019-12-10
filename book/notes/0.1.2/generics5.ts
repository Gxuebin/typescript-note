function same5<T>(arg: T): T {
    console.log(arg.length);
    return arg;
}
console.log(same5(18));
console.log(same5('十八'));

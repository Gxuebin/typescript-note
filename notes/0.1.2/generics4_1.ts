const generics4_1 = <T>(arg: T): T => {
    return arg;
}

let generics4_1_1: <S>(arg: S) => S = generics4_1;

console.log(generics4_1(18)); // 18
console.log(generics4_1_1('十八')); // 十八

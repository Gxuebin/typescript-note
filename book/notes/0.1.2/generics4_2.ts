interface Generics4_2 {
    <S>(arg: S): S;
} 

const generics4_2 = <T>(arg: T): T => {
    return arg;
}

let generics4_2_1: <T>(arg: T) => T = generics4_2;
let generics4_2_2: { <S>(arg: S): S } = generics4_2; // 对象字面量
let generics4_2_3: Generics4_2 = generics4_2; // 泛型接口

console.log(generics4_2(18)); // 18
console.log(generics4_2_2('十八')); // 十八
console.log(generics4_2_2('pr')); // pr

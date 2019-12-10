class Sum <T>{
    zero: T;
    add: (x: T, y: T) => T
}

const sum = new Sum<number>();
sum.zero = 0;
sum.add = (x, y) => (x + y);
console.log(sum.add(5, 6)); // 11

const sum1 = new Sum<string>();
sum1.zero = '0';
sum1.add = (x, y) => (x + y);
console.log(sum1.add('5', '6')); // 56

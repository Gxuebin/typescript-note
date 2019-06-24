// function8.ts
const push = (array: any[], ...rest: any[]) => {
    rest.forEach(r => {
        array.push(r);
    });
}

let arr = [false];
push(arr, '1', 2, 3);

const push1 = (array: any[], ...rest: any[], x: number) => {
    rest.forEach(r => {
        array.push(r);
    });
    rest.push(x);
}

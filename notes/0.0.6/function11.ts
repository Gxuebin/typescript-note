function chongzai2(x: string): string;
function chongzai2(x: number): number;
function chongzai2(x: number | string): number | string {
    if(typeof x === 'string') {
        return `hello, ${x}`;
    } else if (typeof x === 'number') {
        return x * 10;
    }
}

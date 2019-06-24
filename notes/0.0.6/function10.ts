const chongzai = (x: number | string): number | string => {
    if(typeof x === 'string') {
        return `hello, ${x}`;
    } else if (typeof x === 'number') {
        return x * 10;
    }
}

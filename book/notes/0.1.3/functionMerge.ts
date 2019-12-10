function palindrome(x: string): string;
function palindrome(x: number): number;
function palindrome(x: string | number): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}

console.log(palindrome('pr18')); // 81rp

const showMyNameAgain = (firstName: string = 'pr', lastName?: string, ...rest: any[]): string => {
    let tmp: string = '';
    if(rest.length) {
        tmp = rest.join(' ');
    }
    if(lastName) {
        return `${firstName}${lastName}${tmp}`;
    } else {
        return `${firstName}${tmp}`;
    }
}

console.log(showMyNameAgain());
console.log(showMyNameAgain('胖芮','，男', '今年', 30));

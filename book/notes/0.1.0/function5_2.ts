interface Function5_2 {
    (x: string, y: string): boolean
}

let function5_2: Function5_2 = (name: string, firstName: string) => {
    return name.search(firstName) > -1;
}

console.log(function5_2('pr is a  boy', 'pr')); // true

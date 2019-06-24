interface Function5 {
    (x: string, y: string): boolean
}

let function5: Function5 = (x: string, y: string) => {
    return x.search(y) > -1;
}

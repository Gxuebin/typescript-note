const unionGetLength2 = (something: string | number): number => {
    if(something.length){
        return something.length;
    } else {
        return something.toString().length;
    }
}

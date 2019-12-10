const assertionGetLength = (something: string | number): number => {
    if((something as string).length){
        return (something as string).length;
    } else {
        return something.toString().length;
    }
}

// 或
const assertionGetLengthOther = (something: string | number): number => {
    if((<string>something).length){
        return (<string>something).length;
    } else {
        return something.toString().length;
    }
}

const showMyName = (firstName: string, lastName?: string): string => {
    if(lastName) {
        return `${firstName}${lastName}`;
    } else {
        return firstName;
    }
}
console.log(showMyName('pr'));
console.log(showMyName('江湖', '再见'));

const showMyName7 = (firstName?: string, lastName: string): string => {
    if(firstName) {
        return `${firstName}${lastName}`;
    } else {
        return lastName;
    }
}

interface Info {
    (name: string, age: number): string;
    weight: number;
    showWeight(): number;
}

const person = (): Info => {
    const info = <Info>function(name: string, age: number) { }
    info.weight = 33;
    return info;
}

const show = person();

show('pr', 30);


interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    const counter = <Counter>function(start: number) {};
    counter.interval = 1;
    counter.reset = () => {};
    return counter;
}

let c = getCounter();
c(1);
c.interval = 2;
c.reset();

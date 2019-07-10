declare class DeclareClass {
    name: string;
    constructor(name: string);
    showName(): string;
    showName2() {
        return `我是${this.name}`;
    }
}


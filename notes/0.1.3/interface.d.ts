interface Options {
    position?: 'top' | 'bottom';
    data?: any;
}

declare namespace modal {
    function open(title: string, options?: Options): void;
}

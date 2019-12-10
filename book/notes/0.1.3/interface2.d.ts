declare namespace modal {
    interface Options {
        position?: 'top' | 'bottom';
        data?: any;
    }
    function open(title: string, options?: Options): void;
}

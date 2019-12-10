export as namespace umd;
export default umd;
// export = umd;

declare function umd(): string;
declare namespace umd {
    let ns: string;
    function showNs(ns: number): string;
}

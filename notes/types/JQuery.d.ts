// 定义类型命名空间
declare namespace JQuery {
    type Selector = string;
    type TheTypeOrArray <T> = T | T[];
    type htmlString = string;
} 

// 定义接口
interface JQuery<TElement = HTMLElement> extends Iterable<TElement> {
    length: number;
    
    // 重载
    add(select: JQuery.Selector, context: Element): this;
    add(select: JQuery.Selector | JQuery.TheTypeOrArray<Element> | JQuery.htmlString | JQuery): this;

    children(selector?: JQuery.Selector): this;
    css(propertyName: string): string;
    html(): string;
    empty(): this;
    end(): this;
    eq(index: number): this;
}

// 导出
export default JQuery;

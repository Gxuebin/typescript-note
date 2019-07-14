今天写的是串讲。串讲呢，就是把之前的知识串起来捡重点。

**再重复一下**，Typescript 的本质是对静态类型的处理。在实际项目开发中，编写 Typescript 就是定义类型。

# 类型声明文件

```typescript
interface UserModel {
    showName(name: string[] | null): object;
}

class User implements UserModel {
    name: string,
    constructor(name: string){
        this.name = name;
    }
} 
```

这是很一个很普通的类型文件的定义，关于 Typescript 定义静态类型的历史，简要普及下

- [tsd][]（已废弃）
- [typings][]（还是已废弃）
- [DefinitelyTyped][]（中文译名定义类型，Typescript 2.0 重新整理出来的）

这里重点介绍下 DefinitelyTyped

DefinitelyTyped 的工作方式是将**类型声明文件(`xxx.d.ts`)**发布到 npm 社区上（本地开发的编辑器上可以检测到）。

说了这么多，来一段经典的 jQuery 的类型声明文件

```typescript
// types/JQuery.d.ts
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
```

jQuery 的类型声明文件源码没有这么简单，这里做了下简化，以便使用。


# 类型定义

类型声明文件（`*.d.ts`）中，我们编写的就是类型定义了，可以使用 `type`、`class` 和 `interface`。

## type

```typescript
// type.ts
// 基本
type FirstName = string;
// 赋值
type LastName = FirstName;
// 对象
type Developer = {
    name: string;
    age: number;
}
// 方法
type showName = (name: string) => string;
```

## class

```typescript
// class.ts
// 类
class Developer2 {
    name: string;
    age: number;
    showName: (name: string) => string;
}
```

## interface

```typescript
// interface.ts
// 接口
interface Option {
    init(): void;
    get(str: string): object;
}
```

- `type`（或`class`）使用场景是 Typescript 的基本类型不满足需求的时候，通过定义自定义类型来组合新类型；
- `interface` 是对外输出接口，**对外**；


# declare

为 `xxx.d.ts` 创建变量，就是说在顶层上定义。

```typescript
// declare.ts
declare var age: number;
declare function showAge(age: number): void;
declare class DeveloperClass {
    name: string;
}
declare namespace DeveloperNs {
    interface skills {
        code(): void;
    }
}
```

# 组合打包定义

## 动态属性类型
```typescript
// 
{
    "basketball": {
        name: "篮球",
        people: 5
    },
    "footerball": {
        name: "足球"
        people: 11
    }
}
```

分析上面的数据接口，可看出属性名 `basketball` 和 `footerball` 是动态的，因此

```typescript
// dynamicAttributes.ts
interface BallAttr {
    name: string;
    people: number;
}
interface Ball {
    [ball: string]: BallAttr
}
```

## 遍历类型

```typescript
// typeList.ts
type BallSelect = 'basketball' | 'footerball';
interface BallAttr {
    name: string;
    people: number;
}
type Ball2 = {
    [ball in BallSelect]: BallAttr
}
```

# 发布与查找

单纯查看一个包或想查下自己要发的包是否有重名，可到 [TypeSearch][] 寻结果。

说到发布，通常是这两种方式。

## 内置类型声明文件

就是与 npm 包绑定一起，一般存放在根目录的 `types` 下，使用方下载完依赖包后悔自动检测并识别类型声明文件。

## 单独发布到 [@types 社区][]

用于扩展 javascript 库的类型声明文件，其安装方式和 npm 包稍有不同 `npm install @types/xxx --save-dev`。

如果你想让自己写的类型声明文件包发布到 @types 社区，可在 [DefinitelyTyped][] 提交一个 pull request。对于 [@types 社区][]
下的包都是从 [DefinitelyTyped][] 自动发布出去的，这里用到工具 [types-publisher][]。


# 本地类型声明文件风格（常用）

```typescript
types
├── a.d.ts
├── b.d.ts
├── xxx.d.ts
├── index.d.ts # 入口模块
└── z.d.ts
```
子模块不必定义命名空间，外部环境就获取不到（`types` 目录除外）。

```typescript
// a.d.ts
export interface AInterface {
    name: string;
}
// b.d.ts
export interface BInterface {
    name: string;
}
// xxx.d.ts
export interface XXXInterface {
    name: string;
}
// z.d.ts
export interface ZInterface {
    name: string;
}
```

入口文件（定义命名空间和导出子模块）

```typescript
// index.d.ts
import * as AModule from './a';
import * as BModule from './b';
import * as XXXModule from './xxx';
import * as ZModule from './z';

declare namespace Index {
    export type AInterface = AModule.AInterface;
    export type BInterface = BModule.BInterface;
    export type XXXInterface = XXXModule.XXXInterface;
    export type ZInterface = ZModule.ZInterface;
}
```


# 你可以...

[Typescript 声明文件的书写](../advanced/declaration_files_write.md)



[tsd]: https://github.com/DefinitelyTyped/tsd
[typings]: https://github.com/typings/typings
[DefinitelyTyped]:https://github.com/DefinitelyTyped/DefinitelyTyped
[types-publisher]: https://github.com/Microsoft/types-publisher
[@types 社区]: https://www.npmjs.com/~types
[TypeSearch]: https://microsoft.github.io/TypeSearch/

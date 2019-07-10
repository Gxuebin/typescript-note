通常我们使用第三方库，可以

- 在 HTML 中通过 `<script>` 标签引入;
- CMD 或 AMD 方式引入;
- ES6 语法 `import` 引入;

# 看那些年我们用过的 jQuery

看惯了之前的引入方式，那 Typescript 咋用的呢？看下面这个例子

```typescript
// declareVar.ts
declare var $$: (selector: string) => any;
$$('#root');
```
编译后

```javascript
// declareVar.js
$$('#root');
```

可见 `declare var` 只是**定义一个全局变量的类型（不是定义一个全局变量）**，仅在编译时用于检查，不会存在与编译的结果中。



# 声明文件

存放声明语句的文件，叫声明文件，通常格式为 `xxx.d.ts`。还是拿 `jQuery` 举例

1.声明文件 `jQuery.d.ts`（抽离出生命语句）

```typescript
// jQuery.d.ts
declare const jQuery2: (selector: string) => any;
```

2.typescript 文件

```typescript
// declareVar2.ts
jQuery2('#root');
```

3.编译后

```javascript
jQuery2('#root');
```

- `jQuery.d.ts` 文件与 `declareVar2.ts` 同处一个目录；
- `declare const jQuery2` 这是全局变量声明模式；
- 通常，ts 会解析所有 `*.ts` 文件（含 `*.d.ts`）,所以 `declareVar2.ts` 可以获得 `jQuery2` 类型定义；


# 第三方声明文件

既然像 `jQuery.d.ts` 这类很多人都需要的声明文件，社区肯定会做些什么，比如 [DefinitelyTyped jQuery][]。既然社区都写好了，那就不造轮子直接下载咯。关于下载，可将其下载到本地 `@types` 目录下，便于识别与统一管理这类声明文件。

```
npm install @types/jquery
```

```typescript
// declareVar3.ts
const jQuery = require('jquery');
const $ = require('jquery');

jQuery('#root')
$('#root')
```

> 对于社区为哪些第三方库写了声明文件，可在这里查询 [https://microsoft.github.io/TypeSearch/](https://microsoft.github.io/TypeSearch/)


# 书写声明文件

通常，常用的声明文件，社区都帮我们做好了。在此作为笔记分享，还是要了解下当第三方库没有时，自己该如何书写。在动手前，先分析下场景：

## 全局变量

- 最简单直接，通过标签 `<script>` 引入，注入全局变量 `xxx`；
- `npm install @types/xxx --save-dev` 安装，不许任何配置；
- 声明文件 `xxx.d.ts` 存放当前项目中，建议和其他 `*.ts` 都存放在 src 目录下（没有生效，可检查 `tsconfig.json` 中的 `file、include、exclude` 等配置）；
 
|声明语句|含义|举例|
|:-|:-|:-|
|`declare var`、`declare const`、`declare let`|声明 全局变量| declareVar.ts |
|`declare function`|声明 全局方法| declareFunction.ts |
|`declare class`|声明 全局类| declareClass.ts |
|`declare enum`|声明 全局枚举类型| declareEnum.ts |
|`declare namespace`|声明 全局对象| declareNamespace.ts |
|`interface`、`type`|声明 全局类型| declareInterface.ts 和 declareType.ts |

### `declare var`、`declare const`、`declare let`

```typescript
// jQuery2.d.ts
declare const jQuery2: (selector: string) => any;
```

```typescript
// declareVar2.ts
jQuery2('#root');
```

### `declare function`

```typescript
// declareFunction.d.ts
declare function declareFunc(selector: string): any;
```

```typescript
// declareFunction.ts
declareFunc('#root');
```

### `declare class`

```typescript
// declareClass.d.ts
declare class DeclareClass {
    name: string;
    constructor(name: string);
    showName(): string;
    showName2() {
        return `我是${this.name}`;
    }
}
// 0.1.3/declareClass.d.ts:5:17 - error TS1183: An implementation cannot be declared in ambient contexts.
    // 5     showName2() {
```

```typescript
// declareClass.ts
let declareClass = new DeclareClass('class');
```

`declare class` 只定义类型，不具体实现（ 例子中 `showName2` 是具体实现所以报错了）。


### `declare enum`

```typescript
// declareEnum.d.ts
declare enum DeclareEnum {
    man,
    woman
}
```

```typescript
// declareEnum.d.ts
let person = [ DeclareEnum.woman, DeclareEnum.man ];
```

### `declare namespace`

`namespace` 第一次见，是 ts 早期为了解决模块化造的关键字，顾名思义是命名空间的意思。

> 由来：前面说了 ts 用 `namespace` 解决模块化，那模块化单词是 `module`，可后来 ES6 也是用了 `module`，由于 ts 要兼容 ES6，不得已将 `module` 改为 `namespace`。

> 不建议用：ES6 的出现，ts 不建议再用 `namespace` 来解决模块化问题，而是推荐使用 ES6 的模块化方案（ts 还是很包容的，一切为了程序员的便利）。

> 了解其原理：虽然 `namespace` 不建议用了，但 `declare namespace` 还是常用的，表示全局变量的一个对象，所以就有子属性。


```typescript
// declareNamespace.d.ts
declare namespace declareNamespace {
    const name: string;    
    function showName(name: string): void;
    class Gender {
        showGender(gender: string): void;
    }
    enum Direction { up, right, down, left } 
    namespace ns {
        function showNs(name: string): void;
    }
}
```

```typescript
// declareNamespace.ts
declareNamespace.showName('declareNamespace');
declareNamespace.ns.showNs('ns');
```

> 注:在声明对象中可继续嵌入声明对象。

### `interface` 和 `type`

```typescript
// interface.d.ts
interface Options {
    position?: 'TOP' | 'BOTTOM';
    data?: any;
}

declare namespace modal {
    function open(title: string, options?: Options): void;
}
```

```typescript
// interface.ts
let options: Options = {
    position: 'top',
    data: {
        width: 200
    }
}

modal.open('新增', options);
```

上面 `interface` 没什么问题，但是它是暴露在全局类型中的，所以最好存放在 `namespace` 中，可改写为

```typescript
// interface2.d.ts
declare namespace modal {
    interface Options {
        position?: 'top' | 'bottom';
        data?: any;
    }
    function open(title: string, options?: Options): void;
}
```

```typescript
// interface2.ts
let options: modal.Options = {
    position: 'top',
    data: {
        width: 200
    }
}

modal.open('新增', options);
```

## npm 包

通过 `import xxx from 'xxx'` 导入，符合 ES6 模块规范。


## UMD 库

既可以通过全局变量形式，也可以通过 npm 包的 `import` 引入。


[本次代码 Github](https://github.com/ruizhengyun/typescript-note/tree/feature_v0.1.3_20190709/notes/0.1.3)


# 你可以...

[上一篇：TTypescript 泛型](./generics.md)

下一篇：Typescript 声明合并



[DefinitelyTyped jQuery]: https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/jquery/JQuery.d.ts

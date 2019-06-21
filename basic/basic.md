# 基础知识脑补下

在 JavaScript 的类型分为两种：
- 原始数据类型（Primitive data types）
- 对象类型（Object types）

其中，原始数据类型包括：**布尔值、数字、字符串、null、undefined** 以及 ES6 中的新类型 **Symbol**。本章选择性讲前 5 种。

# 布尔值

它是最基础的数据类型，其值是 `true/false`。在 JavaScript 和 TypeScript 里都使用 `boolean` 来定义（其它语言中也一样）。

```typescript
// boolean.ts
let isDone: boolean = false;
```

编译（`tsc boolean.ts`）后

```javascript
// boolean.js
var isDone = false;
```

> 问：使用构造函数 `Boolean` 来创造可以么？比如

```typescript
// boolean2.ts
let isDoneByNewBoolean: boolean = new Boolean(1);
```

编译（编辑器里）前

![](../assets/basic/boolean2-01.png)

编译后

![](../assets/basic/boolean2-01.png)

问题在于 `new Boolean(1)` 返回的是一个对象。

> 再问：直接使用 `Boolean(1)` 怎样？

```typescript
// boolean3.ts
let isDoneByBoolean: boolean = Boolean(1);
```

编译后

```javascript
// boolean3.js
var isDoneByBoolean = Boolean(1);
```

`Boolean(1)` 返回的是个布尔值。


# 数字

和 JavaScript 一样，TypeScript 里的所有数字都是浮点数，类型是 `number`。

```typescript
// number.ts
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010; // ES6 中的二进制表示法
let octalLiteral: number = 0o744;   // ES6 中的八进制表示法
let notANumber: number = NaN;
let infinityNumber: number = Infinity;
```

编译后

```javascript
// number.ts
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binaryLiteral = 10; // ES6 中的二进制表示法
var octalLiteral = 484; // ES6 中的八进制表示法
var notANumber = NaN;
var infinityNumber = Infinity;
```

# 字符串

和 JavaScript 一样，使用 `string` 表示文本数据类型，可以用**双引号（"）或单引号（'）**表示字符串。

```typescript
// string.ts
let str: string = 'Typescript';
let say: string = `Hello, ${str}`;
```

编译后

```javascript
// string.js
var str = 'Typescript';
var say = "Hello, " + str;
```

# null 和 undefined

在 TypeScript 的世界里，`null` 和 `undefined` 可用自身来定义数据类型。不过其用书不大。

```typescript
// null-undefined.ts
let u: undefined = undefined;
let n: null = null;
```

编译后

```javascript
// null-undefined.js
var u = undefined;
var n = null;
```

> 问：那将值 `null` 和 `undefined` 换个位置会怎样呢？

```typescript
// null-undefined2.ts
let u: undefined = null;
let n: null = undefined;
```

编译后

```javascript
// null-undefined2.js
var u = null;
var n = undefined;
```

> 问：那像下面这样呢？

```typescript
// null-undefined3.ts
let nu: number = undefined;
let nn: number = null;

let su: string = undefined;
let sn: string = null;

let bu: boolean = undefined;
let bn: boolean = null;
```

编译后

```javascript
// null-undefined3.js
var nu = undefined;
var nn = null;
var su = undefined;
var sn = null;
var bu = undefined;
var bn = null;
```

从上面 3 个例子，可基本判断，`null` 和 `undefined` 是所有类型的子类型(可以把 `null` 和 `undefined` 赋值给 `number` 等所有类型的变量，也就是赋值没多大意义）。

# You can

[上一篇：Typescript 的成长环境](../introduction/env.md)

[下一篇：Typescript 进阶类型](./advanced.md)

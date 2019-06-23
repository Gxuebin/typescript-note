新的一天，打卡签到。按照在 [Typescript 类型推论] 里的约定，我们将文件 `notes/package.json` 的 `version` 改为 `0.0.5`，然后 `npm run createDir`, 这个时候，`notes` 目录下就会新增文件夹 `0.0.5`，很简单是吧，后面章节，就忽略这些简单操作了，直接奔主题。

数组类型定义方式有多种，可见灵活性很强，一起来看看吧。

# 招式一：类型 + 方括号

熟悉的斐波那契数列（Fibonacci sequence）

```typescript
let fibonacci: number[] = [1, 1, 2, 3, 5, 8];
```

> 问：上面赋值的数组中有多种类型会怎样？

```typescript
let fibonacci: number[] = [1, 1, '2', false, 5, 8];

// array.ts:1:5 - error TS2322: Type '(string | number | boolean)[]' is not assignable to type 'number'.
```

错误 ❌ 原因在于 `'2', false` 是不能分配给纯数字类型，要想兼容得用联合类型（错误提示中已给出）？

```typescript
let fibonacci: (string | number | boolean)[] = [1, 1, '2', 3, 5, 8];
```




数组类型定义方式有多种，可见灵活性很强，一起来看看吧。

前几篇展示错误结果都是通过截图展示，后面会更多地在代码后面以备注形式展示。

# 类型 + 方括号

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




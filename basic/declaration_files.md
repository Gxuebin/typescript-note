# 声明语句

通常我们使用第三方库，可以

- 在 HTML 中通过 `<script>` 标签引入;
- CMD 或 AMD 方式引入;
- ES6 语法 `import` 引入;

铺垫做的差不多了，在 Typescript 中引入就得用 `declare var` 来定义。拿 `jQuery` 来说

```typescript
// declareVar.ts
declare var $: (selector: string) => any;
$('#root');
```
编译后

```javascript
// declareVar.js
$('#root');
```

可见 `declare var` 只是**定义一个全局变量的类型（不是定义一个全局变量）**，仅在编译时用于检查，不会存在与编译的结果中。

# 声明文件

存放声明语句的文件，叫声明文件，通常格式为 `xxx.d.ts`。还是拿 `jQuery` 举例

```typescript
// jQuery.d.ts 这是声明文件
declare const jQuery: (selector: string) => any;
```

```typescript
// declareVar2.ts
jQuery('#root');
```

# 第三方声明文件

很多时候，我们需要的声明文件，社区都帮我们做好了，我们只需要正确引入就好。

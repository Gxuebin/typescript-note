前面章节 [Typescript 对象类型-接口](basic/object_interfaces.md)，主要讲接口对对象属性的类型描述。

本章说道另一作用，可以说当对象遇到接口，给你不一样的精彩。

# 类接口的实现

通常，一个类只继承另一个类。有时，不同类之间有一些共有的特性，把这些特性提取出来可以提高效率，提取出来的就是接口，用关键字 `implements` 标识。

举个例子如下

- 手机是一个类；
- 华为是手机的子类；
- 拍照是华为手机的一个功能（方法）；
- 数码相机也有拍照功能；
- 拍照可以抽取出来作为一个接口，华为手机和数码相机都去实现它；

```typescript
// classInterfaces.ts
// 拍照
interface Photo {
    photo(): string;
}

// 闪光灯
interface Lamp {
    lampOn(): void;
    lampOff(): void;
}

// 手机超类
class Phone {}

// 手机派生类
class HuaweiPhone extends Phone implements Photo, Lamp {
    photo(): string {
        return '华为拍照';
    }
    lampOn() {}
    lampOff(){}
}

// 数码相机
class DigitalCamera implements Photo, Lamp {
    photo(): string {
        console.log('数码拍照')
    }
}

// 0.1.0/classInterfaces.ts:25:7 - error TS2420: Class 'DigitalCamera' incorrectly implements interface 'Lamp'.
    //   Type 'DigitalCamera' is missing the following properties from type 'Lamp': lampOn, lampOff
    // 25 class DigitalCamera implements Photo, Lamp {

// 0.1.0/classInterfaces.ts:26:14 - error TS2355: A function whose declared type is neither 'void' nor 'any' must return a value.
    // 26     photo(): string {
```

上面报错在于

- `DigitalCamera` 实现了接口 `Lamp`，可却没有定义里面的方法；
- 接口 `Phone` 中 `photo` 需要返回 `string`，可是类 `DigitalCamera` 中的 `phone` 没有返回值；

你会发现**一个类可以实现多个接口**。


# 接口继承接口

我们知道类可以继承类，其实接口也可以传承接口。

```typescript
// classInterfaces2.ts
// 闪光灯
interface Lamp {
    lampOn(): void;
    lampOff(): void;
}

// 拍照
interface Photo extends Lamp {
    photo(): string;
}

// 数码相机
class DigitalCamera implements Photo {
    photo(): string {
        return '数码拍照';
    }
    lampOn() {};
    lampOff() {};
}
```

> 注：类 `DigitalCamera` 要记得把方法 `lampOn` 和 `lampOff` 加上。

# 接口继承类

我们看过类实现接口，接口继承接口，那接口能继承类吗？

```typescript
// classInterfaces3.ts
class Xy {
    x: number;
    y: number;
}

interface Xyz extends Xy {
    z: number;
}

let xyz: Xyz = { x: 1, y: 2, z: 3 };
```

# 混合类型

用接口来定义函数需要的属性




var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 抽象类
var AbstractPerson = /** @class */ (function () {
    function AbstractPerson(name, age, weight) {
        this.name = name;
        this.age = age;
        this.weight = weight;
    }
    AbstractPerson.prototype.showName = function () {
        return "\u6211\u7684\u540D\u5B57\u662F" + this.name;
    };
    return AbstractPerson;
}());
// 基类
var Person = /** @class */ (function (_super) {
    __extends(Person, _super);
    function Person(name, age, weight) {
        return _super.call(this, name, age, weight) || this;
    }
    Person.prototype.showAge = function () {
        console.log("\u6211\u7684\u5E74\u9F84" + this.age);
    };
    Person.prototype.showWeight = function () {
        console.log("\u6211\u7684\u4F53\u91CD" + this.weight);
    };
    return Person;
}(AbstractPerson));
var person1;
var person2;
person1 = new AbstractPerson('pr', 30, 110);
person2 = new Person('pr', 30, 110);
console.log(person2.showName());
person2.showAge();
person2.showWeight();

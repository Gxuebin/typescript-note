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
var Star = /** @class */ (function () {
    function Star(name, age, weight, gender) {
        this.name = 'pr';
        this.age = 18;
        this.weight = 90;
        this.gender = '女';
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.gender = gender;
    }
    return Star;
}());
var ChinaStar = /** @class */ (function (_super) {
    __extends(ChinaStar, _super);
    function ChinaStar(name, age, weight, gender) {
        return _super.call(this, name, age, weight, gender) || this;
    }
    ChinaStar.prototype.showName = function () {
        return "\u6211\u662F" + this.name;
    };
    ChinaStar.prototype.showAge = function () {
        return "\u6211\u5B9E\u9645\u5E74\u9F84" + this.age;
    };
    ChinaStar.prototype.showWeight = function () {
        return "\u6211\u7684\u4F53\u91CD" + this.weight;
    };
    ChinaStar.prototype.showGender = function () {
        return "\u6211\u7684\u6027\u522B" + this.gender;
    };
    return ChinaStar;
}(Star));
var pr = new ChinaStar('pr', 30, 120, '男');
pr.name = '江湖再见';
pr.age = 18;
pr.weight = 100;
pr.gender = '女';
console.log(pr.name);
console.log(pr.age);
console.log(pr.weight);
console.log(pr.gender);
console.log(pr.showName());
console.log(pr.showAge());
console.log(pr.showWeight());
console.log(pr.showGender());

var Sum = /** @class */ (function () {
    function Sum() {
    }
    return Sum;
}());
var sum = new Sum();
sum.zero = 0;
sum.add = function (x, y) { return (x + y); };
console.log(sum.add(5, 6)); // 11
var sum1 = new Sum();
sum1.zero = '0';
sum1.add = function (x, y) { return (x + y); };
console.log(sum1.add('5', '6')); // 56

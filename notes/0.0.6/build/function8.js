// function8.ts
var push = function (array) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    rest.forEach(function (r) {
        array.push(r);
    });
};
var arr = [false];
push(arr, '1', 2, 3);
var push1 = function (array, x) {
    rest.forEach(function (r) {
        array.push(r);
    });
    rest.push(x);
};

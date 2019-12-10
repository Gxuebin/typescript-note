var showMyNameAgain = function (firstName, lastName) {
    if (firstName === void 0) { firstName = 'pr'; }
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    var tmp = '';
    if (rest.length) {
        tmp = rest.join(' ');
    }
    if (lastName) {
        return "" + firstName + lastName + tmp;
    }
    else {
        return "" + firstName + tmp;
    }
};
console.log(showMyNameAgain());
console.log(showMyNameAgain('胖芮', '，男', '今年', 30));

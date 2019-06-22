var assertionGetLength = function (something) {
    if (something.length) {
        return something.length;
    }
    else {
        return something.toString().length;
    }
};
// 或
var assertionGetLengthOther = function (something) {
    if (something.length) {
        return something.length;
    }
    else {
        return something.toString().length;
    }
};

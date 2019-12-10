var getName = function (name) {
    if (typeof name === 'string') {
        return name;
    }
    else {
        return name();
    }
};
var showName = function () { return 'pr is a boy'; };
console.log(getName('pr')); // pr
console.log(getName(showName())); // pr is a boy

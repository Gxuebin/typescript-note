var person = function () {
    var info = function (name, age) { };
    info.weight = 33;
    return info;
};
var show = person();
show('pr', 30);

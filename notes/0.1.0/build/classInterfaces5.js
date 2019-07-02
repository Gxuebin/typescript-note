function getCounter() {
    var counter = function (start) { };
    counter.interval = 1;
    counter.reset = function () { };
    return counter;
}
var c = getCounter();
c(1);
c.interval = 2;
c.reset();

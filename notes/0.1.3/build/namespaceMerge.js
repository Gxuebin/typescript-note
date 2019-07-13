var NamespaceMerge;
(function (NamespaceMerge) {
    function one() { }
    NamespaceMerge.one = one;
})(NamespaceMerge || (NamespaceMerge = {}));
(function (NamespaceMerge) {
    function two() { }
    NamespaceMerge.two = two;
})(NamespaceMerge || (NamespaceMerge = {}));
NamespaceMerge.one();

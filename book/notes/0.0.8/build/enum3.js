var Friends3;
(function (Friends3) {
    Friends3[Friends3["\u5F20\u4E09"] = 30] = "\u5F20\u4E09";
    Friends3[Friends3["\u674E\u56DB"] = 18] = "\u674E\u56DB";
    Friends3[Friends3["\u738B\u4E94"] = 19] = "\u738B\u4E94";
})(Friends3 || (Friends3 = {}));
;
console.log(Friends3['张三'] === 30);
console.log(Friends3['李四'] === 18);
console.log(Friends3['王五'] === 19);
var Friends3_1;
(function (Friends3_1) {
    Friends3_1["\u5F20\u4E09"] = "30";
    Friends3_1["\u674E\u56DB"] = "18";
    Friends3_1["\u738B\u4E94"] = "9";
})(Friends3_1 || (Friends3_1 = {}));
;
var Friends3_2;
(function (Friends3_2) {
    Friends3_2["\u5F20\u4E09"] = "30";
    Friends3_2["\u674E\u56DB"] = "18";
    Friends3_2[Friends3_2["\u738B\u4E94"] = 9] = "\u738B\u4E94";
})(Friends3_2 || (Friends3_2 = {}));
;
var Friends3_3;
(function (Friends3_3) {
    Friends3_3["\u5F20\u4E09"] = "30";
    Friends3_3[Friends3_3["\u674E\u56DB"] = void 0] = "\u674E\u56DB";
    Friends3_3[Friends3_3["\u738B\u4E94"] = void 0] = "\u738B\u4E94";
})(Friends3_3 || (Friends3_3 = {}));
;

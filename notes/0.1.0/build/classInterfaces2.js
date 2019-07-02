// 华为手机+
var HuaweiPhone2 = /** @class */ (function () {
    function HuaweiPhone2(wxNumber) {
        this.wxNumber = wxNumber;
    }
    HuaweiPhone2.prototype.photo = function () {
        return '华为手机 mate20 pro 拍照就是酷儿';
    };
    HuaweiPhone2.prototype.lampOn = function () { };
    ;
    HuaweiPhone2.prototype.lampOff = function () { };
    ;
    ;
    HuaweiPhone2.prototype.showWxNumber = function () {
        return "\u6211\u7684\u5FAE\u4FE1\u53F7\uFF1Aliferzy";
    };
    return HuaweiPhone2;
}());
var huaweiPhone = new HuaweiPhone2(13701833766);
console.log(huaweiPhone.showWxNumber()); // 我的微信号：liferzy
console.log(huaweiPhone.photo()); // 华为手机 mate20 pro 拍照就是酷儿

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 手机超类
var Phone = /** @class */ (function () {
    function Phone() {
    }
    return Phone;
}());
// 手机派生类
var HuaweiPhone = /** @class */ (function (_super) {
    __extends(HuaweiPhone, _super);
    function HuaweiPhone() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HuaweiPhone.prototype.photo = function () {
        return '华为拍照';
    };
    HuaweiPhone.prototype.lampOn = function () { };
    HuaweiPhone.prototype.lampOff = function () { };
    return HuaweiPhone;
}(Phone));
// 数码相机
var DigitalCamera = /** @class */ (function () {
    function DigitalCamera() {
    }
    DigitalCamera.prototype.photo = function () {
        console.log('数码拍照');
    };
    return DigitalCamera;
}());

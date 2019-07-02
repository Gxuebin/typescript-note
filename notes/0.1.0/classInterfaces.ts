// 拍照
interface Photo {
    photo(): string;
}

// 闪光灯
interface Lamp {
    lampOn(): void;
    lampOff(): void;
}

// 手机超类
class Phone {}

// 手机派生类
class HuaweiPhone extends Phone implements Photo, Lamp {
    photo(): string {
        return '华为拍照';
    }
    lampOn() {}
    lampOff(){}
}

// 数码相机
class DigitalCamera implements Photo, Lamp {
    photo(): string {
        console.log('数码拍照')
    }
}

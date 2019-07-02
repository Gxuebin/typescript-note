// 闪光灯
interface Lamp {
    lampOn(): void;
    lampOff(): void;
}

// 拍照
interface Photo extends Lamp {
    photo(): string;
}

// 数码相机
class DigitalCamera implements Photo {
    photo(): string {
        return '数码拍照';
    }
    lampOn() {};
    lampOff() {};
}

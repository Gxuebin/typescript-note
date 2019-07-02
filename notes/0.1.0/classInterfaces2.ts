interface Lamp {
    lampOn(): void;
    lampOff(): void;
}

interface wx {
    wxNumber: number;
    showWxNumber(): string;
}

// 拍照
interface Photo extends Lamp, Tel {
    photo(): string;
}

// 华为手机+
class HuaweiPhone2 implements Photo {
    public wxNumber: number;
    photo(): string {
        return '华为手机 mate20 pro 拍照就是酷儿';
    }
    lampOn() {};
    lampOff() {};
    constructor(wxNumber: number) {
        this.wxNumber = wxNumber;
    };

    showWxNumber(){
        return `我的微信号：liferzy`;
    }
}

let huaweiPhone = new HuaweiPhone2(13701833766);
console.log(huaweiPhone.showWxNumber()); // 我的微信号：liferzy
console.log(huaweiPhone.photo()); // 华为手机 mate20 pro 拍照就是酷儿

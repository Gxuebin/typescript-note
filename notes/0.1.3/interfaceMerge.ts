interface Station {
    name: string;
    time: string;
    showName(): string;
}
interface Station {
    name: string;
    time: number;
    showTime(): string;
}

let station: Station = {
    name: '前端工程师',
    time: 18,
    showName: function() {
        return `我是一名${this.name}`;
    },
    showTime: () => {
        return `工作已有${station.time}年了`;
    }
}


console.log(station.showName()); // 我是一名前端工程师
console.log(station.showTime()); // 工作已有8年了

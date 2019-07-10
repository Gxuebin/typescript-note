var station = {
    name: '前端工程师',
    time: 8,
    showName: function () {
        return "\u6211\u662F\u4E00\u540D" + this.name;
    },
    showTime: function () {
        return "\u5DE5\u4F5C\u5DF2\u6709" + station.time + "\u5E74\u4E86";
    }
};
console.log(station.showName()); // 我是一名前端工程师
console.log(station.showTime()); // 工作已有8年了

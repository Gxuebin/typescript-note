// 返回 never 的函数必须存在无法达到的终点
function error(message) {
    throw new Error(message);
}
// 推断的返回值类型为 never
function fail() {
    return error("有错");
}
// 返回 never 的函数必须存在无法达到的终点
function infiniteLoop() {
    while (true) {
        // doSomething
    }
}
function log() {
    console.log('日志');
}
function ok() {
    return '一切正常';
}

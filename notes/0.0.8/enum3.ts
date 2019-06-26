enum Friends3 { 张三 = 30, 李四 = 18, 王五 };
console.log(Friends3['张三'] === 30);
console.log(Friends3['李四'] === 18);
console.log(Friends3['王五'] === 19);

enum Friends3_1 { 张三 = '30', 李四 = '18', 王五 = '9' };
enum Friends3_2 { 张三 = '30', 李四 = '18', 王五 = 9 };
enum Friends3_3 { 张三 = '30', 李四, 王五 };

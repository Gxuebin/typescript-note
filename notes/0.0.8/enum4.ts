enum Friends4 { 张三 = '30', 李四, 王五 };
enum Friends4_1 { 张三 = <any>'30', 李四, 王五 };
enum Friends4_2 { 张三, 李四 = <any>'30', 王五 };
enum Friends4_3 { 张三, 李四 = <any>'30', 王五 = '30' };
enum Friends4_4 { 张三, 李四, 王五 = <any>'30' };
enum Friends4_5 { 张三, 李四 = <any>'30', 王五 = <any>'30' };
enum Friends4_6 { 张三, 李四 = <any>'30', 王五 = 30 };

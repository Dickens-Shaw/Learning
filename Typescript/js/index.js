"use strict";
/*
 * @Description: Typescript
 * @Autor: Xdg
 * @Date: 2020-12-30 18:32:24
 * @LastEditors: Xdg
 * @LastEditTime: 2020-12-30 19:27:32
 * @FilePath: \Daily\Typescript\index.ts
 */
// 基础类型
// Boollean
let isDone = false;
// Number
let count = 1;
// String
let username = "a";
// Array
let list1 = [1, 2, 3];
let list2 = ["1", "2", "3"];
// Enum
// 使用枚举我们可以定义一些带名字的常量。使用枚举可以清晰地表达意图或创建一组有区别的用例。Typescript支持数字的和基于字符串的枚举。
// 数字枚举
var Direction;
(function (Direction) {
    Direction[Direction["NORTH"] = 0] = "NORTH";
    Direction[Direction["SOUTH"] = 1] = "SOUTH";
    Direction[Direction["EAST"] = 2] = "EAST";
    Direction[Direction["WEST"] = 3] = "WEST";
})(Direction || (Direction = {}));
let dir = Direction.SOUTH;
// 字符串枚举
var Direction2;
(function (Direction2) {
    Direction2["NORTH"] = "NORTH";
    Direction2["SOUTH"] = "SOUTH";
    Direction2["EAST"] = "EAST";
    Direction2["WEST"] = "WEST";
})(Direction2 || (Direction2 = {}));
// 异构枚举
var Enum;
(function (Enum) {
    Enum[Enum["A"] = 0] = "A";
    Enum[Enum["B"] = 1] = "B";
    Enum["C"] = "C";
    Enum["D"] = "D";
    Enum[Enum["E"] = 8] = "E";
    Enum[Enum["F"] = 9] = "F";
})(Enum || (Enum = {}));
console.log(Enum[0]);
console.log(Enum.A);
// Any
// 在TypeScript中，任何的类型都可以被归为any类型。这让any类型成了类型系统的顶级类型（也被称作全局超级类型）。
let notSure = 666;
notSure = "666";
notSure = true;
/*
  any类型本质上是类型系统的一个逃逸舱。作为开发者，这给我们很大的自由：TypeScript允许我们对any类型的值执行任何操作，而无需事先执行任何形式的检查。比如：
*/
let value;
value.foo.bar;
value.trim();
value();
new value();
value[0][1];
// Unkonwn
// 所有类型都可以赋值给unkown。unkown也是一种顶级类型
let value2;
value2 = true;
value2 = 42;
value2 = "2";
value2 = [];
value2 = {};
value2 = null;
value2 = undefined;
value2 = new TypeError();
value2 = Symbol("type");

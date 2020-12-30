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
let isDone: boolean = false;

// Number
let count: number = 1;

// String
let username: string = "a";

// Array
let list1: number[] = [1, 2, 3];
let list2: Array<string> = ["1", "2", "3"];

// Enum
// 使用枚举我们可以定义一些带名字的常量。使用枚举可以清晰地表达意图或创建一组有区别的用例。Typescript支持数字的和基于字符串的枚举。

// 数字枚举
enum Direction {
  NORTH,
  SOUTH,
  EAST,
  WEST,
}
let dir: Direction = Direction.SOUTH;

// 字符串枚举
enum Direction2 {
  NORTH = "NORTH",
  SOUTH = "SOUTH",
  EAST = "EAST",
  WEST = "WEST",
}

// 异构枚举
enum Enum {
  A,
  B,
  C = "C",
  D = "D",
  E = 8,
  F,
}
console.log(Enum[0]);
console.log(Enum.A);

// Any
// 在TypeScript中，任何的类型都可以被归为any类型。这让any类型成了类型系统的顶级类型（也被称作全局超级类型）。
let notSure: any = 666;
notSure = "666";
notSure = true;
/* 
  any类型本质上是类型系统的一个逃逸舱。作为开发者，这给我们很大的自由：TypeScript允许我们对any类型的值执行任何操作，而无需事先执行任何形式的检查。比如：
*/
let value: any;
value.foo.bar;
value.trim();
value();
new value();
value[0][1];

// Unkonwn
// 所有类型都可以赋值给unkown。unkown也是一种顶级类型
let value2: unknown;

value2 = true;
value2 = 42;
value2 = "2";
value2 = [];
value2 = {};
value2 = null;
value2 = undefined;
value2 = new TypeError();
value2 = Symbol("type");

/*
 * @Description: Typescript
 * @Autor: Xdg
 * @Date: 2020-12-30 18:32:24
 * @LastEditors: Xdg
 * @LastEditTime: 2020-12-31 16:57:35
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
//any类型本质上是类型系统的一个逃逸舱。作为开发者，这给我们很大的自由：TypeScript允许我们对any类型的值执行任何操作，而无需事先执行任何形式的检查。比如：

let value: any;
value.foo.bar;
value.trim();
value();
new value();
value[0][1];

// Unkonwn
// 所有类型都可以赋值给unknown。unknown也是一种顶级类型
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

// unknown类型只能被赋值给any类型和unknown类型本身。

let value3: unknown;

let value11: unknown = value3;
let value22: any = value3;
// let value33: boolean = value3; // Error
// let value44: number = value3; // Error
// let value55: string = value3; // Error
// let value66: object = value3; // Error
// let value77: any[] = value3; // Error
// let value88: Function = value3; // Error

// value3.foo.bar; // Error
// value3.trim(); // Error
// value3(); // Error
// new value3(); // Error
// value3[0][1]; // Error

// 将value变量类型设置为unknown后，这些操作都不在被认为是类型正确的。通过将any类型改变为unknow类型，我们已将允许所有更改的默认设置，更改为禁止任何更改。

// Tuple
// 数组一般由同种类型的值组成，但有时我们需要在单个变量中存储不同类型的值，只时候我们就可以使用元组。在JavaScrip中是没有元组的，元组是TypeScript中特有的类型，其工作方式类似于数组。
// 元组可用于定义具有有限数量的未命名属性的类型。每个属性都有一个相关联的类型。使用元组时，必须提供每个属性的值。
let tupleTupe: [string, boolean];
tupleTupe = ["a", false];

// Void
// 某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。当一个函数没有任何返回值时，你通常会见到其返回值类型是void
// 声明函数返回值是void
function warnUser(): void {
  console.log("That is mi warning message");
}

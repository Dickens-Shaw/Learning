/*
 * @Description: TypeScript
 * @Autor: Xdg
 * @Date: 2020-12-30 18:32:24
 * @LastEditors: Xdg
 * @LastEditTime: 2021-01-05 19:28:32
 * @FilePath: \Daily\TS\index.ts
 */

// 二、基础类型
// 2.1 Boollean
let isDone: boolean = false;

// 2.2 Number
let count: number = 1;

// 2.3 String
let username: string = "a";

// 2.4 Array
let list1: number[] = [1, 2, 3];
let list2: Array<string> = ["1", "2", "3"];

// 2.5 Enum
// 使用枚举我们可以定义一些带名字的常量。使用枚举可以清晰地表达意图或创建一组有区别的用例。TypeScript支持数字的和基于字符串的枚举。

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

// 2.6 Any
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

// 2.7 Unkonwn
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

// 2.8 Tuple
// 数组一般由同种类型的值组成，但有时我们需要在单个变量中存储不同类型的值，只时候我们就可以使用元组。在JavaScrip中是没有元组的，元组是TypeScript中特有的类型，其工作方式类似于数组。
// 元组可用于定义具有有限数量的未命名属性的类型。每个属性都有一个相关联的类型。使用元组时，必须提供每个属性的值。
let tupleTupe: [string, boolean];
tupleTupe = ["a", false];

// 2.9 Void
// 某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。当一个函数没有任何返回值时，你通常会见到其返回值类型是void
// 声明函数返回值是void
function warnUser(): void {
  console.log("That is mi warning message");
}
// 需要注意的是，声明一个void类型的变量没有什么作用，因为它的值只能为undifined或null
let unusable: void = undefined;

// 2.10 Null和Undefined
// TypeScript里，undefined和null两者有各自的类型分别为undefined和null
let u: undefined = undefined;
let n: null = null;
// 默认情况下null和undefined是所有类型的子类型。就是说你可以把null和undefined赋值给number类型的变量。
// 然而，如果你指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自的类型。

// 2.11 Never
// never类型表示的是那些永远不存在的值的类型。例如，never类型是那些总会抛出异常或者根本就不会有返回值的函数表达式或箭头函数式的返回值类型。
function error(message: string): never {
  throw new Error(message);
}
function infiniteLoop(): never {
  while (true) {}
}
// 在TypeScript中，可以利用never类型的特性来实现全面性检查：使用 never 避免出现新增了联合类型没有对应的实现，目的就是写出类型绝对安全的代码。

// 三、断言
// 3.1尖括号语法
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

// 3.2 as语法
let strLength2: number = (someValue as string).length;

// 四、类型守卫
// A tpye guard is some experssion that performs a untime check that guarantees the type in some scope.
// 类型保护是可执行运行时检查的一种表达式，用于确保该类型在一定的范围内。换句话说，类型保护可以保证一个字符串是一个字符串，尽管它的值也可以是一个数值。
// 类型保护与特性检测并不是完全不同，其主要思想是尝试检测属性、方法或原型，以确定如何处理值。目前主要有四种的方式来实现类型保护：
// 4.1 in 关键字
interface Admin {
  name: string;
  privileges: string[];
}
interface Employee {
  name: string;
  startDate: Date;
}
type UnknownEmployee = Employee | Admin;
function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name:" + emp.name);
  if ("privileges" in emp) {
    console.log("Privileges:" + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Start Date:" + emp.startDate);
  }
}

// 4.2 typeof 关键字
function padLeft(value: string, padding: string | number) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  }
  throw new Error(`Expected string or number, got '${padding}'`);
}
// typeof类型保护只支持两种形式： typeof v === typename 和 typeof v !== typename, typename必须是 number, string, boolean或symbol。但是TypeScript并不会阻止你与其它字符串比较，语言不会把那些表达式识别为类型保护。

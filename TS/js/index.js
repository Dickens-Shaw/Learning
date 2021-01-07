"use strict";
/*
 * @Description: TypeScript
 * @Autor: Xdg
 * @Date: 2020-12-30 18:32:24
 * @LastEditors: Xdg
 * @LastEditTime: 2021-01-07 18:01:39
 * @FilePath: \Daily\TS\index.ts
 */
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var _name;
// 二、基础类型
// 2.1 Boollean
let isDone = false;
// 2.2 Number
let count = 1;
// 2.3 String
let username = "a";
// 2.4 Array
let list1 = [1, 2, 3];
let list2 = ["1", "2", "3"];
// 2.5 Enum
// 使用枚举我们可以定义一些带名字的常量。使用枚举可以清晰地表达意图或创建一组有区别的用例。TypeScript支持数字的和基于字符串的枚举。
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
// 2.6 Any
// 在TypeScript中，任何的类型都可以被归为any类型。这让any类型成了类型系统的顶级类型（也被称作全局超级类型）。
let notSure = 666;
notSure = "666";
notSure = true;
//any类型本质上是类型系统的一个逃逸舱。作为开发者，这给我们很大的自由：TypeScript允许我们对any类型的值执行任何操作，而无需事先执行任何形式的检查。比如：
let value;
value.foo.bar;
value.trim();
value();
new value();
value[0][1];
// 2.7 Unkonwn
// 所有类型都可以赋值给unknown。unknown也是一种顶级类型
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
// unknown类型只能被赋值给any类型和unknown类型本身。
let value3;
let value11 = value3;
let value22 = value3;
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
let tupleTupe;
tupleTupe = ["a", false];
// 2.9 Void
// 某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。当一个函数没有任何返回值时，你通常会见到其返回值类型是void
// 声明函数返回值是void
function warnUser() {
    console.log("That is mi warning message");
}
// 需要注意的是，声明一个void类型的变量没有什么作用，因为它的值只能为undifined或null
let unusable = undefined;
// 2.10 Null和Undefined
// TypeScript里，undefined和null两者有各自的类型分别为undefined和null
let u = undefined;
let n = null;
// 默认情况下null和undefined是所有类型的子类型。就是说你可以把null和undefined赋值给number类型的变量。
// 然而，如果你指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自的类型。
// 2.11 Never
// never类型表示的是那些永远不存在的值的类型。例如，never类型是那些总会抛出异常或者根本就不会有返回值的函数表达式或箭头函数式的返回值类型。
function error(message) {
    throw new Error(message);
}
function infiniteLoop() {
    while (true) { }
}
// 在TypeScript中，可以利用never类型的特性来实现全面性检查：使用 never 避免出现新增了联合类型没有对应的实现，目的就是写出类型绝对安全的代码。
// 2.12 Symbol
const sym = Symbol();
let obj = {
    [sym]: "Shaw",
};
console.log(obj[sym]);
const proto = {};
Object.create(proto); // OK
Object.create(null); // OK
// Object.create(undefined); // Error
// Object.create(1337);      // Error
// Object.create(true);      // Error
// Object.create("oops");    // Error
// 2.Object类型
//
// 三、断言
// 3.1 类型断言
// 1.尖括号语法
let someValue = "this is a string";
let strLength = someValue.length;
// 2.as语法
let strLength2 = someValue.length;
// 3.2 非空断言
// 在上下文中当类型检查器无法断定类型时，一个新的后缀表达式操作符！可以用于断言操作对象是非null和非undefined类型。
// 具体而言，x!将从x值域中排出null和undefined。
// 1.忽略undefined和null类型
function myFunc(maybeSring) {
    const onlyString = maybeSring;
}
function myFunc2(numGenerator) {
    const num = numGenerator();
}
// 因为！非空断言操作符会从编译生成的JavaScript代码中移除，所以在实际使用过程中，要特别注意。比如：
const aa = undefined;
const bb = aa;
console.log(bb);
// 3.3 确定赋值断言
// 在2.7版本中引入了确定赋值断言，即允许在实例属性和变量声明后面放置一个！号，从而告诉TypeScript该属性会被明确地赋值。
let xx;
initialize();
console.log(2 * xx); // Ok
function initialize() {
    x = 10;
}
function printEmployeeInformation(emp) {
    console.log("Name:" + emp.name);
    if ("privileges" in emp) {
        console.log("Privileges:" + emp.privileges);
    }
    if ("startDate" in emp) {
        console.log("Start Date:" + emp.startDate);
    }
}
// 4.2 typeof 关键字
function padLeft(value, padding) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'`);
}
class SpaceRepeatingPadder {
    constructor(numSpaces) {
        this.numSpaces = numSpaces;
    }
    getPaddingString() {
        return Array(this.numSpaces + 1).join(" ");
    }
}
class StringPadder {
    constructor(value) {
        this.value = value;
    }
    getPaddingString() {
        return this.value;
    }
}
let padder = new SpaceRepeatingPadder(6);
if (padder instanceof SpaceRepeatingPadder) {
    // padder的类型收窄为'SpaceRepeatingPadder'
}
// 4.4 自定义类型保护的类型谓词
function isNumber(x) {
    return typeof x === "number";
}
function isStrin(x) {
    return typeof x === "string";
}
// 五、联合类型和类型别名
// 5.1 联合类型
// 联合类型通常与null和undefined一起使用
const sayHello = (name) => {
    /* ... */
};
// 例如这里name的类型是string|undefined意味着可以将string或undefined的值传递给sayHello函数
sayHello("Shaw");
sayHello(undefined);
// 5.2 可辨识联合
// TypeScript可辨识联合（Discriminated Unions）类型，也成为代数数据类型或标签联合类型。它包含3个要点：可辨识、联合类型和类型守卫。
// 这种类型的本质是结合类型和字面量类型的一种保护方法。如果一个类型是多个类型的联合类型，且多个类型含有一个公共属性，那么就可以利用这个公共属性，来创建不同的类型保护区块。
// 1.可辨识
var CarTransmission;
(function (CarTransmission) {
    CarTransmission[CarTransmission["Automatic"] = 200] = "Automatic";
    CarTransmission[CarTransmission["Manual"] = 300] = "Manual";
})(CarTransmission || (CarTransmission = {}));
// 3.类型守卫
// 下面我们定义一个evaluatePrice方法，根据车辆的类型、容量和评估因子来计算价格：
const EVALUATION_FACTOR = Math.PI;
// function evaluatePrice(vehicle: Vehicle): number {
//   return vehicle.capacity * EVALUATION_FACTOR;
// }
const myTruck = {
    vType: "truck",
    capacity: 9.5,
};
evaluatePrice(myTruck);
// 在Motorcycle接口中，并不存在capacity属性，
function evaluatePrice(vehicle) {
    switch (vehicle.vType) {
        case "car":
            return vehicle.transmission * EVALUATION_FACTOR;
        case "truck":
            return vehicle.capacity * EVALUATION_FACTOR;
        case "motorcycle":
            return vehicle.make * EVALUATION_FACTOR;
    }
}
let greet = (message) => {
    // ...
};
const staff = {
    id: "qweqe",
    age: 33,
    companyId: "ASD",
};
console.dir(staff);
// 在上面示例中，首先为IPerson和IWorker类型定义了不同的成员，然后通过&运算符定义了IStaff交叉类型，所以该类型同时拥有IPerson和IWorker这两种类型的成员
// 七、函数
// 7.1 TS函数和JS函数区别
/*
    TypeScript	JavaScript
      含有类型	无类型
      箭头函数	箭头函数（ES2015）
      函数类型	无函数类型
必填和可选参数	所有参数都是可选的
      默认参数	默认参数
      剩余参数	剩余参数
      函数重载	无函数重载
*/
// 7.2 箭头函数
// 7.3 参数类型和返回类型
function createUserId(name = "小明", id, age) {
    return name + id;
}
// 7.4 函数类型
let IdGenerator;
IdGenerator = createUserId;
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
// 在以上代码中，我们为add函数提供了多个函数定义类型，从而实现函数的重载。之后，可恶的错误消息又消失了，因为这时result变量的类型是string类型。
// 在TypeScript中除了可以重载普通函数之外，我们还可以重载类中的成员方法。
// 方法重载是指在同一个类中的方法同名，参数不同（类型、个数、顺序），调用时根据实参的形式，选择与它匹配的方法执行操作的一种技术。
// 所以类中成员方法满足重载的条件是：同一个类中，方法名相同且参数列表不同。、
class Calculator {
    add(a, b) {
        if (typeof a === "string" || typeof b === "string") {
            return a.toString() + b.toString();
        }
        return a + b;
    }
}
const calculator = new Calculator();
const result = calculator.add("Shaw", " Kakuqo");
// 这里需要注意的是，当 TypeScript 编译器处理函数重载时，它会查找重载列表，尝试使用第一个重载定义。 如果匹配的话就使用这个。 因此，在定义重载的时候，一定要把最精确的定义放在最前面。另外在 Calculator 类中，add(a: Combinable, b: Combinable){ } 并不是重载列表的一部分，因此对于 add 成员方法来说，我们只定义了四个重载方法。
// 八、数组
// 8.1 数组解构
let x;
let y;
let z;
let five_array = [0, 1, 2, 3, 4];
[x, y, z] = five_array;
// 8.2 数组展开运算符
let two_array = [0, 1];
let five_array2 = [...two_array, 2, 3, 4];
// 8.3 数组遍历
let colors = ["red", "green", "blue"];
for (let i of colors) {
    console.log(i);
}
// 九、对象
// 9.1 对象解构
let person = {
    name2: "Shaw",
    gender: "Male",
};
let { name2, gender } = person;
// 9.2 对象展开运算符
let person2 = {
    name3: "Shaw",
    gender: "Male",
    address: "Xiamen",
};
// 组装对象
let personWithAge = Object.assign(Object.assign({}, person), { age: 33 });
// 获取除了某些项外的其它项
let { name3 } = person2, rest = __rest(person2, ["name3"]);
let Shaw = {
    name: "Shaw",
    age: 33,
};
// 只读属性用于限制只能在对象刚刚创建的时候修改其值。此外TypeScript还提供了ReadonlyArray<T>类型，它与Array<T>相似，只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改。
let a = [1, 2, 3, 4];
let ro = a;
// ro[0] = 12; // error!
// ro.push(5); // error!
// ro.length = 100; // error!
// a = ro; // error!
// 十一、类
// 11.1 类的属性与方法
// 在面向对象语言中，类是一种面向对象计算机编程语言的构造，是创建对象的蓝图，描述了所创建的对象共同的属性和方法。
// 在TypeScript中，通过Class关键字定义类
class Greeter {
    // 构造函数-执行初始化操作
    constructor(message) {
        this.greeting = message;
    }
    // 静态方法
    static getClassName() {
        return "Class name isGreeter";
    }
    // 成员方法
    greet() {
        return "Hello," + this.greeting;
    }
}
// 静态属性
Greeter.cname = "Greeter";
let greeter = new Greeter("world");
// 11.2 访问器
// 通过getter和setter方法来实现数据的封装和有效性校验，防止出现异常数据。
let passcode = "Hello TypeScript";
class Employee {
    get fullName() {
        return this._fullName;
    }
    set fullName(newName) {
        if (passcode && passcode == "Hello TypeScript") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}
let employee = new Employee();
employee.fullName = "Shaw";
if (employee.fullName) {
    console.log(employee.fullName);
}
// 11.3 类的继承
// 继承（Inheritance）是一种联结类与类的层次模型。指的是一个类（称为子类、子接口）继承另外一个类（称为父类、父接口）的功能，并可以增加它自己的新功能的能力，继承是类与类或者接口或接口之间最常见的关系。
// 继承是一种is-a关系，在TypeScript中，通过extends关键字来实现继承
class Animal {
    constructor(theName) {
        this.name = theName;
    }
    move(distanceInMetters = 0) {
        console.log(`${this.name} moved ${distanceInMetters}m.`);
    }
}
class Snake extends Animal {
    constructor(name) {
        super(name);
    }
    move(distanceInMetters = 5) {
        console.log("Slithering...");
        super.move(distanceInMetters);
    }
}
let sam = new Snake("Sammy the Python");
sam.move();
// 11.4 ECMAScript私有字段
class Person2 {
    constructor(name) {
        _name.set(this, void 0);
        __classPrivateFieldSet(this, _name, name);
    }
    greet() {
        console.log(`Hello,my name is ${__classPrivateFieldGet(this, _name)}`);
    }
}
_name = new WeakMap();
let Shaw2 = new Person2("Shaw");
// 11.5 抽象类
// 使用abstract关键字声明的类，我们称之为抽象类。抽象类不能被实例化，因为它里面包含了一个或多个抽象方法。所谓抽象方法，是指不包含具体实现的方法：
class Person3 {
    constructor(name) {
        this.name = name;
    }
}
// const lolo = new Person2('lolo'); // Cannot create an instance of an abstract class.(2511)
// 抽象类不能被直接实例化，我们只能实例化实现了所有抽象方法的子类。
class Developer extends Person3 {
    constructor(name) {
        super(name);
    }
    say(words) {
        console.log(`${this.name} says ${words}`);
    }
}
const lolo = new Developer("lolo");
lolo.say("I love ts!"); // lolo says I love ts!
// 十二、泛型
// 设计泛型的关键目的是在成员之间提供有意义的约束，这些成员可以是：类的实例成员、类的方法、函数参数和函数返回值。
// 泛型（Generics）是允许同一个函数接受不同类型参数的一种模板。相比于使用any，使用泛型来创建可复用的组件要更好，因为泛型会保留参数。
// 12.1 泛型语法
// 对于刚接触TypeScript泛型的读者涞水，首次看到<T>语法会感到陌生。其实它并没有什么特别，就像传递参数一样，我们传递了我们想要用于特定函数调用的类型。
function identity(value) {
    return value;
}
// 当我们调用  identity<Number>(1) ，Number 类型就像参数 1 一样，它将在出现 T 的任何位置填充该类型。图中 <T> 内部的 T 被称为类型变量，它是我们希望传递给 identity 函数的类型占位符，同时它被分配给 value 参数用来代替它的类型：此时 T 充当的是类型，而不是特定的 Number 类型。
// 其中 T 代表 Type，在定义泛型时通常用作第一个类型变量名称。但实际上 T 可以用任何有效名称代替。
// 除了 T 之外，以下是常见泛型变量代表的意思：
/*  K（Key）：表示对象中的键类型；
    V（Value）：表示对象中的值类型；
    E（Element）：表示元素类型。
*/
// 其实并不是只能定义一个类型变量，我们可以引入希望定义的任何数量的类型变量。
// 比如我们引入一个新的变量U，用于拓展identity函数：
function identity2(value, message) {
    console.log(message);
    return value;
}
console.log(identity2(68, "Shaw"));
// 除了为类型变量显式设定值之外，一种更常见的做法是使编译器自动选择这些类型，从而使代码更简洁。我们可以完全省略尖括号。
console.log(identity2(68, "Shaw"));
// 12.3 泛型类
class GenericNumber {
}
let myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
};
const sem = { name: "Shaw", age: 33 };
function toArray(x) {
    return [x];
}
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
// loggingIdentity(3); // Error, number doesn't have a .length property
loggingIdentity({ length: 3 });
// 6. Partial

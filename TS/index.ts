/*
 * @Description: TypeScript
 * @Autor: Xdg
 * @Date: 2020-12-30 18:32:24
 * @LastEditors: Xdg
 * @LastEditTime: 2021-01-08 16:55:24
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

// 2.12 Symbol
const sym = Symbol();
let obj = {
  [sym]: "Shaw",
};
console.log(obj[sym]);

// 2.13 object, Object和 {}
// 1.object 类型
// object 类型是：TypeScript 2.2 引入的新类型，它用于表示非原始类型。
interface ObjectConstructor {
  create(o: object | null): any;
  // ...
}
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
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

// 2.as语法
let strLength2: number = (someValue as string).length;

// 3.2 非空断言
// 在上下文中当类型检查器无法断定类型时，一个新的后缀表达式操作符！可以用于断言操作对象是非null和非undefined类型。
// 具体而言，x!将从x值域中排出null和undefined。
// 1.忽略undefined和null类型
function myFunc(maybeSring: string | null | undefined) {
  const onlyString: string = maybeSring!;
}

// 2.调用函数式忽略undefined类型
type NumGenerator = () => number;
function myFunc2(numGenerator: NumGenerator | undefined) {
  const num = numGenerator!();
}
// 因为！非空断言操作符会从编译生成的JavaScript代码中移除，所以在实际使用过程中，要特别注意。比如：
const aa: number | undefined = undefined;
const bb: number = aa!;
console.log(bb);

// 3.3 确定赋值断言
// 在2.7版本中引入了确定赋值断言，即允许在实例属性和变量声明后面放置一个！号，从而告诉TypeScript该属性会被明确地赋值。
let xx!: number;
initialize();
console.log(2 * xx); // Ok
function initialize() {
  x = 10;
}

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

// 4.3 instanceof 关键字
interface Padder {
  getPaddingString(): string;
}
class SpaceRepeatingPadder implements Padder {
  constructor(private numSpaces: number) {}
  getPaddingString() {
    return Array(this.numSpaces + 1).join(" ");
  }
}
class StringPadder implements Padder {
  constructor(private value: string) {}
  getPaddingString() {
    return this.value;
  }
}
let padder: Padder = new SpaceRepeatingPadder(6);
if (padder instanceof SpaceRepeatingPadder) {
  // padder的类型收窄为'SpaceRepeatingPadder'
}

// 4.4 自定义类型保护的类型谓词
function isNumber(x: any): x is number {
  return typeof x === "number";
}

function isStrin(x: any): x is string {
  return typeof x === "string";
}

// 五、联合类型和类型别名
// 5.1 联合类型
// 联合类型通常与null和undefined一起使用
const sayHello = (name: string | undefined) => {
  /* ... */
};
// 例如这里name的类型是string|undefined意味着可以将string或undefined的值传递给sayHello函数
sayHello("Shaw");
sayHello(undefined);

// 5.2 可辨识联合
// TypeScript可辨识联合（Discriminated Unions）类型，也成为代数数据类型或标签联合类型。它包含3个要点：可辨识、联合类型和类型守卫。
// 这种类型的本质是结合类型和字面量类型的一种保护方法。如果一个类型是多个类型的联合类型，且多个类型含有一个公共属性，那么就可以利用这个公共属性，来创建不同的类型保护区块。
// 1.可辨识
enum CarTransmission {
  Automatic = 200,
  Manual = 300,
}
interface Motorcycle {
  vType: "motorcycle";
  make: number;
}
interface Car {
  vType: "car";
  transmission: CarTransmission;
}
interface Truck {
  vType: "truck";
  capacity: number;
}
// 在上述代码中，我们分别定义了Motorcycle\Car和Truck三个接口，在这些接口中都含一个vType属性，该属性被称为可辨识的属性，而其它的属性只跟特性的接口相关。

// 2.联合类型
// 基于前面定义的三个接口，我们可以创建一个Vehicle联合类型：
type Vehicle = Motorcycle | Car | Truck;

// 3.类型守卫
// 下面我们定义一个evaluatePrice方法，根据车辆的类型、容量和评估因子来计算价格：
const EVALUATION_FACTOR = Math.PI;
// function evaluatePrice(vehicle: Vehicle): number {
//   return vehicle.capacity * EVALUATION_FACTOR;
// }
const myTruck: Truck = {
  vType: "truck",
  capacity: 9.5,
};
evaluatePrice(myTruck);
// 在Motorcycle接口中，并不存在capacity属性，
function evaluatePrice(vehicle: Vehicle) {
  switch (vehicle.vType) {
    case "car":
      return vehicle.transmission * EVALUATION_FACTOR;
    case "truck":
      return vehicle.capacity * EVALUATION_FACTOR;
    case "motorcycle":
      return vehicle.make * EVALUATION_FACTOR;
  }
}
// 使用switch和case运算符实现类型首位，确保在evaluatePrice方法中，可以安全访问vehicle对象中的所包含的属性，来正确的计算车辆类型所对应的价格

// 5.3 类型别名
// 类型别名用来给一个类型起个新名字
type Message = string | string[];
let greet = (message: Message) => {
  // ...
};

// 六、交叉类型
// TypeScript交叉类型是将多个类型合并为一个类型。这让我们可以把现有的多种类型叠加到一起成为一种类型，它包含了所需的所有类型的特性。
interface IPerson {
  id: string;
  age: number;
}
interface IWorker {
  companyId: string;
}
type IStaff = IPerson & IWorker;
const staff: IStaff = {
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
function createUserId(name: string = "小明", id: number, age?: number): string {
  return name + id;
}

// 7.4 函数类型
let IdGenerator: (chars: string, nums: number) => string;
IdGenerator = createUserId;

// 7.5 可选参数及默认参数（见7.3）
// 可选参数要放在普通参数的后面，不然会导致编译错误

// 7.6 剩余参数
// function push(array, ...items) {
//   items.forEach(function (item) {
//     array.push(item);
//   });
// }

// 7.7 函数重载
// 函数重载或方法重载是使用相同名称和不同参数数量或类型创建多个方法的一种能力。要解决前面遇到的问题，方法就是为同一个函数提供多个函数类型定义来进行函数重载，编译器会根据这个列表去处理函数的调用。
type Combinable = number | string;
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable): Combinable {
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
  add(a: number, b: number): number;
  add(a: string, b: string): string;
  add(a: string, b: number): string;
  add(a: number, b: string): string;
  add(a: Combinable, b: Combinable) {
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
let x: number;
let y: number;
let z: number;
let five_array = [0, 1, 2, 3, 4];
[x, y, z] = five_array;

// 8.2 数组展开运算符
let two_array = [0, 1];
let five_array2 = [...two_array, 2, 3, 4];

// 8.3 数组遍历
let colors: string[] = ["red", "green", "blue"];
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
let personWithAge = { ...person, age: 33 };
// 获取除了某些项外的其它项
let { name3, ...rest } = person2;

// 十、接口
// 在面向对象语言中，借口是一个很重要的概念，它是对行为的抽象，而具体如何行动需要类去实现。
// TypeScript中的接口是一个非常灵活的概念，除了可以用于对类的一部分行为进行抽象以外，也常用于对对象的形状（Shape）进行描述。
// 10.1 对象的形状
interface Person {
  name: string;
  age: number;
}
let Shaw: Person = {
  name: "Shaw",
  age: 33,
};

// 10.2 可选|只读属性
interface Person2 {
  readonly name: string;
  age?: number;
}

// 只读属性用于限制只能在对象刚刚创建的时候修改其值。此外TypeScript还提供了ReadonlyArray<T>类型，它与Array<T>相似，只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改。
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
// ro[0] = 12; // error!
// ro.push(5); // error!
// ro.length = 100; // error!
// a = ro; // error!

// 十一、类
// 11.1 类的属性与方法
// 在面向对象语言中，类是一种面向对象计算机编程语言的构造，是创建对象的蓝图，描述了所创建的对象共同的属性和方法。
// 在TypeScript中，通过Class关键字定义类
class Greeter {
  // 静态属性
  static cname: string = "Greeter";
  // 成员属性
  greeting: string;
  // 构造函数-执行初始化操作
  constructor(message: string) {
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
let greeter = new Greeter("world");

// 11.2 访问器
// 通过getter和setter方法来实现数据的封装和有效性校验，防止出现异常数据。
let passcode = "Hello TypeScript";
class Employee {
  private _fullName!: string;
  get fullName(): string {
    return this._fullName;
  }
  set fullName(newName: string) {
    if (passcode && passcode == "Hello TypeScript") {
      this._fullName = newName;
    } else {
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
  name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  move(distanceInMetters: number = 0) {
    console.log(`${this.name} moved ${distanceInMetters}m.`);
  }
}

class Snake extends Animal {
  constructor(name: string) {
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
  #name: string;
  constructor(name: string) {
    this.#name = name;
  }
  greet() {
    console.log(`Hello,my name is ${this.#name}`);
  }
}
let Shaw2 = new Person2("Shaw");

// 11.5 抽象类
// 使用abstract关键字声明的类，我们称之为抽象类。抽象类不能被实例化，因为它里面包含了一个或多个抽象方法。所谓抽象方法，是指不包含具体实现的方法：
abstract class Person3 {
  constructor(public name: string) {}
  // 抽象方法
  abstract say(words: string): void;
}
// const lolo = new Person2('lolo'); // Cannot create an instance of an abstract class.(2511)
// 抽象类不能被直接实例化，我们只能实例化实现了所有抽象方法的子类。
class Developer extends Person3 {
  constructor(name: string) {
    super(name);
  }

  say(words: string): void {
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
function identity<T>(value: T): T {
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
function identity2<T, U>(value: T, message: U): T {
  console.log(message);
  return value;
}
console.log(identity2<number, string>(68, "Shaw"));
// 除了为类型变量显式设定值之外，一种更常见的做法是使编译器自动选择这些类型，从而使代码更简洁。我们可以完全省略尖括号。
console.log(identity2(68, "Shaw"));

// 12.2 泛型接口
interface GenericIdentityFn<T> {
  (arg: T): T;
}

// 12.3 泛型类
class GenericNumber<T> {
  zeroValue!: T;
  add!: (x: T, y: T) => T;
}
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};

// 12.4 泛型工具类
// 1.typeof
// 用来获取一个变量声明或对象的类型
interface Person {
  name: string;
  age: number;
}
const sem: Person = { name: "Shaw", age: 33 };
type Sem = typeof sem; // -> Person
function toArray(x: number): Array<number> {
  return [x];
}
type Func = typeof toArray; // -> (x: number) => number[]

// 2.keyof
// 用于获取某种类型的所有键，其返回类型是联合类型
interface Person4 {
  name: string;
  age: number;
}
type K1 = keyof Person4; // "name" | "age"
type K2 = keyof Person4[]; // "length" | "toString" | "pop" | "push" | "concat" | "join"
type K3 = keyof { [x: string]: Person4 }; // string | number
// 在 TypeScript 中支持两种索引签名，数字索引和字符串索引：
interface StringArray {
  // 字符串索引 -> keyof StringArray => string | number
  [index: string]: string;
}

interface StringArray1 {
  // 数字索引 -> keyof StringArray1 => number
  [index: number]: string;
}
// 为了同时支持两种索引类型，就得要求数字索引的返回值必须是字符串索引返回值的子类。其中的原因就是当使用数值索引时，JavaScript 在执行索引操作时，会先把数值索引先转换为字符串索引。所以 keyof { [x: string]: Person } 的结果会返回 string | number。

// 3.in
// 用来遍历枚举类型
type Keys = "a" | "b" | "c";
type Obj = {
  [p in Keys]: any;
};

// 4.infer
// 在条件类型语句中，可以用infer声明一个类型变量并且对它进行使用
type ReturnType2<T> = T extends (...args: any[]) => infer R ? R : any;
// infer R 就是声明一个变量来承载传入函数签名的返回值类型，简单说就是用它取到函数返回值的类型方便之后使用

// 5.extends
// 有时候我们定义的泛型不想过于灵活或者说想继承某些类等，可以通过extends关键字添加泛型约束
interface Lengthwise {
  length: number;
}
function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}
// loggingIdentity(3); // Error, number doesn't have a .length property
loggingIdentity({ length: 3 });

// 6. Partial
// Partial<T>的作用就是将某个类型里面的属性全部变为可选性?。
// 定义
/**
 * node_modules/typescript/lib/lib.es5.d.ts
 * Make all properties in T optional
 */
type Partital2<T> = {
  [P in keyof T]?: T[P];
};
// 在以上代码中，首先通过keyof T拿到T的所有属性名，然后使用in进行遍历，将值赋给P，最后通过T[P]取得相应的属性值。
// 中间的?号，用于将所有属性变为可选。
interface Todo {
  title: string;
  description: string;
}
function updateTodo(todo: Todo, filedsToUpdate: Partital2<Todo>) {
  return { ...todo, ...filedsToUpdate };
}
const todo1 = {
  title: "Learn TS",
  description: "Learn TypeScript",
};
const todo2 = updateTodo(todo1, {
  description: "Learn TypeScript Enum",
});
// 在上面updateTodo方法中，我们利用Partial<T>工具类型，定义filesToUpadate的类型为Partial<Todo>,即：
type Partital3 = {
  title?: string | undefined;
  description?: string | undefined;
};

// 十三、装饰器
// 13.1 定义
/* 
  是一个表达式
  该表达式被执行后，返回一个函数
  函数的入参分别为target、name和descriptor
  执行该函数后，可能返回descriptor对象，用于配置target对象
*/

// 13.2 分类
/* 
  类装饰器 Class decorators
  属性装饰器 Property decorators
  方法装饰器 Method decorators
  参数装饰器 Parameter decorators
*/
// 需要注意的是，若要启用实验性的装饰器特性，必须在命令行或tsconfig.json里面启用experimentalDecorators编译器选项
// 命令行
// tsc --target ES5 --experimentalDecorators

// tsconfig.json：
/* {
  "compilerOptions": {
     "target": "ES5",
     "experimentalDecorators": true
   }
} */

// 13.3 类装饰器
declare type ClassDecorator2 = <TFunction extends Function>(
  target: TFunction
) => TFunction | void;
// 类装饰器顾名思义，就是用来装饰类的。它接收一个参数：
// target: TFunctuin- 被装饰的类
function Greeter2(greeting: string) {
  return function (target: Function): void {
    target.prototype.greet = function (): void {
      console.log(greeting);
    };
  };
}
@Greeter2("Hello TS!")
class Greeting {
  constructor() {
    // 内部实现
  }
}
let myGreeting = new Greeting();
(myGreeting as any).greet(); // console output: 'Hello Semlinker!';

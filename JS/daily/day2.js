// Day2
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

/* 
  A: 0 1 2 和 0 1 2
  B: 0 1 2 和 3 3 3
  C: 3 3 3 和 0 1 2
*/

/* 
  C:
  由于 JavaScript 的事件循环，setTimeout 回调会在遍历结束后才执行。因为在第一个遍历中遍历 i 是通过 var 关键字声明的，所以这个值是全局作用域下的。
  在遍历过程中，我们通过一元操作符 ++ 来每次递增 i 的值。当 setTimeout 回调执行的时候，i 的值等于 3
  在第二个遍历中，遍历 i 是通过 let 关键字声明的：通过 let 和 const 关键字声明的变量是拥有块级作用域（指的是任何在 {} 中的内容）。
  在每次的遍历过程中，i 都有一个新值，并且每个值都在循环内的作用域中
*/

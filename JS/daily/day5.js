const bird = {
  size: "small",
};

const mouse = {
  name: "Mickey",
  small: true,
};
/* 
  A: mouse.bird.size是无效的
  B: mouse[bird.size]是无效的
  C: mouse[bird["size"]]是无效的
  D: 以上三个选项都是有效的
*/

/* 
  A:
  在 JavaScript 中，所有对象的 keys 都是字符串（除非对象是 Symbol）。尽管我们可能不会定义它们为字符串，但它们在底层总会被转换为字符串。
  当我们使用括号语法时（[]），JavaScript 会解释（或者 unboxes）语句。它首先看到第一个开始括号 [ 并继续前进直到找到结束括号 ]。只有这样，它才会计算语句的值
  mouse[bird.size]：首先计算 bird.size，这会得到 small。mouse["small"] 返回 true。
  然后使用点语法的话，上面这一切都不会发生。mouse 没有 bird 这个 key，这也就意味着 mouse.bird 是 undefined。
  然后当我们使用点语法 mouse.bird.size 时，因为 mouse.bird 是 undefined，这也就变成了 undefined.size。
  这个行为是无效的，并且会抛出一个错误类似 Cannot read property "size" of undefined。
*/

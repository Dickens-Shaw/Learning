import React from "./react";
import React2 from "react";
// import ReactDOM from "react-dom";
// JSX其实是一种特殊语法  在webpack打包或者babel编译的时候会编译成js

let style = { border: "3px solid red", margin: "5px" };
console.log(React, React2);
let element = (
  <div id="A1" style={style}>
    <div id="B1" style={style}>
      <div id="C1" style={style}>
        C1
      </div>
      <div id="C2" style={style}>
        C2
      </div>
    </div>
    <div id="B2" style={style}>
      B2
    </div>
  </div>
);
// React.createElement(type,props,...children)
// 虚拟DOM就是一个JS对象，以JS对象的方式描述DOM

console.log(element);

// ReactDOM.render(element, document.getElementById("root"));

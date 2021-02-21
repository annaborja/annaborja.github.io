import caribou from "caribou-ui";

import "./style.css";

function component() {
  const element = document.createElement("div");

  element.innerHTML = "Hello, world!";

  return element;
}

document.body.appendChild(component());

caribou.printMsg();

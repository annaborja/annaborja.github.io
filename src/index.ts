import "./style.css";

function component() {
  const element = document.createElement("div");

  element.innerHTML = "Hello, TypeScript world!";

  return element;
}

document.body.appendChild(component());

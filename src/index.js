import print from "./print";

function component() {
  const element = document.createElement("div");
  element.innerHTML = "hello word, threejs";
  return element;
}

document.body.appendChild(component());
print();

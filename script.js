let container = document.createElement("div");
container.setAttribute("id", "container");
document.body.appendChild(container);
container.style.cssText = "display: flex; flex-wrap: wrap; width: 180px; height: 160px; justify-content: center; align-items: center;";

// 16 x 16 grid
for (i = 0; i < 256; i++) {
  let div = document.createElement("div");
  div.setAttribute("class", "grid");
  div.style.cssText =
  "border: 1px solid black; margin-left: -1px; margin-top: -1px; width: 10px; height: 10px;";
  div.addEventListener('mouseover', () => {
    div.style.backgroundColor = 'black';
  });
  container.appendChild(div);
}



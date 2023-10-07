let gridBtn = document.createElement('button');
gridBtn.setAttribute('id', 'gridBtn');
gridBtn.textContent = 'Generate';
document.body.appendChild(gridBtn);


let container = document.createElement("div");
container.setAttribute("id", "container");
document.body.appendChild(container);
container.style.cssText = "display: flex; flex-wrap: wrap; width: 180px; justify-content: center; align-items: center;";


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

gridBtn.addEventListener('click', () => {
    let size = prompt('Size');
    let existingContainer = document.getElementById('container');
    
    if (existingContainer) {
        document.body.removeChild(existingContainer);
    }
    createGrid(size);
});

function createGrid(size) {
    let container = document.createElement('div');
    container.setAttribute("id", "container");
    document.body.appendChild(container);
    container.style.cssText = "display: flex; flex-wrap: wrap; justify-content: center; align-items: center;";
    container.style.width = size * 10 + 20 + 'px';

    for (i = 0; i < size*size; i++) {
        let div = document.createElement("div");
        div.setAttribute("class", "grid");
        div.style.cssText =
        "border: 1px solid black; margin-left: -1px; margin-top: -1px; width: 10px; height: 10px;";
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'black';
        });
        container.appendChild(div);
    }
}
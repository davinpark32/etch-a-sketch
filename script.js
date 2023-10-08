let gridBtn = document.createElement('button');
gridBtn.setAttribute('id', 'gridBtn');
gridBtn.textContent = 'Generate';
document.body.appendChild(gridBtn);


let container = document.createElement("div");
container.setAttribute("id", "container");
document.body.appendChild(container);
container.style.cssText = "display: flex; flex-wrap: wrap; width: 180px; justify-content: center; align-items: center;";

console.log(randomColor());

gridBtn.addEventListener('click', () => {
    let size = prompt('Size');
    if (size <= 100) {
        let existingContainer = document.getElementById('testContainer');
        if (existingContainer) {
            document.body.removeChild(existingContainer);
        }
        createGrid(size);
    } else {
        alert('Size has to be less than 100')
    }
});

function randomColor() {
    return '#'+Math.floor(Math.random()*16777215).toString(16);
}

function createGrid(size) {
    let gridSize = 960 /size + 'px'
    const myContainer = document.createElement('div');
    myContainer.setAttribute('id', 'testContainer');
    myContainer.style.cssText = 'padding: 0px; margin: 0px; display: flex; justify-content: center; height: 960px; width: 960px; flex-wrap: wrap; border: 1px solid black'
    document.body.appendChild(myContainer);
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let div = document.createElement('div');
            div.setAttribute('class', 'newGrid');
            div.style.cssText='border: 1px solid red; flex-shrink: 1; margin-left: -1px; margin-top: -1px; margin-right: -1px; margin-bottom: -1px';
            div.style.width = gridSize;
            div.style.height = gridSize;
            div.addEventListener('mouseover', () => {
            div.style.backgroundColor = randomColor()});
            myContainer.appendChild(div);
        }
    }
}


const myContainer = document.createElement('div');
myContainer.setAttribute('id', 'testContainer');
myContainer.style.cssText = 'padding: 0px; margin: 0px; display: flex; justify-content: center; height: 960px; width: 960px; flex-wrap: wrap; border: 1px solid black'
document.body.appendChild(myContainer);
for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        let div = document.createElement('div');
        div.setAttribute('class', 'newGrid');
        div.style.cssText='border: 1px solid red; flex-shrink: 1; margin-left: -1px; margin-top: -1px; margin-right: -1px; margin-bottom: -1px';
        div.style.width = '240px';
        div.style.height = '240px';
        div.addEventListener('mouseover', () => {
        div.style.backgroundColor = 'black'});
        myContainer.appendChild(div);
    }
}
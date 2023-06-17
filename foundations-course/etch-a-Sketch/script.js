const gridContainer = document.querySelector(".grid-container");
let size = 16;
const button = document.querySelector("button");

function createGrid (cellNum){
    for(let i=0; i<size; i++){
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.textContent = i;
        appendCell(cell);
    }
}

function appendCell(child){
    gridContainer.appendChild(child);
}

function changeClass(e){
    if(e.target.className == "column"){
        e.target.setAttribute("class","hover");
    }     
}

createGrid(size);
document.addEventListener("mouseover",changeClass);

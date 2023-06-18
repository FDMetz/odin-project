const gridContainer = document.querySelector("div");
let side = 16;

function createElement(elementName,className) {
    const newElemnt = document.createElement(elementName);
    newElemnt.className = className;
    return newElemnt;
}

function appendElement(parent,child) {
    parent.appendChild(child);
}

function createGrid(cellNum) {
    for( let r=0; r<cellNum; r++){
        const row = createElement("div","row");
        appendElement (gridContainer,row);
        for( let c=0; c<cellNum; c++){
            const col = createElement("div","column");
            appendElement (row,col);
        }
    }
}

createGrid(side);
const columns = document.querySelectorAll(".column");
columns.forEach(addEvent);

function transform(column){
    column.target.classList.add("hover");
}

function addEvent(column){
    column.addEventListener("mouseover",transform);
}
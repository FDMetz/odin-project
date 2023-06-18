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
    }
}

createGrid(side);
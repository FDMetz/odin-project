const gridContainer = document.querySelector(".grid-container");
let side = 16;
const resizeButton = document.querySelector("#rButton");
const cleanButton = document.querySelector("#cButton");

function createElement(elementName,className){
    const newElemnt = document.createElement(elementName);
    newElemnt.className = className;
    return newElemnt;
}

function appendElement(parent,child){
    parent.appendChild(child);
}

function createGrid(cellNum){
    for( let r=0; r<cellNum; r++){
        const row = createElement("div","row");
        appendElement (gridContainer,row);
        for( let c=0; c<cellNum; c++){
            const col = createElement("div","column");
            appendElement (row,col);
        }
    }
}

function transform(column){
    column.target.classList.add("hover");
}

function addEvent(column){
    column.addEventListener("mouseover",transform);
}

function resize(){
    do{
        side = prompt("Enter side of new grid (max 100)",16);
    }while( side>100 || side<1)
    removeGrid();
    createGrid(side);
    columns = document.querySelectorAll(".column");
    columns.forEach(addEvent);
}

function removeGrid(){
    let child = document.getElementsByClassName("row");
    while( child.item(0) ){
        gridContainer.removeChild(child.item(0));
    }
}

function clean(){
    for( let i=0; i<side*side; i++){
        //if(columns.item(i).className === "column hover")
            columns.item(i).classList.remove("hover");
    }
}

createGrid(side);
resizeButton.addEventListener("click",resize);
let columns = document.querySelectorAll(".column");
columns.forEach(addEvent);
cleanButton.addEventListener("click",clean);
const gridContainer = document.querySelector(".grid-container");
let side = 4;
const button = document.querySelector("button");

function createGrid (side){
    for(let r=0; r<side; i++){
        const row = document.createAttribute("div");

        row.className = "row";
        appendCell(row,gridContainer);
        for(let c=0; c<side; i++){
            const cell = document.createElement("div");
            
            cell.className = "cell";
            cell.textContent = r+c;
            appendCell(cell,row);
        }
    }
}

function append(child,parent){
    parent.appendChild(child);
}

function changeClass(e){
    if(e.target.className == "column"){
        e.target.setAttribute("class","hover");
    }     
}

createGrid(side);
document.addEventListener("mouseover",changeClass);

const gridContainer = document.querySelector(".grid-container");
let side = 4;
const button = document.querySelector("button");

function createGrid (side){
    for(let r=0; r<side; r++){
        const row = document.createElement("div");

        row.className = "row";
        append(row,gridContainer);
        for(let c=0; c<side; c++){
            const cell = document.createElement("div");
            
            cell.className = "column";
            cell.textContent = c+r;
            append(cell,row);
        }
    }
}

function append(child,parent){
    parent.appendChild(child);
}

createGrid(side);
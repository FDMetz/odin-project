const gridContainer = document.querySelector(".grid-container");
const rows = [];
const columns = [];

function createRows (rowNum){
    for(let n=0; n<rowNum; n++){
        rows[n] = document.createElement("div");
        rows[n].setAttribute("class","row");
    }
}

function appendRows (rowNum){
    for(let n=0; n<rowNum; n++){
        gridContainer.appendChild(rows[n]);
    }
}

function createColumns (rowNum,colmNum){
    for(let r=0; r<rowNum; r++){
        columns.push([]);
        for(let c=0; c<colmNum; c++){
            columns[r][c] = document.createElement ("div");
            columns[r][c].setAttribute ("class","column");
        }
    }
}

function appendColumns (rowNum,colmNum){
    for(let r=0; r<rowNum; r++){
        for(let c=0; c<colmNum; c++){
            rows[r].appendChild(columns[r][c]);
        }
    }
}

function changeClass(e){
    if(e.target.className == "column"){
        e.target.setAttribute("class","hover");
    }
        
}

createRows(16);
appendRows(16);
createColumns(16,16);
appendColumns(16,16);

document.addEventListener("mouseover",changeClass);
const gridContainer = document.querySelector("div");
let side = 16;

function createRow() {
    const row = document.createElement("div");
    row.className = "row";
    return row;
}

function appendRow(parent,child) {
    parent.appendChild(child);
}
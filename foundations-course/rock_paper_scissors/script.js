const choice = ["Rock","Paper","Scissors"];

function getComputerChoice(){
    return choice[Math.floor(Math.random()*3)];
}

//console.log(getComputerChoice());
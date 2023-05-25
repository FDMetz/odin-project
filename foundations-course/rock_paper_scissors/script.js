const choice = ["rock","paper","scissors"];
let playerChoice = null;

function getComputerChoice(){
    return choice[Math.floor(Math.random()*3)];
}

function getPlayerChoice(){
    while ( playerChoice==null ){
        playerChoice = prompt("Choice: rock, paper or scissors.");
        if (playerChoice.toLowerCase()!=choice[0] && playerChoice.toLowerCase()!=choice[1] && playerChoice.toLowerCase()!=choice[0]){
            playerChoice=null;
            alert("invalid option");
        }
    }
}

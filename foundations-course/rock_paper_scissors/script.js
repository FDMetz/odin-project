const choice = ["rock","paper","scissors"];
let playerChoice = null;

function getComputerChoice(){
    return choice[Math.floor(Math.random()*3)];
}

function getPlayerChoice(){
    while ( playerChoice==null ){
        playerChoice = prompt("Choice: rock, paper or scissors.").toLowerCase();
        
        if (playerChoice!=choice[0] && playerChoice!=choice[1] && playerChoice!=choice[2]){
            playerChoice=null;
            alert("invalid option");
        }
    }
}

function playRound(playerChoice,computerChoice){
    if( playerChoice==computerChoice ){
        alert("Tie!");
    }else {
        if ( playerChoice == choice[0] && computerChoice == choice[1] || 
            playerChoice == choice[2] && computerChoice == choice[0] || 
            playerChoice == choice[1] && computerChoice == choice[2]){
            alert(`You lose! ${computerChoice} beats ${playerChoice}`);
        }else{
            alert(`You win! ${playerChoice} beats ${computerChoice}`);
        }
    }
}


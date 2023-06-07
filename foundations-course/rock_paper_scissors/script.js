const choice = ["rock","paper","scissors"];
let playerChoice = null;
let ps = 0; //player score
let cs = 0; //computer score
const rock = document.querySelector("#rock");
const papper = document.querySelector("#papper");
const scissors = document.querySelector("#scissors");
let playSco = document.querySelector("#playSco");

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
            cs++;
        }else{
            alert(`You win! ${playerChoice} beats ${computerChoice}`);
            ps++;
        }
    }
}

/*function game(){
    let rounds = 0;

    while(rounds<5){
        getPlayerChoice();
        playRound(playerChoice,getComputerChoice());
        rounds++;
        playerChoice=null;
    }

    alert(`Score\nPlayer: ${ps}\tComputer: ${cs}`);
    
    if( ps==cs ){
        alert("Tie");
    }else { if (ps<cs){
            alert("You lose");
        }else {
            alert("You win");
        }
    }
}*/

function pressButton(e){
    playRound(e.target.id,getComputerChoice());
    console.log(ps);
}

rock.addEventListener("click",pressButton);
papper.addEventListener("click",pressButton);
scissors.addEventListener("click",pressButton);

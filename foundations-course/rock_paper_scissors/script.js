const choice = ["rock","papper","scissors"];
let ps = 0; //player score
let cs = 0; //computer score
let playSco = document.querySelector("#playSco");
let compSco = document.querySelector("#compSco");
const result = document.querySelector ("#result");
const resetButton = document.createElement ("button");
const body = document.querySelector ("body");

function getComputerChoice(){
    return choice[Math.floor(Math.random()*3)];
}

function playRound(playerChoice,computerChoice){
    if( playerChoice==computerChoice ){
        result.textContent = `${playerChoice} and ${computerChoice}, tie!`;
    }else {
        if ( playerChoice == choice[0] && computerChoice == choice[1] || 
            playerChoice == choice[2] && computerChoice == choice[0] || 
            playerChoice == choice[1] && computerChoice == choice[2])
            {
            compSco.textContent = ++cs;
            result.textContent = `${playerChoice} lose to ${computerChoice}`;
        }else{
            playSco.textContent = ++ps;
            result.textContent = `${playerChoice} beats ${computerChoice}`;
        }  
    }
}

function endGame(playerScore,computerScore){
    if( playerScore>computerScore )
        result.textContent = "¡You Win!";
    else
        result.textContent = "¡You Lose!";
}

function pressButton(e){
    if( e.target.className=="option" && ps<5 && cs<5 )
            playRound(e.target.id,getComputerChoice());
    if( ps==5 || cs==5 ){
        endGame(ps,cs);

        resetButton.textContent = "Play again";
        resetButton.style.marginTop = "30px";
        body.appendChild(resetButton);
        resetButton.addEventListener("click",playAgain);
    }
}

function playAgain(){
    compSco.textContent=0;
    playSco.textContent=0;
    ps=0;
    cs=0;
    result.textContent="";
    body.removeChild(resetButton);
}

window.addEventListener("click",pressButton);
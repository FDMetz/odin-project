function add(termOne,termTwo){
    return termOne+termTwo;
};

function subtract(termOne,termTwo){
    return termOne-termTwo;
};

function multiply(factorOne,factorTwo){
    return termOne*factorTwo;
}

function divide(dividend,divisor){
    if(divisor==0)
        return "You can't divide by cero";
    return dividend/divisor;
}

let termOne;
let operation;
let termTwo;

function operate(numbOne,op,numbTwo){
    let result;
    switch(op){
        case "+": 
            result = add(numbOne,numbTwo);
            break;
        case "-": 
            result = subtract(numbOne,numbTwo);
            break;
        case "*": 
            result = multiply(numbOne,numbTwo);
            break;
        case "/": 
            result = divide(numbOne,numbTwo);
            break;
        default: 
            break;
    }
    return result;
}

let input = [];

let visibleChars = document.querySelectorAll("#visible");
visibleChars.forEach((button)=>button.addEventListener("click",getCharacter));

function getCharacter(button){
    input.push(button.target.innerText);
};
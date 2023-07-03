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
let operator;
let termTwo;
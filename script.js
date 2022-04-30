function add(a,b){
   return a + b;
}

function subtract(a,b){
  return a - b;
}

function multiply(a,b){
  return a * b;
}

function divide(a,b){
  return a / b;
}

function power(a,b){
 return Math.pow(a,b);
}

function neg(a){
  return a * -1;
}

function operate (op,a,b){
    if (op === '+'){
      return add(a,b);
    }
    else if (op === '-'){
      return subtract(a,b);
    }
    else if (op === '*'){
      return multiply(a,b);
    }
    else if (op === '/'){
      return divide(a,b);
    }
    else if (op === '^'){
      return power(a,b);
    }
    else if (op === '+/-'){
      return neg(a);
    }    
}

let display = document.querySelector('.display');
let numbers = document.querySelectorAll('.number-button');
const numberDisplay = '';
let numberValue;
let counter = 0;


numbers.forEach((button) => {
  button.onclick = () => {
    numberValue = numberDisplay.concat(button.value);
    display.textContent += numberValue;
      };
    });
    

   



  
  

   



  












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
}

const clear = document.getElementById('clear-button');
const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.number-button');
const operators = document.querySelectorAll('.operator-button');
const equals = document.querySelector('.equal-button');
let numberDisplay = '';
let currentNumOne = '';
let currentNumTwo = '';
let a;
let b;

function firstNumBtn(){
  numbers.forEach((button) => {
    button.onclick = () => {
      currentNumOne += numberDisplay.concat(button.value);
      display.innerText = currentNumOne;
      a = parseInt(currentNumOne);
      console.log(a);                         
    };
  });
};

function secondNumBtn(){
numbers.forEach((button) => {
    button.onclick = () => {
      currentNumTwo += numberDisplay.concat(button.value);
      display.innerText = currentNumTwo;
      b = parseInt(currentNumTwo);
      console.log(b);                   
    };
  });
};

function firstOp (){
  firstNumBtn();
  operators.forEach((button) => {
    button.onclick = () => {
      if (button.id == 'plus'){
        display.innerText = '';
        secondNumBtn();                                                             
      } else if (button.id == 'minus'){
        display.innerText = '';
        secondNumBtn();
      } else if (button.id == 'multiple'){
        display.innerText = '';
        secondNumBtn();
      } else if (button.id == 'divide'){
        display.innerText = '';
        secondNumBtn();
      } else if (button.id == 'power'){
        display.innerText = '';
        secondNumBtn();       
      };                   
    };
  });
}

function calculate(){
  firstOp();
  equals.onclick = () => {
  display.innerText = '';
  let c = operate('+', a, b);
  display.innerText = parseInt(c);
  };
}

calculate();















  
    





  
  

   



  












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

function operate(op,a,b){
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

const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.number-button');
const operators = document.querySelectorAll('.operator-button');
const equals = document.querySelector('.equal-button');
const negative = document.querySelector('.negative-button');
let numOne = '';
let numTwo = '';
let op;
let a = '';
let b = '';
let solution = '';

function firstNumBtn(){
  numbers.forEach((button) => {
    button.onclick = () => {
      numOne += button.value;
      display.innerText = numOne;                                       
      a = parseFloat(numOne);      
    };
  });
};

function secondNumBtn(){
numbers.forEach((button) => {
    button.onclick = () => {
      numTwo += button.value;
      display.innerText = numTwo;                                      
      b = parseFloat(numTwo);
      console.log(parseFloat(operate(op,a,b)));                 
    };
  });
};


function firstOp (){
  firstNumBtn();  
  operators.forEach((button) => {
    button.onclick = () => {
      if (button.id == 'plus'){        
        secondNumBtn();               
        op = '+';        
      } else if (button.id == 'minus'){        
        secondNumBtn();
        op = '-';                                       
      } else if (button.id == 'multiply'){        
        secondNumBtn();
        op = '*';        
      } else if (button.id == 'divide'){
        secondNumBtn();
        op = '/';                                                       
      } else if (button.id == 'power'){      
        secondNumBtn();
        op = '^';                                                           
      }         
    };
  });
}

function calculate(){      
  firstOp();       
  equals.onclick = () => {
    if (b == 0 && op == '/'){
     return display.innerText = "Can't do that jackass";
    }        
  let calc = operate(op, a, b);      
  display.innerText = parseFloat(calc);      
  };  
};

calculate();

function clearDisplay(){
clear.onclick = () => {
  };
}  
function secondOp(){
  firstOp();
}



































  
    





  
  

   



  












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
}

const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.number-button');
const operators = document.querySelectorAll('.operator-button');
const equals = document.querySelector('.equal-button');
const negative = document.querySelector('.negative-button');
const clear = document.querySelector('#clear');
const backspace = document.querySelector('.backspace-button');
const buttons = document.querySelectorAll('.buttons > .button');

let argOne = '';
let argTwo = '';
let op = '';
let a = '';
let b = '';
displayValue = '0';
let result = '';

function updateDisplay(){
  display.innerText = displayValue;  
  if (displayValue.length > 12){
    display.innerText = displayValue.substring(0,12);
  };
};  

updateDisplay();

function firstNum(){
  for (let i = 0; i < numbers.length; i++){
  numbers[i].onclick = () => {
      a += numbers[i].id;
      deleteNumA();
      negA();        
      displayValue = a;          
      updateDisplay();                                                                       
    };
  };
};

function secondNum(){
  for (let i = 0; i < numbers.length; i++){  
numbers[i].onclick = () => {
      b += numbers[i].id;
      deleteNumB();
      negB();                                                                 
      displayValue = b;         
      updateDisplay();                     
    };
  };   
};

function operator(){  
  firstNum();             
  for (let i = 0; i < operators.length; i++){              
    operators[i].onclick = () => {      
      if (b === '' && result === '') {
        secondNum();
        displayValue = a.toString();
        updateDisplay();
        op = operators[i].id;                                                                                                                            
      } else if (b !== '' && result === '') {             
        displayValue = a.toString();        
        updateDisplay();                                     
        result = operate(op, parseFloat(a), parseFloat(b));
          if (operators[0].id && b == '0'){
          result = "Epic Failure!";
          }        
        op = operators[i].id;                                                                
        displayValue = result.toString();                  
        updateDisplay();
        a = result;                
        b = '';
        } else if (b === '' && result === a ){
        secondNum();
        displayValue = a.toString();
        updateDisplay();
        op = operators[i].id;                
      } else if (b !== '') {
        a = result;         
        result = operate(op, parseFloat(a), parseFloat(b));
          if (operators[0].id && b == '0'){
            result = "Epic Failure!";
        displayValue = result;                                        
      } else if (op == 'equal'){
        displayValue = a.toString();        
        op = operators[i].id;             
        result = operate(op, parseFloat(a), parseFloat(b));         
          };       
        displayValue = result.toString();                   
        updateDisplay();
        op = operators[i].id;
        b = '';             
      }      
      return result;            
    };                     
  };
};

operator();

function equalDisplay(){
  equals.onclick = () => {    
    result = a;     
    result = operate(op, parseFloat(a), parseFloat(b));
      if (operators[0].id && b == '0'){
        result = "Epic Fail!";        
      };
      if (b == ''){
        result = 'Start Over!';
      }    
    displayValue = result.toString();    
    updateDisplay();    
    a = result;
    b = '';      
    operator()        
  };
};

equalDisplay();

function clearDisplay(){
  clear.onclick = () => {
    a = '';
    b = '';
    result = ''
    displayValue = '0';
    updateDisplay();
    operator();
  };
}; 

clearDisplay(); 

function deleteNumA(){
  backspace.onclick = () => {
    displayValue = a.slice(0,-1);
    a = displayValue;    
    updateDisplay();
    if (a === 0){
      displayValue = 0
    } else if (b === ''){
      displayValue = 'Enter Number First';
    };      
  };
};

function deleteNumB(){
  backspace.onclick = () => {
    displayValue = b.slice(0,-1);
    b = displayValue;    
    
    if (b === 0){
      displayValue = 0
    } else if (b === ''){
      displayValue = 'Enter Number First';
    }
    updateDisplay();
  };
};
           
function negA(){
  negative.onclick = () => {
    displayValue = (a * -1);
    a = displayValue;
    updateDisplay();
  };  
}; 

function negB(){
  negative.onclick = () => {
    displayValue = (b * -1);
    b = displayValue;
    updateDisplay();
  };  
};           
   
document.addEventListener('keypress', (event) => {         
  buttons.forEach((button) => {button.blur(); });
  if (!Number.isNaN(+event.key) && event.key !== ''){
    document.getElementById(`${event.key}`).click();
  } else if (event.key === 'Delete' || event.key === 'C' || event.key === 'c'){
    document.getElementById('clear').click();
  } else if (event.key === 'Backspace'){
    document.getElementById('backspace').click();
  } else if (event.key === 'Enter' || event.key === '='){
    document.getElementById('equal').click();
  } else if (['+', '-', '*', '/'].includes(event.key)){
    document.getElementById(`${event.key}`).click();  
  }  
});
  

                              
           
                   
                   
                     
                    
      
                                          
                     
                   
                          
                                                                          
                                                          
                                
    
          
            
                                      
                         
          
          
        
                           
              
                     
               
        
                                                       

            
  
  
  
  
  
                                     
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
                  
  
  
  
  
  
  
                 
  
  
                   
      
        




                     


  
    





  
  

   



  












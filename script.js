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
let argOne = '';
let argTwo = '';
let op = '';
let a = '';
let b = '';
displayValue = '0';
let result = '';

function updateDisplay(){
  display.innerText = displayValue;
  if (displayValue.length > 25){
    display.innerText = displayValue.substring(0,25);
  };
}

updateDisplay();

function firstNum(){
  for (let i = 0; i < numbers.length; i++){
  numbers[i].onclick = () => {
      a += numbers[i].value;
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
      b += numbers[i].value;
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
        displayValue = a;
        updateDisplay();
        op = operators[i].id;                                                                                                                            
      } else if (b !== '' && result === '') {             
        displayValue = a;        
        updateDisplay();                                     
        result = operate(op, parseFloat(a), parseFloat(b));
          if (operators[0].id && b == '0'){
          result = "Epic Failure! Start Over";
          }        
        op = operators[i].id;                                                                
        displayValue = result;                  
        updateDisplay();                
        b = '';
        } else if (b === '' && result === a ){
        secondNum();
        displayValue = a;
        updateDisplay();
        op = operators[i].id;                
      } else if (b !== '') {
        a = result;         
        result = operate(op, parseFloat(a), parseFloat(b));
          if (operators[0].id && b == '0'){
            result = "Epic Failure! Start Over";
        displayValue = result;                                        
      } else if (op == 'equal'){
        displayValue = a;        
        op = operators[i].id;             
        result = operate(op, parseFloat(a), parseFloat(b));         
          };       
        displayValue = result;                   
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
        result = "Epic Fail! Start Over";        
      };
      if (b == ''){
        result = 'Clear And Start Over!';
      }    
    displayValue = result;
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
   
     
                          
           
     
                              
           
                   
                   
                     
                    
      
                                          
                     
                   
                          
                                                                          
                                                          
                                
    
          
            
                                      
                         
          
          
        
                           
              
                     
               
        
                                                       

            
  
  
  
  
  
                                     
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
                  
  
  
  
  
  
  
                 
  
  
                   
      
        




                     


  
    





  
  

   



  












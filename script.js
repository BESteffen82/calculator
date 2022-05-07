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
let argOne = '';
let argTwo = '';
let op = '';
let a = '';
let b = '';
displayValue = '0';
let result = '';

function updateDisplay(){
  display.innerText = displayValue;
}

updateDisplay();

function firstNum(){
  for (let i = 0; i < numbers.length; i++){
  numbers[i].onclick = () => {
      a += numbers[i].value;                 
      displayValue = a;          
      updateDisplay();                                                                       
    };
  };
};

function secondNum(){
  for (let i = 0; i < numbers.length; i++){  
numbers[i].onclick = () => {
      b += numbers[i].value;
      console.log(b);                                                           
      displayValue = b;      
      updateDisplay();               
    };
  };   
};

function operator(op){ 
  firstNum();       
  for (let i = 0; i < operators.length; i++){              
    operators[i].onclick = () => {
      if (b == '' && result == '') {
        secondNum();
        displayValue = a;
        updateDisplay();
        op = operators[i].id;        
        console.log(op);
      }
      if (b != '' && result === '') {
        displayValue = a;
        updateDisplay();
        result = operate(op, parseFloat(a), parseFloat(b));
        op = operators[i].id;
        console.log(op);        
        displayValue = result;
        console.log(result);
        updateDisplay();
        b = '';
      } else if (b !== '') {
        a = result;
        result = operate(op, parseFloat(a), parseFloat(b));
        displayValue = result;
        updateDisplay();
        op = operators[i].id;
        console.log(op);
        console.log(result);
        b = '';
      }

    };                  
  };
};

    
operator();
    
    
    
    
    //function calculate(){      
      //operator(); 
      //equals.onclick = () => {
        //displayValue = operate(op, parseFloat(a), parseFloat(b));        
        //updateDisplay();
        //};     
      //};
    
      //calculate();
                   
           
     
                          
           
     
                              
           
                   
                   
                     
                    
      
                                          
                     
                   
                          
                                                                          
                                                          
                                
    
          
            
                                      
                         
          
          
        
                           
              
                     
               
        
                                                       

            
  
  
  
  
  
                                     
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
                  
  
  
  
  
  
  
                 
  
  
                   
      
        




                     


  
    





  
  

   



  












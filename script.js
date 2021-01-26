let operatorElement = document.querySelector('.operator');
let operator = "+";
function calculate(){
  // define input numbers
  let number1 = parseInt(document.querySelector('#input1').value);
  let number2 = parseInt(document.querySelector('#input2').value);
  let result = 0;
  
  // switch between functions
  switch(operator){
    case "+":
      result = add(number1, number2);
      break;
    case "-":
      result = subtract(number1, number2);
      break;
    case "*":
      result = multiply(number1, number2);
      break;
    case "/":
      result = divide(number1, number2);
      break;
  }
  // print result
  document.querySelector('.output').innerText = result;
}

// show operators
document.querySelector('#add').addEventListener('click', function(){
  operator = "+";
  operatorElement.value = operator;
});

document.querySelector('#sub').addEventListener('click', function(){
  operator = "-";
  operatorElement.value = operator;
});

document.querySelector('#mul').addEventListener('click', function(){
  operator = "*";
  operatorElement.value = operator;
});

document.querySelector('#div').addEventListener('click', function(){
  operator = "/";
  operatorElement.value = operator;
});

document.querySelector('#eql').addEventListener('click', function(){
  calculate();
});
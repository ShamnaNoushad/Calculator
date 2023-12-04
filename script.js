//display number in text box
function buttonClick(num){
    result.value+=num
}

// AC or clear text box 
function clearText(){
    result.value=''
}

//Evaluate Expression
function evaluateExpression(){
    result.value=eval(result.value)
}

function removeLastItem(){
    result.value=result.value.slice(0,-1)
}
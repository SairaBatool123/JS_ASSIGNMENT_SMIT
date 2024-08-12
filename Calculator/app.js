var input = document.getElementById('input').value;
var string = "" 

function calculatingAll(input){
input.value += input;
}


function clearCalculation(){
input.value=string
}

function calculatedAns(){
    input.value=eval(input.value);
}

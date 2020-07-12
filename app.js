const screen = document.querySelector('input');
var sum ='';

function myFunction(event) { 
    sum += event.target.getAttribute("value");
    screen.value = sum;
}

function evaluateSum() {
    var answer = eval(screen.value);
    screen.value = answer;
    console.log(answer);
}

function clearValue(){
    screen.value = "";
    sum = '';
}
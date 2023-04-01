let button = document.getElementById('btn');
button.addEventListener('click', function(){
    calc();
});

function calc(){
    let operator = document.getElementById("operator").value;
    let numberOne = document.getElementById("numberOne").value;
    let numberTwo = document.getElementById("numberTwo").value;
    
    numberOne = Number(numberOne);
    numberTwo = Number(numberTwo);
    answer.style.color = "Blue"
    switch(operator){
        case '+':
            document.getElementById('answer').innerHTML = numberOne + numberTwo;
            break;
        case '-':
             document.getElementById('answer').innerHTML = numberOne - numberTwo;
            break;
         case '/':
            document.getElementById('answer').innerHTML = numberOne / numberTwo;
            break;
        case '*':
            document.getElementById('answer').innerHTML = numberOne * numberTwo;
            break;
        default:
            document.getElementById('answer').innerHTML = "Invalid Input";
            answer.style.color = "red"
    }
}
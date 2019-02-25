document.getElementById("add-button").addEventListener("click", addNumbers);
document.getElementById("subtract-button").addEventListener("click", addNumbers);
document.getElementById("multiply-button").addEventListener("click", addNumbers);
document.getElementById("divide-button").addEventListener("click", addNumbers);

function addNumbers() {
    var numberOne = getNumberOne();
    var numberTwo = getNumberTwo();

    var sum = numberOne + numberTwo;
    document.getElementById("total").innerHTML = 'Total: ' + sum;
}

function subtractNumbers() {
    var numberOne = getNumberOne();
    var numberTwo = getNumberTwo();

    var difference = numberOne - numberTwo;
    document.getElementById("total").innerHTML = 'Total: ' + difference;
}

function multiplyNumbers() {
    var numberOne = getNumberOne();
    var numberTwo = getNumberTwo();

    var product = numberOne * numberTwo;
    document.getElementById("total").innerHTML = 'Total: ' + product;
}

function divideNumbers() {
    var numberOne = getNumberOne();
    var numberTwo = getNumberTwo();

    var quotient = numberOne / numberTwo;
    document.getElementById("total").innerHTML = 'Total: ' + quotient;
}

function getNumberOne() {
    return document.getElementById("number-1");
}

function getNumberTwo() {
    return document.getElementById("number-2");
}
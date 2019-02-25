document.getElementById("add-button").addEventListener("click", addNumbers);

function addNumbers() {
    var numberOne = getNumberOne();
    var numberTwo = getNumberTwo();

    var sum = numberOne + numberTwo;
    document.getElementById("total").innerHTML = 'Total: ' + sum;
}

function getNumberOne() {
    return document.getElementById("number-1");
}

function getNumberTwo() {
    return document.getElementById("number-2");
}
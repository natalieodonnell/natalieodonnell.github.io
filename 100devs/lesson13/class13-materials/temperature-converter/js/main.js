//Write your pseduo code first! 
//0 -> 32

//need the value that is in celsius

//convert from celsius to fahrenheit

//show it

document.querySelector('#convertButton').addEventListener('click', convert);

function convert() {
    let temp = document.querySelector('#cel').value;
    temp = temp * 9 / 5 + 32;
    document.querySelector('#conversion').innerText = temp;
}

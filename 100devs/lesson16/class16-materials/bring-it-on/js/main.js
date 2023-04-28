// *Variables*
// Create a variable and console log the value
let num = 10
console.log(num);

// Create a variable, add 10 to it, and alert the value
let secondNum = 20
secondNum = secondNum + 10
alert(secondNum);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subFour(n1, n2, n3, n4) {
    alert(n1 - n2, - n3, - n4)
}
subFour(5, 4, 3, 2);

// Create a function that divides one number by another and returns the remainder
function divNums(n1, n2) {
    return n1 % n2
}
console.log(divNums(12, 3))

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addTwoAlertJumanji(num1, num2) {
    if (num1 + num2 > 50) {
        alert('Jumanji')
    }
}
addTwoAlertJumanji(50, 1)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplyThreeAndCheck(n1, n2, n3) {
    let product = n1 * n2 * n3;
    if (product % 3 === 0) {
        alert('ZEBRA')
    }
}
multiplyThreeAndCheck(3, 3, 1)

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function NumAndWord(word, num) {
    for (let i = 1; i <= num; i++) {
        console.log(word)

    }
}
NumAndWord('wonderful', 21)
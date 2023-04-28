//---Easy
//create a function that subtracts two numbers and alerts the difference
function subTwoNumsAndAlert(n1, n2) {
    alert(n1 - n2);
}
subTwoNumsAndAlert(50, 30);

//create a function that divides three numbers and console logs the quotient
function divThreeNumsAndLog(n3, n4, n5) {
    console.log(n3 / n4 / n5)
}
divThreeNumsAndLog(12, 4, 3);

//create a function that multiplys three numbers and returns the product
function multiThreeNumsAndReturn(n6, n7, n8) {
    return n6 * n7 * n8;
}
multiThreeNumsAndReturn(5, 10, 2);

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function takeThreeNumbers(n1, n2, n3) {
    return (n1 + n2) % n3;
}
console.log(takeThreeNumbers(3, 3, 2));

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number

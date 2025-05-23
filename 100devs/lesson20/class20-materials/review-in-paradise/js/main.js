// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let favFood = "Dominos"
favFood = "steak"
alert(favFood);

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let str = "Hello, Twitch!"
alert(str[1])

// OR  alert(str.charAt(1))//

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function threeNum(n1, n2, n3) {
    let prod = (n1 / n2) * n3
    alert(prod)
}

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function oneNum(n1) {
    console.log(Math.cbrt(n1));
}
oneNum(9);


// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function checkForSummer(month) {
    let monthLowerCase = month.toLowerCase()
    if (monthLowerCase === 'june' || monthLowerCase === 'july' || monthLowerCase === 'august') {
        alert("YAY")
    } else {
        alert("Booo")
    }
}

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function skipFives(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 5 !== 0) {
            console.log(i)
        }
    }
}
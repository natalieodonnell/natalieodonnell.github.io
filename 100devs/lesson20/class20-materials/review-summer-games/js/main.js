//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 
function multiNumsInArray(arr) {
    let product = 1
    for (let i = 0; i < arr.length; i++) {
        product *= arr[i];
    }
    alert(product)
}
multiNumsInArray([10, 2, 3]);
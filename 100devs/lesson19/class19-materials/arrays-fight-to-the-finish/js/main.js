//Create an array of movie titles. Loop through the array and add each element to the h2.
let movieTitles = ["fight", "win", "worldwide"]

for (let i = 0; i < movieTitles.length; i++) {
    document.querySelector("h2").innerText += movieTitles[i]
}


//Create an array of numbers. Loop through the array and add three to each number and replace the old number.
let numbers = [10, 20, 30]

numbers.forEach((item, idx) => {
    numbers[i] = item + 3

})


//Find the average of all the numbers from question two
let sum = 0

for (let i = o; i < numbers.length; i++) {
    sum = sum + nums[i];
}

console.log(sum / nums.length)
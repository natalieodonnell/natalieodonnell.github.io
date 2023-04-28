//Write your pseduo code first! 

//only on click
document.querySelector("#yell").addEventListener("click", run);

function run() {
    console.log("HELLO");

    //get value out of the input
    let temp = document.querySelector("#firstName").value;

    //convert the value
    temp = temp * 9 / 5 + 32;

    //show the value to the user
    document.querySelector("#placeToYell").innerText = temp;
}
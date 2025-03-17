// let x = 5;
// let y = 7;
// let z = x + y;

// console.log(z);

// let A = "Hello ";
// let B = "world!";
// let C = A + B;

// console.log(C);

// function SumNPrint(x1, x2) {
//     let x3 = x1 + x2;
//     console.log(x3);
//     }

// SumNPrint(x, y);
// SumNPrint(A, B);


// if (C.length > z) {
//     console.log(C);
// } else if (C.length < z) {
//     console.log(z);
// } else {
//     console.log("good job!");
// }


// let L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
// let L2 = ["Apple", "Banana", "Kiwi", "Orange"];

// function findTheBanana(list) {
//     list.forEach((item, index) => {
//         if (item === "Banana") {
//             alert("found the Banana in first array");
//         }
//     });
// }

// findTheBanana(L1);
// findTheBanana(L2);

function greetingFunc(){
    let d = new Date();
    let h = d.getHours();
    let greetingMessage;
    if (h >= 5 && h < 12) {
        greetingMessage = "Good morning";
    } else if (h >= 12 && h < 18) {
        greetingMessage = "Good afternoon";
    } else if (h >= 18 && h < 20) {
        greetingMessage = "Good evening";
    } else {
        greetingMessage = "Good night";
    }
    document.querySelector("h2").innerHTML = greetingMessage + ", I am Bo";
}

// Check if the current page is the homepage or index.html and invoke greetingFunc() if it is
if (window.location.href.endsWith('/') || window.location.href.endsWith('index.html')) {
    greetingFunc();
}

//add year to footer
function addYear() {
    let currentYear = new Date().getFullYear();
    let copyYearElement = document.getElementById("copyYear");
    let existingText = copyYearElement.innerHTML;
    copyYearElement.innerHTML = existingText + " " + currentYear;
}
addYear();

function showList(){
    let button = document.getElementById("seeMoreButton");
    let list = document.getElementById("funList");
    list.style.display = "block";
    button.style.display = "none";
}
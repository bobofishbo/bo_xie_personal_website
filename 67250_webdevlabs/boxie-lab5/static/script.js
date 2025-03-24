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


$(document).ready(function() {
    console.log("Current page URL:", window.location.href);
    $("#readMoreBtn").click(function() {
        console.log("clicked");
        $("#shortIntro").hide();
        $("#longIntro").show();
        $("#readMoreBtn").hide();
        $("#readLessBtn").show();
    });

    $("#readLessBtn").click(function() {
        $("#shortIntro").show();
        $("#longIntro").hide();
        $("#readMoreBtn").show();
        $("#readLessBtn").hide();
    });

});



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
    console.log("Index page detected");
    greetingFunc();
}


function showList(){
    let button = document.getElementById("seeMoreButton");
    let list = document.getElementById("funList");
    list.style.display = "block";
    button.style.display = "none";
}

function validateForm() {
    const validationMessage = document.getElementById("validationMessage");
    validationMessage.innerHTML = "";
    let isValid = true;

    // Validate name
    const name = document.getElementById("name");
    if (!name.checkValidity()) {
        isValid = false;
        validationMessage.innerHTML += "Please enter your name.<br>";
        return;
    }

    // Validate email
    const email = document.getElementById("email");
    if (!email.checkValidity()) {
        isValid = false;
        validationMessage.innerHTML += "Please enter a valid email address.<br>";
        return;
    }

    // Validate comment
    const comment = document.getElementById("comment");
    if (!comment.checkValidity()) {
        isValid = false;
        validationMessage.innerHTML += "Please enter your comment.<br>";
        return;
    }

    // If all fields are valid
    if (isValid) {
        validationMessage.innerHTML = "Form submitted successfully!";
        document.getElementById("contactForm").reset();
    }
}

function getAdvice() {
    const adviceText = document.getElementById("adviceText");

    // Fetch random advice from the Advice Slip API
    fetch("https://api.adviceslip.com/advice")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            // Extract and display the advice
            adviceText.innerText = `"${data.slip.advice}"`;
        })
        .catch(error => {
            // Handle errors and display an error message
            adviceText.innerText = "Oops! Something went wrong. Please try again.";
            console.error("Error fetching advice:", error);
        });
}


if (window.location.href.includes("fun.html")) {
    console.log("Fun page detected");
    // Run fun page-specific code
    getAdvice();
}

if (window.location.href.includes("contact.html")) {
    console.log("Contact page detected");
    // Run contact page-specific code
    validateForm();
}

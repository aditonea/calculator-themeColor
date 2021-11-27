const displayCurrent = document.querySelector("#current")
const displayPrevious = document.querySelector("#previous")
const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operatie");
const egal = document.querySelector(".egal");
const clear = document.querySelector(".clear")
const themeColor = document.querySelector(".theme")

let result = 0
let operationSymbol;
let state;

numbers.forEach((num) => {
    num.addEventListener("click", () => {
        displayCurrent.append(num.innerText)
        state = displayCurrent.innerText
    })
})

operations.forEach((operation) => {
    operation.addEventListener("click", () => {
        result += parseInt(state)
        console.log(result)
        operationSymbol = operation.innerText
        displayPrevious.innerText = `${state ? state : result} ${operation.innerText}`
        displayCurrent.innerText = " "
    })
})

egal.addEventListener("click", () => {
    switch (operationSymbol) {
        case "+":
            result += parseInt(state);
            displayCurrent.innerText = result;
            displayPrevious.innerText = ""
            break;
        case "-":
            result -= parseInt(state);
            displayCurrent.innerText = result;
            displayPrevious.innerText = ""
            break;
        case "x":
            result *= parseInt(state);
            displayCurrent.innerText = result;
            displayPrevious.innerText = ""
            break;
        case "/":
            result /= parseInt(state);
            displayCurrent.innerText = result;
            displayPrevious.innerText = ""
            break;
    }
    console.log("state:", state)
    console.log("result:", result)
    state = 0;
})

clear.addEventListener("click", () => {
    displayCurrent.innerText = ""
    displayPrevious.innerText = ""
    result = 0;
    operationSymbol = "";
    state = "";
})

let lightMode = false;

themeColor.addEventListener("click", () => {
    document.querySelectorAll(".btn").forEach((btn) => {
        btn.classList.toggle("button-light")
    })
    document.querySelector("body").classList.toggle("bg-light")
    document.querySelector(".container").classList.toggle("display-light")
    document.querySelector(".display").classList.toggle("display-light")
    lightMode = !lightMode
    if (lightMode) {
        themeColor.querySelector("i").classList.remove("fa-sun")
        themeColor.querySelector("i").classList.add("fa-moon")
    } else {
        themeColor.querySelector("i").classList.remove("fa-moon")
        themeColor.querySelector("i").classList.add("fa-sun")
    }

})























// const buttons = document.querySelectorAll("p");
// const display = document.querySelector(".display h1")
// buttons.forEach((button) => {
//     button.addEventListener("click", () => {
//         let firstNum = 0;
//         let operation = "";
//         if (numbers.includes(parseInt(button.innerText))) {
//             firstNum = parseInt(display.innerText += button.innerText);
//         } else if (operations.includes(button.innerText)) {
//             display.innerText = " ";
//             switch (button.innerText) {
//                 case "+":
//                     operation = "+";
//                     break;
//                 case "-":
//                     operation = "-";
//                     break;
//                 case "*":
//                     operation = "*";
//                     break;
//                 case "/":
//                     operation = "/";
//                     break;
//             }
//         }
//     })
// });

// const calculeaza = (firstNum, secondNum, operation) => {
//     switch (operation) {
//         case "+":
//             return firstNum + secondNum;
//         case "-":
//             return firstNum - secondNum;
//         case "*":
//             return firstNum * secondNum;
//         case "/":
//             return firstNum / secondNum;
//     }
// }

// const reset = () => {
//     display.innerText = " ";
// }
const btnEl = document.querySelectorAll("button");
const inputBoxEl = document.querySelector("#inputBox");

let value = 0;
let value1 = 0;
let value2 = 0;
let operator = "";
// console.log(inputBoxEl);

btnEl.forEach((indBtn) => {
  indBtn.addEventListener("click", (e) => {
    // console.log(e.target.innerHTML);
    value = e.target.innerHTML;

    if (value == "/") {
      operator = "/";
      value = "";
    } else if (value == "*") {
      operator = "*";
      value = "";
    } else if (value == "-") {
      operator = "-";
      value = "";
    } else if (value == "+") {
      operator = "+";
      value = "";
    } else if (value == "=") {
      operator = "=";
      value = "";
    }

    if (value == "AC") {
      value = "";
      inputBoxEl.value = "";
    }

    inputBoxEl.value += value;
    // console.log(operator);
  });

  function addition(val_1, val_2) {
    return val_1 + val_2;
  }

  function multiplication(val_1, val_2) {
    return val_1 * val_2;
  }

  function division(val_1, val_2) {
    return val_1 / val_2;
  }

  function minus(val_1, val_2) {
    return val_1 - val_2;
  }

  function Addition(val_1, val_2) {
    return val_1 + val_2;
  }
});

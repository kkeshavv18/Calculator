const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.addEventListener("click", () => {
    let key = item.id;
    if (key === "clear") {
      display.innerText = "";
    } else if (key === "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innnerText != "" && key === "equal") {
      display.innerText = eval(display.innerText);
    } else if (display.innerText === "" && key === "equal") {
      display.innerText = "Empty!";
      setTimeout(() => display.innerText === "", 2000);
    } else {
      display.innerText += key;
    }
  });
});
const themeToggleButton = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const togglerIcon = document.querySelector("toggler-icon");
let isDark = true;
themeToggleButton.addEventListener("click", function () {
  calculator.classList.toggle("dark");
  themeToggleButton.classList.toggle("active");
  isDark = !isDark;
});

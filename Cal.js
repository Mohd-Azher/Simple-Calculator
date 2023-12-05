window.onload = () => {
  const buttons = document.querySelectorAll(".numbers");
  const screens = document.querySelector(".screen");
  const equals = document.querySelector("#btn-equal");
  const clears = document.querySelector("#btn-clear");
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      screens.value += e.target.innerHTML;
    });
  });
  equals.addEventListener("click", (e) => {
    if (!screens.value) {
      screens.value = "Enter Value";
    } else {
      screens.value = eval(screens.value);
    }
  });
  clears.addEventListener("click", () => {
    screens.value = "";
  });
};

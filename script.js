<script>
let display = document.querySelector(".display");
let buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    let value = btn.innerText;

    if (value === "C") {
      display.value = "";
    } 
    else if (value === "DEL") {
      display.value = display.value.slice(0, -1);
    } 
    else if (value === "=") {
      try {
        display.value = eval(display.value
          .replace("×", "*")
          .replace("÷", "/"));
      } catch {
        display.value = "Error";
      }
    } 
    else {
      display.value += value;
    }
  });
});
</script>
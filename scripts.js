const input = document.querySelector("input");
const strengthBar = document.getElementById("strengthProgressBarStatus");
const resultText = document.getElementById("resultText");
const resultContainer = document.getElementById("result-container");

input.addEventListener("input", updateValue);

function updateValue(e) {
  const inputLength = e.target.value.length;
  if (inputLength === 0) {
    resultContainer.classList.add("hidden");
    resultText.textContent = "";
  } else if (inputLength < 8) {
    resultContainer.classList.remove("hidden");
    strengthBar.classList.remove("orange");
    strengthBar.classList.remove("green");

    resultText.textContent = "Should be longer " + inputLength;
    strengthBar.classList.add("red");
  } else if (inputLength < 12) {
    resultContainer.classList.remove("hidden");
    strengthBar.classList.remove("red");
    strengthBar.classList.remove("green");

    resultText.textContent = "Pretty good " + inputLength;
    strengthBar.classList.add("orange");
    strengthBar.style.width = "60%";
  } else {
    resultContainer.classList.remove("hidden");
    strengthBar.classList.remove("orange");
    strengthBar.classList.remove("red");

    resultText.textContent = "Grrrreat! " + inputLength;
    strengthBar.classList.add("green");
  }
  strengthBar.style.width = inputLength * 5 + "%";
}

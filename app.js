const celsiusInput = document.getElementById("celsiusInput");
const fahrenheitInput = document.getElementById("fahrenheitInput");
const equationText = document.getElementById("equationText");

function CelsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function FahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function updateEquationText(celsius, fahrenheit) {
  equationText.textContent = `${celsius}°C × 9/5 + 32 = ${fahrenheit}°F`;
}

function convertCelsius() {
  let celsiusInputValue = parseFloat(celsiusInput.value);
  if (!isNaN(celsiusInputValue)) {
    let fahrenheitValue = CelsiusToFahrenheit(celsiusInputValue);
    fahrenheitInput.value = fahrenheitValue;
    updateEquationText(celsiusInputValue, fahrenheitValue);
  } else {
    fahrenheitInput.value = "";
    equationText.textContent = "";
  }
}

function convertFahrenheit() {
  let fahrenheitInputValue = parseFloat(fahrenheitInput.value);
  if (!isNaN(fahrenheitInputValue)) {
    let celsiusValue = FahrenheitToCelsius(fahrenheitInputValue);
    celsiusInput.value = celsiusValue;
    updateEquationText(celsiusValue, fahrenheitInputValue);
  } else {
    celsiusInput.value = "";
    equationText.textContent = "";
  }
}

celsiusInput.addEventListener("input", convertCelsius);
fahrenheitInput.addEventListener("input", convertFahrenheit);

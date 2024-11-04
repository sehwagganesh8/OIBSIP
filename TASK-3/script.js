function convertTemperature() {
    var temperatureInput = document.getElementById("temperature").value;
    var fromUnit = document.getElementById("fromUnit").value;
    var toUnit = document.getElementById("toUnit").value;

    // Check if temperature is a valid number
    if (isNaN(temperatureInput)) {
      alert("Please enter a valid temperature.");
      return;
    }

    // Convert temperature
    var temperature = parseFloat(temperatureInput);
    var convertedTemperature;

    if (fromUnit === "celsius") {
      if (toUnit === "fahrenheit") {
        convertedTemperature = (temperature * 9 / 5) + 32;
      } else if (toUnit === "kelvin") {
        convertedTemperature = temperature + 273.15;
      } else {
        convertedTemperature = temperature;
      }
    } else if (fromUnit === "fahrenheit") {
      if (toUnit === "celsius") {
        convertedTemperature = (temperature - 32) * 5 / 9;
      } else if (toUnit === "kelvin") {
        convertedTemperature = (temperature + 459.67) * 5 / 9;
      } else {
        convertedTemperature = temperature;
      }
    } else if (fromUnit === "kelvin") {
      if (toUnit === "celsius") {
        convertedTemperature = temperature - 273.15;
      } else if (toUnit === "fahrenheit") {
        convertedTemperature = (temperature * 9 / 5) - 459.67;
      } else {
        convertedTemperature = temperature;
      }
    }

    // Display result
    var resultElement = document.getElementById("result");
    resultElement.textContent = convertedTemperature.toFixed(2) + " " + toUnit;
  }
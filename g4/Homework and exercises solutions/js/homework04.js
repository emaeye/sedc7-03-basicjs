function convertToCelsius(fahrenheit) {
    var celsius = (fahrenheit - 32) * (5 / 9);
    console.log(`${fahrenheit} °F is the equivalent of ${celsius} °C.`);
}

function convertToFahrenheit(celsius) {
    var fahrenheit = celsius * 9 / 5 + 32;
    console.log(`${celsius} °C is the equivalent of ${fahrenheit} °F.`);
}

convertToCelsius(140);
convertToCelsius(98);
convertToFahrenheit(37);
convertToFahrenheit(100);
function toFahrenheitFull (celsius) {
  let result = celsius * 1.8 + 32;
  return result;
}

output(toFahrenheitFull(0));
output(toFahrenheitFull(-10));
output(toFahrenheitFull(30));


function toFahrenheit (celsius) {
  let result = convert(celsius, 1.8, 32);
  return result;  
}

function toCentimeters(meters) {
  let result = convert(meters, 100);
  return result;
}

function feetToMeters(feet) {
  let result = convert(feet, 0.3048);
  return result;
}

function convert(value, factor = 1, offset = 0) {
  return value * factor + offset;
}
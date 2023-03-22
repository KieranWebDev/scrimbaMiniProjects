// selectors
const convertInput = document.querySelector('#convert-input');
const convertBtn = document.querySelector('#convert-button');
const meterToFeetDisplay = document.querySelector('#meter-to-feet');
const literToGallonsDisplay = document.querySelector('#liters-to-gallons');
const kiloToPoundsDisplay = document.querySelector('#kg-to-pounds');

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
function lengthConversion(input) {
  const meterToFeet = (input * 3.281).toFixed(3);
  const feetToMeter = (input / 3.281).toFixed(3);
  return (meterToFeetDisplay.textContent = `${input} meters = ${meterToFeet} feet | ${input} feet = ${feetToMeter} meters`);
}

function volumeConversion(input) {
  const literToGallon = (input * 0.264).toFixed(3);
  const gallonToliter = (input / 0.264).toFixed(3);
  return (literToGallonsDisplay.textContent = `${input} liters = ${literToGallon} gallons | ${input} gallons = ${gallonToliter} liters`);
}

function massConversion(input) {
  const kgToPounds = (input * 2.204).toFixed(3);
  const poundsToKg = (input / 2.204).toFixed(3);
  return (kiloToPoundsDisplay.textContent = `${input} kilos = ${kgToPounds} pounds | ${input} pounds = ${poundsToKg} kilos`);
}

lengthConversion(convertInput.value);
volumeConversion(convertInput.value);
massConversion(convertInput.value);

convertBtn.addEventListener('click', () => {
  lengthConversion(convertInput.value);
  volumeConversion(convertInput.value);
  massConversion(convertInput.value);
});

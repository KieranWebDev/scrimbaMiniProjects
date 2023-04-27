//
const colorPickerInput = document.querySelector('#color-picker');
const ColorSchemeInput = document.querySelector('#color-scheme-type');
const form = document.querySelector('#form');

let defaultColor = colorPickerInput.value.slice(1);
let defaultColorScheme = ColorSchemeInput.value;

function fetchColors(
  chosenColor = defaultColor,
  chosenColorScheme = defaultColorScheme
) {
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${chosenColor}&mode=${chosenColorScheme}&count=5`
  )
    .then((response) => response.json())
    .then((data) => {
      const colorScheme = {
        colorOne: data.colors[0].hex.value,
        colorTwo: data.colors[1].hex.value,
        colorThree: data.colors[2].hex.value,
        colorFour: data.colors[3].hex.value,
        colorFive: data.colors[4].hex.value,
      };
      console.log(colorScheme);
    });
}

fetchColors();

//   function getColors(e) {
//   e.preventDefault();
//   let chosenColors = colorPickerInput.value;
//   console.log(chosenColors);
// }

function render() {}

// form.addEventListener('submit', getColors);

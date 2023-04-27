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
      const colorScheme = [
        { color: data.colors[0].hex.value },
        { color: data.colors[1].hex.value },
        { color: data.colors[2].hex.value },
        { color: data.colors[3].hex.value },
        { color: data.colors[4].hex.value },
      ];
      const colorsHtml = colorScheme
        .map(
          (color) => `
        <div class="color-box ">
        <div class="color-box-color" style='background: ${color.color}'></div>
        <div class="color-box-hex first-hex">${color.color}</div>
      </div>
      `
        )
        .join('');
      document.querySelector('.color-scheme-container').innerHTML = colorsHtml;
      console.log(colorsHtml);
    });
}

fetchColors();

// function render() {
//   const colorsHtml = colorScheme.map(
//     (color) => `
//   <div class="color-box ">
//   <div class="color-box-color first-color"></div>
//   <div class="color-box-hex first-hex">#${color.colorOne}</div>
// </div>
// `
//   );
//   console.log(colorsHtml);
// }

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const chosenColor = colorPickerInput.value.slice(1);
  const chosenScheme = ColorSchemeInput.value;
  console.log(chosenColor, chosenScheme);
  fetchColors(chosenColor, chosenScheme);
});

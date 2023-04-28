// selectors
const colorPickerInput = document.querySelector('#color-picker');
const ColorSchemeInput = document.querySelector('#color-scheme-type');
const form = document.querySelector('#form');

const defaultColor = colorPickerInput.value.slice(1);
const defaultColorScheme = ColorSchemeInput.value;

let colorScheme = [];

function fetchColors(hexColor = defaultColor, colorMode = defaultColorScheme) {
  try {
    fetch(
      `https://www.thecolorapi.com/scheme?hex=${hexColor}&mode=${colorMode}&count=5`
    )
      .then((response) => response.json())
      .then((data) => {
        colorScheme = [
          { color: data.colors[0].hex.value },
          { color: data.colors[1].hex.value },
          { color: data.colors[2].hex.value },
          { color: data.colors[3].hex.value },
          { color: data.colors[4].hex.value },
        ];
        render(colorScheme);
      });
  } catch (error) {
    console.error(error);
  }
}

function render(colorScheme) {
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
}
fetchColors();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const chosenColor = colorPickerInput.value.slice(1);
  const chosenScheme = ColorSchemeInput.value;
  fetchColors(chosenColor, chosenScheme);
});

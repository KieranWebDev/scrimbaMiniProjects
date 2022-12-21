const urlMovie =
  'https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/movies.json';

async function fetchData(url) {
  let response = await fetch(url);
  let data = await response.json();
  return data[0];
  // .then((response) => response.json())
  // .then((data) => data.forEach(item => item.year))
}

// const movieData = await fetchData(urlMovie);
// const requiredMovieData = movieData.map((item) => item.year);

// const paintingsData = await fetchData(
//   'https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json'
// );

// const par = document.querySelector('main-p');

// console.log(requiredMovieData);
// console.log(paintingsData);

// fetch('https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/movies.json')
// let response = await fetch(url);
// let data = await response.json();
// let finalData = data.map((item) => item.year);

const beerUrl = 'https://api.punkapi.com/v2/beers/random';

async function fetchRandomBeerInfo() {
  let beerData = await fetchData(beerUrl);

  const {
    name,
    description,
    first_brewed,
    food_pairing,
    abv,
    volume: { unit, value },
  } = beerData;

  const h1 = document.querySelector('h1');
  const beerDescription = document.querySelector('.beer-description');
  const beerInfo = document.querySelector('.beer-info');
  const foodPairings = document.querySelector('.food-pairings-list');

  foodPairings.innerHTML = '';
  // beerContainer.innerHTML = '';
  // h1.innerText = '';
  // beerDescription.innerText = '';
  // beerInfo.textContent = '';

  console.log(beerData);
  console.log(unit);

  console.log(description);

  h1.innerText = name;
  beerDescription.innerText = description;
  beerInfo.textContent = `Alcholol by volume ${abv}. volume ${value} ${unit}. First brewed on ${first_brewed}`;

  food_pairing.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.innerText = item;
    foodPairings.appendChild(listItem);
  });
}

const beerButton = document.querySelector('.getBeer');

beerButton.addEventListener('click', fetchRandomBeerInfo);
//
// NEW TASK

async function fetchPlanetData(url) {
  let response = await fetch(url);
  let data = await response.json();
  return data.results;
  // .then((response) => response.json())
  // .then((data) => data.forEach(item => item.year))
}

const planeturl = 'https://swapi.dev/api/planets';
const planetData = await fetchPlanetData(planeturl);

const planetList = document.querySelector('.planets-list');

planetData.forEach((item, index) => {
  const listItem = document.createElement('li');
  listItem.textContent = index + 1;
  planetList.appendChild(listItem);
  listItem.addEventListener('click', () => displayPlanetData(index));
});

const h1Planet = document.querySelector('.h1-planet');
const planetInfo = document.querySelector('.planet-info');

function displayPlanetData(index) {
  const { name, climate, population, films } = planetData[index];
  console.log(climate, population, films.length);
  h1Planet.textContent = name;
  planetInfo.textContent = `Climate: ${climate}, Population: ${population}; Appeared in ${
    films.length
  } film${films.length > 1 ? 's' : ''}`;
}
//yayyyyyyy
//who da mann

const endPoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
let cities = [];
fetch(endPoint).then((data) =>
  data.json().then((data) => cities.push(...data))
);
function findMatches(wordToMatch, cities) {
  return cities.filter((place) => {
    const regex = new RegExp(wordToMatch, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
}
function displayMatches() {
  const find = findMatches(this.value, cities);

  const html = find
    .map((place) => {
      // unused code..but learnt a lot
      // const regex = new RegExp(this.value, "gi");
      // const cityName = place.city.replace(
      //   regex,
      //   `<span class="h1">${this.value}</span>`
      // );
      // const stateName = place.city.replace(
      //   regex,
      //   `<span class="h1">${this.value}</span>`
      // );
      return `
      <li>
          <span class="name">${place.city}, ${place.state}</span>
          <span class="population">${place.population}</span>
      </li>
      `;
    })
    .join("");
  ul.innerHTML = html;
}
const input = document.querySelector(".search");
const ul = document.querySelector(".suggestions");
input.addEventListener("change", displayMatches);
input.addEventListener("keyup", displayMatches);

import { countries } from "./utils/countries.js";
import { Country } from "./components/Country/Country.js";

const container = document.querySelector('[data-js="card-container"]');
const queryInput = document.querySelector('[data-js="query-input"]');

queryInput.addEventListener("input", (event) => {
  container.innerHTML = "";

  const searchString = event.target.value.toLowerCase();

  const foundCountries = countries.filter((country) =>
    country.name.toLowerCase().startsWith(searchString)
  );

  if (foundCountries) {
    foundCountries.map((foundCountry) => {
      const countryElement = Country(foundCountry);
      container.append(countryElement);
    });
  }
});

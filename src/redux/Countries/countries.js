const SET_COUNTRIES = 'SET_COUNTRIES_SUCCESS';
const SEARCH_COUNTRIES = 'SEARCH_COUNTRIES';

export default function countriesReducer(state = [], action) {
  switch (action.type) {
    case SET_COUNTRIES: {
      return action.payload;
    }
    case SEARCH_COUNTRIES: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

export const getCountriesFromServer = (filter) => async (dispatch) => {
  const response = await fetch(`https://restcountries.com/v3.1/${filter}`);
  const data = await response.json();
  // console.log(data);
  const countries = data.map((country) => ({
    name: country.name.common,
    flag: country.flags.png,
    population: country.population,
    capital: country.capital,
    continents: country.continents,
    subregion: country.subregion,
    languages: country.languages,
    nativeName: country.name.nativeName,
    topLevelDomain: country.tld,
    borders: country.borders,
    currencies: country.currencies,
    code: country.cca3,
  }));
  const sortedCountries = countries.sort((a, b) => a.name.localeCompare(b.name));
  dispatch({
    type: SET_COUNTRIES,
    payload: sortedCountries,
  });
};

export const searchCountries = (countryName) => async (dispatch) => {
  const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
  const data = await response.json();
  const countries = data.map((country) => ({
    name: country.name.common,
    flag: country.flags.png,
    population: country.population,
    capital: country.capital,
    continents: country.continents,
    subregion: country.subregion,
    languages: country.languages,
    nativeName: country.name.nativeName,
    topLevelDomain: country.tld,
    currencies: country.currencies,
    borders: country.borders,
    code: country.cca3,
  }));
  const sortedCountries = countries.sort((a, b) => a.name.localeCompare(b.name));
  dispatch({
    type: SEARCH_COUNTRIES,
    payload: sortedCountries,
  });
};

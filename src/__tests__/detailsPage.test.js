import React from 'react';
import {
  fireEvent, render, screen,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import Homepage from '../Pages/homePage';
import DetailsPage from '../Pages/detailsPage';
import countriesReducer from '../redux/Countries/countries';
import SelectContinentReducer from '../redux/Countries/selectedContinent';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ec4c8a',
      light: '#ef6fa1',
      dark: '#a53560',
    },
    secondary: {
      main: '#a53560',
    },
  },
  typography: {
    fontFamily: 'SegoeUI, Segoe UI',
  },
});

const initialState = {
  countries: [{
    capital: ['Helsinki'],
    continents: ['Europe'],
    currencies: { EUR: { name: 'Euro', symbol: '€' } },
    flag: 'https://flagcdn.com/w320/fi.png',
    languages: { fin: 'Finnish', swe: 'Swedish' },
    name: 'Finland',
    nativeName: {
      fin: { official: 'Suomen tasavalta', common: 'Suomi' },
      swe: { official: 'Republiken Finland', common: 'Finland' },
    },
    population: 5530719,
    subregion: 'Northern Europe',
    topLevelDomain: ['.fi'],
  }],
  selectedContinent: 'all',
};

const rootReducer = combineReducers({
  countries: countriesReducer,
  selectedContinent: SelectContinentReducer,
});

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
});

it('renders', () => {
  render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/countries/:country" element={<DetailsPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>,
  );

  const name = screen.getByText('Finland');
  expect(name).toBeInTheDocument();
  fireEvent.click(screen.getByText('Finland'));
  expect(screen.getAllByText('Finland').length).toEqual(1);
});

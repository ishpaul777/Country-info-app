import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import countriesReducer from './Countries/countries';
import SelectContinentReducer from './Countries/selectedContinent';

const rootReducer = combineReducers({
  countries: countriesReducer,
  selectedContinent: SelectContinentReducer,
});
const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});
export default store;

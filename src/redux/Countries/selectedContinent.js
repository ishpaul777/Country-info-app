const SET_CONTINENT = 'SET_CONTINENT';

const initialState = 'all';
export default function setContinentReducer(state = initialState, action) {
  switch (action.type) {
    case (SET_CONTINENT): {
      // console.log(action.payload);
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
export const setContinent = (continent) => ({
  type: SET_CONTINENT,
  payload: continent,
});

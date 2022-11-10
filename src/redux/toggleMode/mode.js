const TOGGLE_MODE = 'TOGGLE_MODE';
const initialState = {
  isDarkMode: false,
};
export default function toggleModeReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MODE: {
      return { ...state, isDarkMode: !state.isDarkMode };
    }
    default: {
      return state;
    }
  }
}

export const toggleMode = () => ({
  type: TOGGLE_MODE,
});

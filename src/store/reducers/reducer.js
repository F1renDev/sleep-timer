import * as actionTypes from "../actions/actionTypes";

const initialState = {
  showCalculator: true,
  showHours: false,
  showMinutes: false,
  currentHours: `08`,
  currentMinutes: `00`,
  zzzButtonClicked: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SWITCH_SHOW_CALCULATOR:
      return {
        ...state,
        showCalculator: !state.showCalculator
      };
    case actionTypes.SWITCH_SHOW_HOURS:
      return {
        ...state,
        showHours: !state.showHours
      };
    case actionTypes.SWITCH_SHOW_MINUTES:
      return {
        ...state,
        showMinutes: !state.showMinutes
      };
    case actionTypes.SET_CURRENT_HOURS:
      return {
        ...state,
        currentHours: action.item
      };
    case actionTypes.SET_CURRENT_MINUTES:
      return {
        ...state,
        currentMinutes: action.item
      };
    case actionTypes.ZZZ_BUTTON_CLICKED:
      return {
        ...state,
        zzzButtonClicked: !state.zzzButtonClicked
      };
    default:
      return state;
  }
};

export default reducer;

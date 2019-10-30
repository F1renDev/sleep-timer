import * as actionTypes from './actionTypes';

export const switchShowCalculator = () => {
  return {
    type: actionTypes.SWITCH_SHOW_CALCULATOR
  };
};

export const switchShowHours = () => {
  return {
    type: actionTypes.SWITCH_SHOW_HOURS
  };
};

export const switchShowMinutes = () => {
  return {
    type: actionTypes.SWITCH_SHOW_MINUTES
  };
};

export const setCurrentHours = (item) => {
  return {
    type: actionTypes.SET_CURRENT_HOURS,
    item: item
  };
};

export const setCurrentMinutes = (item) => {
  return {
    type: actionTypes.SET_CURRENT_MINUTES,
    item: item
  };
};

export const zzzButtonClicked = () => {
  return {
    type: actionTypes.ZZZ_BUTTON_CLICKED
  };
};
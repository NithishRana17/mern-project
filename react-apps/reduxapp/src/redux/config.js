import { configureStore } from "@reduxjs/toolkit";

const counterLogic = (state = 0, action) => {
  switch (action.type) {
    case "add":
      return state + 1;

    case "sub":
      return state - 1;

    default:
      return state;
  }
};

const storeMyDetailReducer = (state = {}, action) => {
  console.log(action);
  switch (action.type) {
    case "saveDetails":
      return action.data;
    default:
      return state;
  }
};

export const myStore = configureStore({
  reducer: {
    counter: counterLogic,
    myDetails: storeMyDetailReducer,
  },
});
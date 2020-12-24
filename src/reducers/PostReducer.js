import { ADD_POST } from "../actions/ActionTypes";

export const postReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_POST:
      return [...state, action.payload];

    default:
      return state;
  }
};

import {
  ADD_POST,
  DELETE_POST,
  EDIT_POST,
  UPDATE_POST,
} from "../actions/ActionTypes";

export const postReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_POST:
      return [...state, action.payload];
    case DELETE_POST:
      return state.filter((post) => post.id !== action.payload.id);
    case EDIT_POST:
      return state.map((post) =>
        post.id === action.payload.id ? { ...post, edit: !post.edit } : post
      );
    case UPDATE_POST:
      return state.map((post) => {
        if (post.id === action.payload.id) {
          console.log(action)
          return {
            ...post,
            title: action.payload.title,
            postDescription: action.payload.postDescription,
            edit: !post.edit,
          };
        } else {
          return state;
        }
      });
    default:
      return state;
  }
};

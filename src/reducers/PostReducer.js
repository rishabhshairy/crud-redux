import {
  ADD_POST,
  DELETE_POST,
  DISLIKE_POST,
  EDIT_POST,
  LIKE_POST,
  UPDATE_POST,
} from "../actions/ActionTypes";

export const postReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_POST:
      return state.concat([action.payload]);

    case DELETE_POST:
      return state.filter((post) => post.id !== action.payload.id);

    case EDIT_POST:
      return state.map((post) =>
        post.id === action.id ? { ...post, edit: !post.edit } : post
      );

    case UPDATE_POST:
      return state.map((post) => {
        console.log(post);
        if (post.id === action.id) {
          return {
            ...post,
            title: action.payload.title,
            postDescription: action.payload.postDescription,
            edit: action.payload.edit,
          };
        } else {
          return post;
        }
      });

    case LIKE_POST:
      return state.map((post) => {
        if (post.id === action.id) {
          return {
            ...post,
            likes: post.likes + 1,
          };
        } else {
          return post;
        }
      });

      case DISLIKE_POST:
        return state.map((post) => {
          if (post.id === action.id) {
            return {
              ...post,
              dislikes: post.dislikes + 1,
            };
          } else {
            return post;
          }
        });
        
    default:
      return state;
  }
};

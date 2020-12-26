import { ADD_POST, DELETE_POST, EDIT_POST, UPDATE_POST } from "./ActionTypes";

export const addPost = (id, title, postDescription) => {
  return {
    type: ADD_POST,
    payload: {
      id,
      title,
      postDescription,
      edit: false
    },
  };
};

export const deletePost = (id) => {
  return {
    type: DELETE_POST,
    payload: {
      id,
    },
  };
};

export const editPOst = (id) => {
  return {
    type: EDIT_POST,
    payload: {
      id,
    },
  };
};

export const updatePost = (id, { title, postDescription }) => {
  return {
    type: UPDATE_POST,
    payload: {
      id,
      title,
      postDescription,
    },
  };
};

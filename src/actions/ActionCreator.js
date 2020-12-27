import { ADD_POST, DELETE_POST, EDIT_POST, UPDATE_POST } from "./ActionTypes";

export const addPost = (payload) => {
  return {
    type: ADD_POST,
    payload: {
      id: payload.id,
      title: payload.title,
      postDescription: payload.description,
      edit: payload.edit,
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
    id
  };
};

export const updatePost = (id, payload) => {
  return {
    type: UPDATE_POST,
    id: id,
    payload: {
      title: payload.newTitle,
      postDescription: payload.newDescription,
      edit: payload.edit,
    },
  };
};

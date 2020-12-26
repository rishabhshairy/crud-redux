import { ADD_POST, DELETE_POST } from "./ActionTypes"

export const addPost = (id,title,postDescription) => {
    return {
        type: ADD_POST,
        payload: {
            id,
            title,
            postDescription
        }
    }
}

export const deletePost = (id) => {
    return {
        type: DELETE_POST,
        payload: {
            id
        }
    }
}
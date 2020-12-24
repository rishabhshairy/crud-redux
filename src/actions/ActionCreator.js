import { ADD_POST } from "./ActionTypes"

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
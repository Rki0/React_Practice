import { onRequest } from "../Common";

const initialState = {
  posts: [],
};

const GET_POSTS = "GET_POSTS";

export const getPosts = (post) => ({
  type: GET_POSTS,
  payload: post,
});

export const Post = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      console.log("action", action.payload);
      console.log("state", state);
      console.log("result", [...state.posts, action.payload]);
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
};

// 아니면 이 코드 전체를 createSlice로 전환

// const GET_POSTS = "GET_POSTS";

// // 이 부분을 createAction으로 전환
// export const getPosts = (post) => ({
//   type: GET_POSTS,
//   payload: post,
// });

// const initialState = {
//   posts: [],
// };

// // 이 부분을 createReducer로 전환
// export default function Post(state = initialState, action) {
//   switch (action.type) {
//     case GET_POSTS:
//       return {
//         ...state,
//         posts: action.payload,
//       };

//     default:
//       return state;
//   }
// }

////////////////////////////////
////////////////////////////////

// // createAction과 createReducer 활용
// // 이건 실패함...
// import { createAction, createReducer } from "@reduxjs/toolkit";

// // createAction
// export const getPosts = createAction("post/GET_POSTS", function prepare(post) {
//   return {
//     payload: post,
//   };
// });

// const initialState = {
//   posts: [],
// };

// // createReducer
// const Post = createReducer(initialState, {
//   [getPosts]: (state, action) => (state.posts = action.payload),
// });

// export default Post;

////////////////////////////////
////////////////////////////////

// createSlice 활용
// 액션과 리듀서를 합쳐서 사용 가능
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { onRequest } from "../common/axios";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await onRequest("/posts");
  console.log("response", response);
  if (response.status === 200) {
    return response.data;
  } else {
    console.log("fail");
  }
});

export const postSlice = createSlice({
  // store에 저장할 이름
  name: "posts",

  // 초기 상태
  initialState: {
    posts: [],
  },

  // 액션과 리듀서가 들어가는 부분
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
  },
});

// 액션 함수, 리듀서 내보내기. 이것도 문법적인거라 기억!
// export const { getPosts } = postSlice.actions;
export default postSlice.reducer;

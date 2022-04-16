// import { combineReducers } from "redux";
// import postReducer from "./Post";

// // 만약 createSlice를 사용했다면 여기도 변경해야함.
// const rootReducer = combineReducers({
//   Post,
// });

// export default rootReducer;

import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./Post";

// store를 생성하는 함수
// rootReducer는 이제 필요 없는듯?
// index.js에서 store를 바로 불러서 사용할 것임.
// export default configureStore({
//   reducer: {
//     post: postReducer,
//   },
// });

export const store = configureStore({
  reducer: {
    post: postReducer,
  },
});

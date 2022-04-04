// 액션 타입
const SET_USERNAME = "setAxios/SET_USERNAME";
const SET_NAME = "setAxios/SET_NAME";
const SET_USERID = "setAxios/SET_USERID";

// 액션 생성 함수
export const setUserName = (username) => ({ type: SET_USERNAME, username });
export const setName = (name) => ({ type: SET_NAME, name });
export const setUserId = (id) => ({ type: SET_USERID, id });

// 초기 상태
const initialState = {
  id: "",
  name: "",
  username: "",
};

// 리듀서
export default function setAxios(state = initialState, action) {
  switch (action.type) {
    case SET_USERNAME:
      return {
        ...state,
        username: action.username,
      };

    case SET_NAME:
      return {
        ...state,
        name: action.name,
      };

    case SET_USERID:
      return {
        ...state,
        id: action.id,
      };

    default:
      return state;
  }
}

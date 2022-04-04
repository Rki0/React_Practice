//액션 타입
const SET_USERNAME_INPUT = "useStateForInput/SET_USERNAME_INPUT";
const SET_NAME_INPUT = "useStateForInput/SET_NAME_INPUT";
const SET_USERID_INPUT = "useStateForInput/SET_USERID_INPUT";

// 액션 생성 함수
export const setUsernameInput = (usernameInput) => ({
  type: SET_USERNAME_INPUT,
  usernameInput,
});

export const setNameInput = (nameInput) => ({
  type: SET_NAME_INPUT,
  nameInput,
});

export const setUserIdInput = (idInput) => ({
  type: SET_USERID_INPUT,
  idInput,
});

// 초기 상태
const initialState = {
  idInput: "",
  usernameInput: "",
  nameInput: "",
};

// 리듀서
export default function useStateForInput(state = initialState, action) {
  switch (action.type) {
    case SET_USERNAME_INPUT:
      return {
        ...state,
        usernameInput: action.usernameInput,
      };

    case SET_NAME_INPUT:
      return {
        ...state,
        nameInput: action.nameInput,
      };

    case SET_USERID_INPUT:
      return {
        ...state,
        idInput: action.idInput,
      };

    default:
      return state;
  }
}

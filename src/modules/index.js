import { combineReducers } from "redux";
import setAxios from "./setAxios";
import useStateForInput from "./useStateForInput";

const rootReducer = combineReducers({
  setAxios,
  useStateForInput,
});

export default rootReducer;

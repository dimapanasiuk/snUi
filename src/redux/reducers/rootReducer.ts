import counterReducer from "./counterReducer";
import loginAc from './loginReducer';

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  counter: counterReducer,
  login: loginAc,
});

export default rootReducer;

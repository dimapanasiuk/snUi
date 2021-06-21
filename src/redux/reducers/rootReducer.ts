import loginAc from './loginReducer';

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  login: loginAc,
});

export default rootReducer;

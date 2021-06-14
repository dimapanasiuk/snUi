import {LOGIN_AC} from "../constants/counterConstants";
  
  const initialState = { username: '', password: '', email: '', todo: []  };
  
  export type TState = typeof initialState;
  
  const counterReducer = (state: TState = initialState, action: any) => {
    switch (action.type) {
      case LOGIN_AC:
        return { ...action?.data };
      default:
        return { ...state };
    }
  };
  
  export default counterReducer;
  
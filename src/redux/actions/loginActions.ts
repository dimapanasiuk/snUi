
import { LOGIN_AC } from "../constants";
  
export const loginAc = (data: any) =>{
    return {
    type: LOGIN_AC,
    data
  } as const};

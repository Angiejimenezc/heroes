import { AuthContext } from "./AuthContext";
import { useReducer } from "react";
import { authReducer } from "./authReducer";

import { types } from "../types/types";

const initialState = {
  logged: false,
};

// eslint-disable-next-line react/prop-types
export const AuthProvider = ( { children } ) => {

  const [ authState , dispatch ] = useReducer(authReducer, initialState);
  
  const login = ( name = '') => {    
    const action = {
      type: types.login,
      payload: {
        id: 123,
        name: name

    }
  }
    dispatch(action)
  }
    


  return (
    <AuthContext.Provider value={{
      ...authState,
      login: login
    }}>
    
      {children}
    </AuthContext.Provider>
  );
}
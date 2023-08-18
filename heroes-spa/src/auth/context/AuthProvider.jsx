import { AuthContext } from "./AuthContext";
import { useReducer } from "react";
import { authReducer } from "./authReducer";

const initialState = {
  logged: false,
};

// eslint-disable-next-line react/prop-types
export const AuthProvider = ( { children } ) => {

  const [ authState , dispatch ] = useReducer(authReducer, initialState);
  
  console.log(authState , dispatch);


  return (
    <AuthContext.Provider value={{}}>
      {children}
    </AuthContext.Provider>
  );
}
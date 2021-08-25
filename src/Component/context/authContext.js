// Import module
import { authReducer } from "../reducers/authReducer";
import { apiUrl } from "./constanst";
import { LOCAL_STORAGE_TOKEN_NAME } from "./constanst";

import axios from "axios";
import React, { createContext, useReducer } from "react";

// Constant
export const authContext = createContext();

const authContextProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {
    authLoading: true,
    isAuthenticated: false,
    user: null,
  });

  // Login
  const loginUser = async (userForm) => {
    try {
      const response = await axios.post(`${apiUrl}/auth/login`, userForm);

      if (response.data.success)
        localStorage.setItem(
          LOCAL_STORAGE_TOKEN_NAME,
          response.data.accessToken
        );

      return response.data;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: error.message };
    }
  };

  // Context data
  const authContextData = { loginUser };

  // Return provider
  return (
    <authContext.Provider value={authContextData}>
      {children}
    </authContext.Provider>
  );
};

export default authContextProvider;

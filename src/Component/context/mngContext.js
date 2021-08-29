// Import modules
import axios from "axios";
import React, { createContext, useReducer } from "react";

// Import Constant
import { apiUrl } from "./constanst";

// Export Constant
export const serviceContext = createContext();

// Provider
const MngContextProvider = ({ children }) => {
  // Insert service
  const insertservice = async (newService) => {
    try {
      const response = await axios.post(
        `${apiUrl}/service/insertservice`,
        newService
      );

      return response.data;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: error.message };
    }
  };

  // Context data
  const serviceContextData = { insertservice };

  // Return Provider
  return (
    <MngContext.Provider value={serviceContextData}>
      {children}
    </MngContext.Provider>
  );
};

export default MngContextProvider;

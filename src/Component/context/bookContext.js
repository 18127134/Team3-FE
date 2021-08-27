// Import modules
import React, { createContext, useReducer } from "react";
import { bookReducer } from "../reducers/bookReducer";

// Import Constant
import {
  CHOOSE_DATE_BOOKING,
  CHOOSE_SERVICES_BOOKING,
  SET_PAYMENT,
  TOTAL_PRICE,
} from "./constanst";

// Export Constant
export const bookContext = createContext();

// Provider
const BookContextProvider = ({ children }) => {
  // Reducer
  const [bookState, dispatch] = useReducer(bookReducer, {
    date: null,

    people: null,
    time: null,
    service: [],
    totalPrice: 0,

    payment: null,
  });

  // Choose Date
  const chooseDate = (data) => {
    dispatch({
      type: CHOOSE_DATE_BOOKING,
      payload: data,
    });
  };

  // Choose Services
  const chooseService = (data) => {
    dispatch({
      type: CHOOSE_SERVICES_BOOKING,
      payload: data,
    });
  };

  // Get Booking
  const getBook = () => bookState;

  // Set Total Price
  const totalPrice = (price) => {
    dispatch({
      type: TOTAL_PRICE,
      payload: price,
    });
  };

  // Set Payment
  const setPayment = (payment) => {
    dispatch({
      type: SET_PAYMENT,
      payload: payment,
    });
  };

  // Context data
  const bookContextData = {
    setPayment,
    totalPrice,
    getBook,
    chooseDate,
    chooseService,
  };

  // Return provider
  return (
    <bookContext.Provider value={bookContextData}>
      {children}
    </bookContext.Provider>
  );
};

export default BookContextProvider;

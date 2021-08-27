// Import Constant
import {
  CHOOSE_DATE_BOOKING,
  CHOOSE_SERVICES_BOOKING,
  SET_PAYMENT,
  TOTAL_PRICE,
} from "../context/constanst";

// Export Constant
export const bookReducer = (state, action) => {
  const {
    type,
    payload: { date, people, time },
  } = action;

  switch (type) {
    case CHOOSE_DATE_BOOKING:
      return {
        ...state,
        date,
        people,
        time,
      };

    case CHOOSE_SERVICES_BOOKING:
      return {
        ...state,
        service: action.payload,
      };

    case TOTAL_PRICE:
      return {
        ...state,
        totalPrice: action.payload,
      };

    case SET_PAYMENT:
      return {
        ...state,
        payment: action.payload,
      };

    default:
      break;
  }
};

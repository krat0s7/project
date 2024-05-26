// reducer.js
import {
    ADD_ORDER,
    UPDATE_ORDER,
    DELETE_ORDER,
} from './actionTypes';

const initialState = {
    orders: [],
    loading: false,
    error: null
};

const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_ORDER:
        return {
          ...state,
          orders: [...state.orders, action.payload]
        };
      case DELETE_ORDER:
        return {
          ...state,
          orders: state.orders.filter(order => order.id !== action.payload)
        };
      case UPDATE_ORDER:
        return {
          ...state,
          orders: state.orders.map(order =>
            order.id === action.payload.id ? { ...order, quantity: order.quantity + 1 } : order
          )
        };
      default:
        return state;
    }
  };
  

export default ordersReducer;

import {
  ADD_ORDER,
  UPDATE_DELETE_ORDER,
  UPDATE_ADD_ORDER,
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
      const existingOrderIndex = state.orders.findIndex(order => order.id === action.payload.id);

      if (existingOrderIndex === -1) {
        return {
          ...state,
          orders: [...state.orders, action.payload]
        };
      } else {
        const updatedOrders = state.orders.map((order, index) =>
          index === existingOrderIndex
            ? { ...order, quantity: order.quantity + 1 }
            : order
        );
        return {
          ...state,
          orders: updatedOrders
        };
      }
    case DELETE_ORDER:
      return {
        ...state,
        orders: state.orders.filter(order => order.id !== action.payload)
      };
    case UPDATE_ADD_ORDER:
      return {
        ...state,
        orders: state.orders.map(order =>
          order.id === action.payload
            ? { ...order, quantity: order.quantity + 1 }
            : order
        )
      };
    case UPDATE_DELETE_ORDER:
      return {
        ...state,
        orders: state.orders.map(order =>
          order.id === action.payload && order.quantity > 0
            ? { ...order, quantity: order.quantity - 1 }
            : order
        )
      };
    default:
      return state;
  }
};

export default ordersReducer;

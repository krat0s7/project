import { configureStore } from '@reduxjs/toolkit';
import ordersReducer from './state/orders/reducer';

const store = configureStore({
  reducer: {
    orders: ordersReducer
  }
});

export default store;

// store.js
import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import ordersReducer from './state/orders/reducer';

const store = configureStore({
  reducer: {
    orders: ordersReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;

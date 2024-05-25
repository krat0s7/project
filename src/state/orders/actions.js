// actions.js
import {
    ADD_ORDER,
    UPDATE_ORDER,
    DELETE_ORDER,
} from './actionTypes';

export const addOrder = (order) => ({
    type: ADD_ORDER,
    payload: order
});

export const updateOrder = (updatedOrder) => ({
    type: UPDATE_ORDER,
    payload: updatedOrder 
});

export const deleteOrder = (orderId) => ({
    type: DELETE_ORDER,
    payload: orderId
});

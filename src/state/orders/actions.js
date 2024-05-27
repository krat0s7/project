import {
    ADD_ORDER,
    DELETE_ORDER,
    UPDATE_ADD_ORDER,
    UPDATE_DELETE_ORDER
} from './actionTypes';

export const addOrder = (order) => ({
    type: ADD_ORDER,
    payload: order
});

export const deleteOrder = (orderId) => ({
    type: DELETE_ORDER,
    payload: orderId
});

export const updateAddOrder = (orderId) => ({
    type: UPDATE_ADD_ORDER,
    payload: orderId
});

export const updateDeleteOrder = (orderId) => ({
    type: UPDATE_DELETE_ORDER,
    payload: orderId
});

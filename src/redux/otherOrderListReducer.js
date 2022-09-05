import {ordersAPI} from "../api/api";
import {newMyOrderAC} from "./myOrderListReducer";

const NEW_OTHER_ORDER = 'NEW_OTHER_ORDER';
const LOAD_OTHER_ORDERS = 'LOAD_OTHER_ORDERS';

let initialState = {
    orders: [

    ],
};

const otherOrderListReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_OTHER_ORDER: {
            return {
                ...state,
                orders: [...state.orders, action.order],
            }
        }
        case LOAD_OTHER_ORDERS: {
            return { ...state, orders: action.orders}
        }
        default: {
            return state;
        }

    }
}

export const newOtherOrderAC = (order) => {
    return {type: NEW_OTHER_ORDER, order }
}
export const addOrdersAC = (orders) => {
    return {type: LOAD_OTHER_ORDERS, orders }
}

export const loadAllOrders = (token) => {
    return (dispatch) => {
        ordersAPI.getOrders(token).then(data => {
            dispatch(addOrdersAC(data.order));
        })
    }
}
export const makeNewOrder = (order, token) => {
    return (dispatch) => {
        ordersAPI.addOrder(order, token).then(data => {
            dispatch(newOtherOrderAC(data.order));
            dispatch(newMyOrderAC(data.order))
        })
    }
}

export default otherOrderListReducer;
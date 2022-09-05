import {ordersAPI} from "../api/api";
import {loadAllOrders} from "./otherOrderListReducer";

const LOAD_MY_ORDERS = 'LOAD_MY_ORDERS'
const NEW_MY_ORDER = 'NEW_MY_ORDER';

let initialState = {
    orders: [

    ],
};

const myOrderListReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_MY_ORDER:
            return{...state,
                orders: [...state.orders, action.order],}
        case LOAD_MY_ORDERS: {
            return { ...state, orders: action.orders}
        }
        default: {
            return state;
        }

    }
}

export const addMyOrdersAC = (orders) => {
    return {type: LOAD_MY_ORDERS, orders }
}

export const newMyOrderAC = (order) => {
    return {type: NEW_MY_ORDER, order }
}

export const loadMyOrders = (_id, token) => {
    return (dispatch) => {
        ordersAPI.getOrders(token).then(data => {
            let arr = []
            data.order.map(o => {if(o.owner === _id){arr.push(o)}})
            dispatch(addMyOrdersAC(arr));
        })
    }
}
export const deleteOrder = (_id, token) => {
    return (dispatch) => {
        ordersAPI.deleteOrder(_id, token).then(data => {
            dispatch(loadMyOrders(data.deleted.owner, token))
            dispatch(loadAllOrders(token))
        })
    }
}

export default myOrderListReducer;
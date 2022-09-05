const SET_OTHER_ORDER_TYPE = 'SET_OTHER_ORDER_TYPE';

let initialState = {
    myOrders: false,
};

const changeOrderListReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_OTHER_ORDER_TYPE: {
            return { ...state, myOrders: !state.myOrders };
        }
        default: {
            return state;
        }

    }
}


export const setOtherOrderTypeAC = (movies) => {
    return {type: SET_OTHER_ORDER_TYPE, movies }
}

export default changeOrderListReducer;
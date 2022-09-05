import {userAPI} from "../api/api";
import jwt_decode from "jwt-decode";
import {loadMyOrders} from "./myOrderListReducer";

const SIGN_IN = 'SIGN_IN';
const SIGN_OUT = 'SIGN_OUT';

let initialState = {
    isSignIn: false,
    token: '',
    _id: ''
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN: {
            state.isSignIn = true;
            state.token = action.userInfo.token
            state._id = action.userInfo._id
            return { ...state};
        }
        case SIGN_OUT: {
            state.isSignIn = false;
            state.token = ''
            state._id = ''
            return { ...state};
        }
        default: {
            return state;
        }

    }
}

export const signInAC = (userInfo) => {
    return {type: SIGN_IN, userInfo }
}
export const signOutAC = () => {
    return {type: SIGN_OUT }
}

export const signIn = (userData) => {
    return (dispatch) => {
        userAPI.signIn(userData).then(data => {
            const userInfo = {
                token: data.token,
                _id: jwt_decode(data.token)._id,
            }
            dispatch(signInAC(userInfo));
            dispatch(loadMyOrders(userInfo._id, userInfo.token))
        })
    }
}
export const signUp = (userData) => {
    return (dispatch) => {
        userAPI.signUp(userData).then(data => {
            const userSignInInfo = {
                email: userData.email,
                password: userData.password,
            }
            dispatch(signIn(userSignInInfo))
        })
    }
}


export default userReducer;
import {applyMiddleware, combineReducers, createStore} from "redux";
import myOrderListReducer from "./myOrderListReducer";
import otherOrderListReducer from "./otherOrderListReducer";
import changeOrderListReducer from "./changeOrderListReducer";
import thunkMiddlewere from "redux-thunk";
import userReducer from "./userReducer";

let rootReducer = combineReducers({
    myOrderListReducer,
    otherOrderListReducer,
    changeOrderListReducer,
    userReducer,
});

let store = createStore(rootReducer, applyMiddleware(thunkMiddlewere));
window.store = store;

export default store;
import React, {useEffect} from 'react';
import MyOrders from "../MyOrders/MyOrders";
import AllOrders from "../AllOrders/AllOrders";


const OrderList = () => {
    return(
        <>
            <AllOrders />
            <MyOrders />
        </>
    )
}

export default OrderList;
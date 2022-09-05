import React, {useEffect} from 'react';
import {Grid, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {addOrdersAC, loadAllOrders} from "../../../redux/otherOrderListReducer";
import OrderItem from "../OrderList/OrderItem/OrderItem";

const OrderList = () => {
    const dispatch = useDispatch();
    const order = useSelector(state => {
        return  state.otherOrderListReducer.orders
    })
    const token = useSelector(state => {
        return  state.userReducer.token
    })
    useEffect(() => {
        if(token!=='') {
            dispatch(loadAllOrders(token))
        }else{
            dispatch(addOrdersAC([]))
        }
    }, [])
    // const isMyOrders = false
    debugger
    let orderItems = order.map(O => <OrderItem isMyOrders={false} order={O}/>)

    return(
        <Grid container spacing={2}>
            {order.length===0 ?
                <Typography variant="h4" gutterBottom component="div">
                    Для просмотра заказов зарегистрируйтесь
                </Typography>
                :
                <>
                    {orderItems}
                </>}
            {/*{orderItems}*/}
        </Grid>
    )
}

export default OrderList;
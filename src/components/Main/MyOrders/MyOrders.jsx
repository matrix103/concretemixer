import React, {useEffect} from 'react';
import {Grid, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {addMyOrdersAC, deleteOrder, loadMyOrders} from "../../../redux/myOrderListReducer";
import OrderItem from "../OrderList/OrderItem/OrderItem";

const OrderList = () => {
    const dispatch = useDispatch();
    const _id = useSelector(state => {
        return  state.userReducer._id
    })
    const token = useSelector(state => {
        return  state.userReducer.token
    })
    const isSignIn = useSelector(state => {
        return  state.userReducer.isSignIn
    })
    const deleteOrderFunc = (id) =>{
        dispatch(deleteOrder(id, token))
    }
    useEffect(() => {
        if(token!=='') {
            dispatch(loadMyOrders(_id, token))
        }
        else{
            dispatch(addMyOrdersAC([]))
        }
    }, [])
    const order = useSelector(state => {
        return  state.myOrderListReducer.orders
    })

    let orderItems = order.map(O => <OrderItem isMyOrders={true} buttonAction={deleteOrderFunc}  order={O}/>)
    debugger
    return(
        <Grid container spacing={2}>

            {order.length===0 ?
                isSignIn ?
                        <Typography variant="h4" gutterBottom component="div">
                            Вы не сделали ни одного заказа
                        </Typography>
                    :
                        <Typography variant="h4" gutterBottom component="div">
                            Для просмотра заказов зарегистрируйтесь
                        </Typography>
                :
                <>
                    {orderItems}
                </>}
        </Grid>
    )
}

export default OrderList;
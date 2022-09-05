import React from 'react';
import OrderButtons from "./OrderButtons/OrderButtons";
import {Grid} from "@mui/material";
import MyOrders from "./MyOrders/MyOrders";
import AllOrders from "./AllOrders/AllOrders";
import {Route, Routes} from "react-router-dom";

const Main = () => {

    return(
        <Grid container sx={{mt: 0}} spacing={2}>
            <Grid item xs={8}>
                <Routes>
                    <Route path='/allorders' element={<AllOrders />}/>
                    <Route path='/myorders' element={<MyOrders />}/>
                </Routes>
            </Grid>
            <Grid item xs={4}>
                <OrderButtons />
            </Grid>
        </Grid>
    )
}

export default Main;
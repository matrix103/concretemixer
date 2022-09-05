import React from 'react';
import {Button, Stack} from "@mui/material";
import NewOrderForm from "../NewOrderForm/NewOrderForm";
import {NavLink} from "react-router-dom";

const OrderButtons = () => {
    return(
        <Stack spacing={2}>
            <NavLink to="/myorders">
                <Button variant="contained">Показать список моих заказов</Button>
            </NavLink>
            <NavLink to="/allorders">
                <Button variant="contained">Показать список всех заказов</Button>
            </NavLink>
            <NewOrderForm />
        </Stack>
    )
}

export default OrderButtons;


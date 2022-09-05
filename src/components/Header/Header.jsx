import React from 'react';
import {AppBar, Button, Toolbar, Typography} from "@mui/material";
import User from "./User/User";
import {useSelector} from "react-redux";

const Header = () => {
    return(
        <AppBar position="static" color="background" >
            <Toolbar sx={{width: "75%",  mx: "auto"}}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Мешалка
                </Typography>
                <User />
            </Toolbar>
        </AppBar>
    )
}

export default Header
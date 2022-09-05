import React from 'react';
import SignIn from "./SingIn/SingIn";
import SignUp from "./SignUp/SingUp";
import {Button} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {signOutAC} from "../../../redux/userReducer";

const User = () => {
    const isSignIn = useSelector(state => {
        return state.userReducer.isSignIn
    })
    const dispatch = useDispatch();
    const signOut = () =>{

        dispatch(signOutAC())
    }
    return (
        <>
            {isSignIn ?
                <Button onClick={signOut} variant="contained">
                    Выйти
                </Button>
                :
                <>
                    <SignIn />
                    <SignUp />
                </>
            }
        </>
    );
}

export default User;

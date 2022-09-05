import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import {DialogActions, DialogContent, DialogContentText, TextField} from "@mui/material";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {newMyOrderAC} from "../../../redux/myOrderListReducer";
import {makeNewOrder, newOtherOrderAC} from "../../../redux/otherOrderListReducer";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const NewOrderForm = (props) => {
    const [open, setOpen] = React.useState(false);
    const isSignIn = useSelector(state => {
        return  state.userReducer.isSignIn
    })
    const token = useSelector(state => {
        return  state.userReducer.token
    })
    const handleOpen = () => {
        if(isSignIn){
            setOpen(true);
        }
    }
    const handleClose = () => setOpen(false);

    const dispatch = useDispatch();
    const [addressOrder, setAddressOrder] = useState('');
    const [typeOrder, setTypeOrder] = useState('');
    const [costOrder, setCostOrder] = useState('');

    const handleInputAddress = (e) => {
        setAddressOrder(e.target.value)
    }
    const handleInputType = (e) => {
        setTypeOrder(e.target.value)
    }
    const handleInputCost = (e) => {
        setCostOrder(e.target.value)
    }

    const handleSubmit = (e) => {
        handleClose();
        e.preventDefault();
        const order = {
            date: "2022/07/03",
            description: "Нужно перевести бетон",
            email: "synkov@mail.ru",
            telephone: "+79042176394",
            adress: addressOrder,
            machineryType: typeOrder
        }
        dispatch(makeNewOrder(order, token))
    }
    return (
        <>
            <Button onClick={handleOpen} variant="contained">Создать заказ</Button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="NewOrderForm"
            >
                <form onSubmit={handleSubmit}>
                <Box sx={style}>
                    <DialogContent>
                        <DialogContentText id="modal-modal-title" variant="h6" component="h2">
                            Создание заказа
                        </DialogContentText>
                        <TextField
                            id="adress"
                            type="address"
                            fullWidth
                            value={addressOrder}
                            onChange={handleInputAddress}
                            placeholder={'Введите адрес заказа'}
                        />
                        <TextField
                            id="type"
                            type="type"
                            fullWidth
                            value={typeOrder}
                            onChange={handleInputType}
                            placeholder={'Введите тип услуги'}
                        />
                        <TextField
                            id="cost"
                            type="cost"
                            fullWidth
                            value={costOrder}
                            onChange={handleInputCost}
                            placeholder={'Введите стоимость'}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button type="button"  onClick={handleSubmit} >отправить</Button>
                    </DialogActions>
                </Box>
                </form>
            </Modal>
        </>
    );
}

export default NewOrderForm;
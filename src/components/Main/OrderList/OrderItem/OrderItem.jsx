import React from 'react';
import {Grid, Card, CardContent, Typography, Box, CardActions, Button} from "@mui/material";
import Modal from '@mui/material/Modal';


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

const OrderItem = (props) => {
    const buttonAction = () =>{

        props.isMyOrders ? props.buttonAction(props.order._id) : handleOpen()
    }
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <>
            <Grid item xs={12}>
                <Card sx={{ display: 'flex' }}>
                    <CardContent sx={{ display: 'flex', flex: '1 0 auto'  }}>
                        <Box sx={{ flex: '1 0 auto', my: 'auto' }}>
                            <Typography>
                                {props.order.date}
                            </Typography>
                        </Box>
                        <Box sx={{ flex: '1 0 auto'  }}>
                            <Typography>
                                {props.order.adress}
                            </Typography>
                        </Box>
                        <Box sx={{ flex: '1 0 auto'  }}>
                            <Typography>
                                Вид техники
                            </Typography>
                            <Typography>
                                {props.order.machineryType}
                            </Typography>
                        </Box>
                        <Box sx={{ flex: '1 0 auto'  }}>
                            <Typography>
                                Стоимость
                            </Typography>
                            <Typography>
                                {props.order.price} тр
                            </Typography>
                        </Box>
                    </CardContent>
                    <CardActions>
                        <Button onClick={buttonAction} size="small" color="primary">
                            Share
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {props.order.date}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {props.order.adress}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {props.order.description}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {props.order.email}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {props.order.telephone}
                    </Typography>
                </Box>
            </Modal>
        </>
    )
}

export default OrderItem;
import * as axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3000/',
});

export const ordersAPI = {
    getOrders(token) {
        return instance.get(`http://localhost:3000/orders`,{headers: {
                Authorization: 'Bearer ' + token
            }} )
            .then(response => {
                return response.data;
            })
    },
    addOrder(order, token) {
        return instance.post(`http://localhost:3000/order`,order, {headers: {
                Authorization: 'Bearer ' + token
            }})
            .then(response => {
                return response.data;
        })
    },
    deleteOrder(id, token){
        return instance.delete(`http://localhost:3000/order/${id}`, {headers: {
                Authorization: 'Bearer ' + token
            }})
            .then(response => {
                return response.data;
            })
    }
}

export const userAPI = {
    signUp(userData) {
        return instance.post(`http://localhost:3000/signup`, userData)
    },
    signIn(userData) {
        return instance.post(`http://localhost:3000/signin`, userData)
            .then(response => {
                return response.data;
            })
    }
}

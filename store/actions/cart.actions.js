import { API_URL_DATABASE } from "../../assets/dataBase";

export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const CONFIRM_CART = 'CONFIRM_CART';

export const addItem = (item) => ({
    type: ADD_ITEM,
    item,

});

export const removeItem = (itemID) => ({
    type: REMOVE_ITEM,
    itemID,

});

export const confirmCart = (payload) => {
    return async dispach => {
        try {
            const response = await fetch (`${API_URL_DATABASE}/Midata.json`,{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    date: Date.now(),
                    items: payload,
                }),
            }) 

            const result = await response.json();
            console.log(result);
            dispach({
                type: CONFIRM_CART,
            })
        } catch (error) {
            console.log(error);
        }
    }
}
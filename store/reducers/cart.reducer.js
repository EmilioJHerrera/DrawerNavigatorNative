import { CART } from "../../data/cart";


const INITIAL_STATE = {
    items: [ CART],
    total: 567
};

const CartReducer = (state = INITIAL_STATE, action) =>{
    return state;
}

export default CartReducer;
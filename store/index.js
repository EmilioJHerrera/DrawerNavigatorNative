import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import ItemsReducer from './reducers/items.reducer';
import CartReducer from './reducers/cart.reducer';
import authReducer from './reducers/auth.reducer';

const rootReducer = combineReducers({
    items: ItemsReducer,
    cart: CartReducer,
    auth: authReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
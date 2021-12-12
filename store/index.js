import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import ItemsReducer from './reducers/items.reducer';
import CartReducer from './reducers/cart.reducer';

const rootReducer = combineReducers({
    items: ItemsReducer,
    cart: CartReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
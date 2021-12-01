import {createStore, combineReducers} from 'redux';

import ItemsReducer from './reducers/items.reducer';

const rootReducer = combineReducers({
    items: ItemsReducer,
});

export default createStore(rootReducer);
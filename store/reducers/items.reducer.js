import { ADD_ITEM, REMOVE_ITEM } from "../actions/items.action";


const initialState ={
    list: [
    {id: 1, name: 'Salario', amount: '1.000', type: 'income', category: 'salario'},
    {id: 2, name: 'Regalo', amount: '500', type: 'outcome', category: 'extras'},
    {id: 3, name: 'Compras', amount: '40', type: 'outcome', category: 'ocio'},
    {id: 4, name: 'Freelo', amount: '20', type: 'income', category: 'pension'},
    ],
}


const ItemsReducer = (state = initialState, action) => {
 
 switch (action.type){
     case ADD_ITEM:
         return {
            ...state,
             list: [...state.list, action.payload]
         }
        case REMOVE_ITEM:
            return {
                ...state,
                list: state.list.filter(item => item.id !== action.payload)
            }
         default:
             return state;
 }
 
 
    return state;
}


export default ItemsReducer;
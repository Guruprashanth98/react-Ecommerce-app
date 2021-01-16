import {applyMiddleware, createStore} from 'redux';
import {allReducers} from '../Reducers/combinedReducers'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from  'redux-thunk'

const readFromLocalStorage = ()  =>{
    const data = JSON.parse(localStorage.getItem("cart_products"))
    return data === null ? [] : data 
}

const stateFromLocalStorage = {
    product : [],
    cartProducts:readFromLocalStorage()
}
export const store = createStore(allReducers, stateFromLocalStorage ,composeWithDevTools(applyMiddleware(thunk)))

const saveToLocalStorage = (state) =>{
    const {cartProducts} = state 
    localStorage.setItem("cart_products",JSON.stringify(cartProducts)) 
}





store.subscribe(() => saveToLocalStorage(store.getState()))
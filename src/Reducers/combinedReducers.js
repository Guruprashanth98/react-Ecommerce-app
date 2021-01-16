import {combineReducers} from 'redux'
import {cartProductsReducer} from './cartProductsReducer'
import {productReducer} from './productReducer'
import {toggleCartDisplayReducer} from './toggleCartDisplayReducer'

export const allReducers = combineReducers({
    product: productReducer,
    cartProducts: cartProductsReducer,
    cartDisplay:  toggleCartDisplayReducer
})
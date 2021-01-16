import * as  type  from './type'
import  axios from 'axios'

export const addToCart = (payload,count) => {
    return {
        type: type.addToCart,
        payload : {
            product:payload,
            count
        }
    }
}

export const addProduct  = () => {
    return (dispatch) => {
        axios.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
        .then( response => {
            dispatch({
                type: type.addProduct,
                payload: response.data
            })
        })
    }
}

export const updateCart = (payload,count) =>{
    return{
        type: type.updateCart,
        payload: {
            product: payload,
            count
        }
    }
}

export const replaceCart = (payload,count) =>{
    return{
        type: type.replaceCart,
        payload: {
            product: payload,
            count
        }
    }
}

export const deleteCart = (payload) =>{
    return{
        type: type.deleteCart,
        payload
    }
}

export const toggleCartDisplay = () =>{
    return {type: type.toggleCartDisplay}
}
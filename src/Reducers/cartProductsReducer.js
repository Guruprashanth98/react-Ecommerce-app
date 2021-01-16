import * as type from '../Action/type'

export const cartProductsReducer = (state = [],action) => {
    switch(action.type){
        case type.addToCart:
            let product = action.payload.product
            product.count = action.payload.count
            return [...state, product]
        case type.updateCart:
            let item = state.find(item=> item.id === action.payload.product.id)    
            let newState = state.filter(item => item.id  !== action.payload.product.id)
            item.count = action.payload.count + item.count
            newState.push(item)
            return [...newState]
        case type.replaceCart:
            let replaceItem = state.find(item=> item.id === action.payload.product.id)    
            let newReplaceState = state.filter(item => item.id  !== action.payload.product.id)
            replaceItem.count = action.payload.count
            newReplaceState.push(replaceItem)
            return [...newReplaceState]
        case type.deleteCart:
            let newDeleteState = state.filter(item => item.id  !== action.payload.id)
            return [...newDeleteState]
        default:
            return state
    }
}
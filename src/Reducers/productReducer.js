import * as type from '../Action/type'
export const productReducer  = (state = [],action) => {
    switch(action.type){
        case type.addProduct:
            return [...state,...action.payload];
        default:
            return state
    }
}
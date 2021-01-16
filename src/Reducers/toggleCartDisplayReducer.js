import * as type from '../Action/type'

export const toggleCartDisplayReducer = (state = false,action)=>{
    switch(action.type){
        case type.toggleCartDisplay:
            return !state
        default:
            return state
    }
}
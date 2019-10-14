import { INITCITY,UPDATECITY } from '../constants/city'

export default function city(state={},action){
    switch(action.type){
        case INITCITY:
            return state=action.data
        case UPDATECITY:
            return state=action.data
        default:
            return state
}
}
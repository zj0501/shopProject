import { KEYWORDS } from '../constants/search'

export default function search(state='',action){
    switch(action.type){
        case KEYWORDS:
            return state=action.data
        default:
            return state
    }
}
import { KEYWORDS } from '../constants/search'

export default function search(data){
    return{
        type:KEYWORDS,
        data
    }
}
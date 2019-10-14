import React, { useState } from 'react'
import FootNavs from '../../components/FootNavs'
 
export default function Shop(){
    const [count,setCount]=useState(0)
    function addHandler(){
        setCount(count+1)
    }
    return(
        <div>
            Shop
            {count}
            <button onClick={ addHandler }>Add</button>
            <FootNavs />
        </div>
        
    )

}
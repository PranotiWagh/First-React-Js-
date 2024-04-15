import { useState } from "react";
const Hoc=(WrappedComponent)=>
{
    return function comp(){
        let[price,setPrice]=useState(20);

    let Increase =()=>{
        setPrice(price+40);
    }
    return(
        <WrappedComponent price={price} increase={Increase}/>
    )
    }
    
}
export default Hoc;
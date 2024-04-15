//We use refs to target a perticular element
//Change made with refs directily affect the real DOM
//useRef() will be used to create a ref
import { useRef } from "react";
const Reference=()=>
{
    let h1ref =useRef()//step 1
    let h2ref=useRef()

    let changeColor =()=>
    {
        h1ref.current.style.color="red"
        h2ref.current.style.background="yellow"
    }
    return(
        //2 step
        <>
        <h1 ref={h1ref}>Let us learn refs</h1>
        <button onClick={changeColor}>Change Color</button>
        <h2 ref={h2ref}>Reference</h2>
        </>
    )
}
export default Reference;
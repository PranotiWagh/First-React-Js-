// to recive data from contextapi we use useContexy()
import { useContext} from "react";
import {ContextApi} from "./NewContext"; 
const NewConsumer=()=>
{
let data=useContext(contextApi)
console.log(data);

return(
    <h1>{data}</h1>
)
}
export default NewConsumer;

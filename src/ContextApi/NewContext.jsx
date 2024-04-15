//1. Create context
//2. wrap the consumer component with provider
//3. send data
import { createContext} from "react";
import NewConsumer from "./NewConsumer";


const { createContext } = require("react");

export let ContextApi=createContext();   //1 step
const NewContext =()=>{
    return(
        ContextApi.Provider value="hello i am using context api">
        <NewConsumer/>
        </ContextApi.Provider>
    )


}
export default NewContext;
const CounterContext =()=>
{
    let [count,setCount] = useState(0)

    let Increment ()=>{
        setCount(count+1)
    }
    return{
        CounterApi.Provider value=[{count,increment}]
        <counter/>
    }
}
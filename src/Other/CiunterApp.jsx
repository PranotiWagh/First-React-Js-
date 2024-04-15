const CounterApp =()=>{
    let [count,setCount] = useState(0) {
        
    }

    return(
        <>
        <h1>Counter App</h1>
        <h2>{count}</h2>
        <button>Increment</button>
        <button>Decrement</button>
        <button>Reset</button>
        </>
    )
}
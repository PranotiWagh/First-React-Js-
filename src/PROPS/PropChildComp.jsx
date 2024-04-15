const PropChildComp  = (props)=>{
    console.log(props);
    console.log(props.name);

    let{name}=props;
return(
    <main>
        <h1>My name is (props.name)</h1>
    <p>My Salary is(props.salary)</p>
    </main>
    
)
}
export default PropsParentComp;

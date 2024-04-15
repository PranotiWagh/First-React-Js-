const DefaultPropComp =()=>{
    console.log(props);
    let {name,salary,company} =props;
    return(
        <>{/*third way */}
            <h3>{name || "gopika"}</h3>
            <h3>{salary || 235435}</h3>
            <h3>{company || "asd"}</h3>
        </>
    )
}
export default DefaultPropComp;

//firsta way
//ComponentName defaultProps={
//    propname :"default value"
//}

DefaultPropComp.defaultProps ={
    name :"pranoti",
    salary :30234412,
    company :"abc"
}
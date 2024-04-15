import Proptype from 'prop-types'
const ProptypeComp =(props)=>{
    let{name}=props;
    return(
        <>
        <p>{name}</p>
        </>
    )
}
export default ProptypeComp;

ProptypeComp.propType= {
    name:Proptype.string
}
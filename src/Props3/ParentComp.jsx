import ButtonComp from "./ButtonComp"
import ProptypeComp from "./ProptypeComp";
import Team from "./Team";
const ParentComp =()=>{
    return(
        <>
        {/*<Team>Hello we are team india and we reached finals</Team>
        <Team>Hello we are team austrila and we won finals</Team>
        <Team>we are team nepal nad we did not play </Team>
        <ButtonComp>Submit</ButtonComp>
        <ButtonComp>Login</ButtonComp> */}
        {/*<DefaultPropComp name="pranoti" salary={12343546567} company="xyz"></DefaultPropComp> 
        <DefaultPropComp name="gopika" salary={9876543221} ></DefaultPropComp> */}

        {/*<DefaultPropComp name='sakshi'></DefaultPropComp>*/}
        <ProptypeComp name="PRANOTI"/>
        </>
    )


}
export default ParentComp
//first way
{/*ComponentName.defaultProps={
    propname : "def"
}*/}
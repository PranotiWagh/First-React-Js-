import {Fragement} from "react";

const PropMap = (props) =>{
    console.log(props);

    let {data} =props;

    return(
        <>
        {data.map((Value,index) => {
            return(
                <Fragement key={index}>
                    <ul>
                        <li>{value}</li>
                        </ul></Fragement>
                );

        })}
        </>
        
    );
};
export default PropMap;
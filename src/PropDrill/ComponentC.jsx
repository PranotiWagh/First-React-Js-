// ComponentC.jsx
import React from "react";

const ComponentC = (props) => {
    console.log(props);
    let { music } = props;
    return (
        <>
            <h2>{music} received</h2>
        </>
    )
}

export default ComponentC;

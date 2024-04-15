import React from "react";
import ComponentB from "./ComponentB";

const ComponentA = () => {
    let instrument = "Guitar";

    return (
        <>
            <h2>CompA is sending {instrument} to compB</h2>
            <ComponentB data={instrument} />
        </>
    );
}

export default ComponentA;

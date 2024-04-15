import React from "react";
import Hoc from "./Hoc";

const Team2 = (props) => {
    const { price, increase } = props;

    return (
        <>
            <h1>Team 2</h1>
            <h2>{price} lakhs</h2>
            <button onClick={increase}>Increase bid</button>
        </>
    );
}

export default Hoc(Team2);

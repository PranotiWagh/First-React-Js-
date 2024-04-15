import React from "react";
import Hoc from "./Hoc";

const Team1 = (props) => {
    const { price, increase } = props;

    return (
        <>
            <h1>Team 1</h1>
            <h2>{price} lakhs</h2>
            <button onClick={increase}>Increase bid</button>
        </>
    );
}

export default Hoc(Team1);

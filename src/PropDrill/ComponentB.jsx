// ComponentB.jsx
import React from "react";

const ComponentB = (props) => {
    let { data } = props;
    return (
        <>
            <h2>CompB is receiving {data} from compA</h2>
            {/* Other component logic */}
        </>
    );
}

export default ComponentB;

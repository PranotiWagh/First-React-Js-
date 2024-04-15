import React, { useState } from "react";

const DetailForm = () => {
    // 1. Initialization state
    const [data, setData] = useState({
        empname: "",
        company: ""
    });

    const { empname, company } = data;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value }); // Using setData instead of satData
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
    };

    return (
        <>
            <h1>Details Form</h1>
            <form onSubmit={handleSubmit}>
                <label>Enter your name</label>
                <input type="text" name='empname' value={empname} onChange={handleChange} /><br /><br />
                <label>Enter your Company name</label>
                <input type="text" name='company' value={company} onChange={handleChange} /><br /><br />
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default DetailForm;

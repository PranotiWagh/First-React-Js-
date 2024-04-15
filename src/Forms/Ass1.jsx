import React, { useState } from "react";

const IPForm = () => {
    // Initialization state
    const [data, setData] = useState({
        ip: "",
        firstName: "",
        lastName: "",
        department: ""
    });

    const { ip, firstName, lastName, department } = data;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
    };

    return (
        <>
            <h1>IP Form</h1>
            <form onSubmit={handleSubmit}>
                <label>Enter IP Address</label>
                <input type="text" name='ip' value={ip} onChange={handleChange} /><br /><br />
                <label>Enter First Name</label>
                <input type="text" name='firstName' value={firstName} onChange={handleChange} /><br /><br />
                <label>Enter Last Name</label>
                <input type="text" name='lastName' value={lastName} onChange={handleChange} /><br /><br />
                <label>Enter Department</label>
                <input type="text" name='department' value={department} onChange={handleChange} /><br /><br />
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default IPForm;

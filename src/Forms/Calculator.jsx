import React, { useState } from "react";

const Calculator = () => {
    const [number, setNumber] = useState({ num1: "", num2: "" });
    const [result, setResult] = useState(0);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNumber({ ...number, [name]: value });
    };

    const add = (e) => {
        e.preventDefault();
        setResult(parseInt(number.num1) + parseInt(number.num2));
    };
    
    const sub = (e) => {
        e.preventDefault();
        setResult(parseInt(number.num1) - parseInt(number.num2));
    };
    
    const mul = (e) => {
        e.preventDefault();
        setResult(parseInt(number.num1) * parseInt(number.num2));
    };
    
    const div = (e) => {
        e.preventDefault();
        setResult(parseFloat(number.num1) / parseFloat(number.num2));
    };

    return (
        <>
            <h1>Calculator</h1>
            <form>
                <label>Enter first number</label>
                <input type="number" name="num1" value={number.num1} onChange={handleChange} /><br /><br />
                <label>Enter second number</label>
                <input type="number" name="num2" value={number.num2} onChange={handleChange} /><br /><br />
                <button onClick={add}>Addition</button> <br /><br />
                <button onClick={sub}>Subtraction</button><br /><br />
                <button onClick={mul}>Multiplication</button><br /><br />
                <button onClick={div}>Division</button><br /><br />
                <h2>Result: {result}</h2>
            </form>
        </>
    );
};

export default Calculator;

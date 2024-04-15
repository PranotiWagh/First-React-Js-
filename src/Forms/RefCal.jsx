import React, { useRef } from 'react';

const RefCal = () => {
    const num1Ref = useRef();
    const num2Ref = useRef();

    const addition = (e) => {
        e.preventDefault();
        let a = parseInt(num1Ref.current.value);
        let b = parseInt(num2Ref.current.value);
        console.log(a, b);
        console.log("Addition:", a + b);
    }
    const substraction = (e) => {
        e.preventDefault();
        let a = parseInt(num1Ref.current.value);
        let b = parseInt(num2Ref.current.value);
        console.log(a, b);
        console.log("Substraction:", a - b);
    }
    const multiplication = (e) => {
        e.preventDefault();
        let a = parseInt(num1Ref.current.value);
        let b = parseInt(num2Ref.current.value);
        console.log(a, b);
        console.log("multiplication:", a * b);
    }
    const division = (e) => {
        e.preventDefault();
        let a = parseInt(num1Ref.current.value);
        let b = parseInt(num2Ref.current.value);
        console.log(a, b);
        console.log("division:", a / b);
    }

    return (
        <>
            <h2>Calculator</h2>
            <form>
                <label htmlFor="">Enter first number:</label><br /><br />
                <input type="number" ref={num1Ref} /><br /><br />
                <label htmlFor="">Enter second number:</label><br /><br />
                <input type="number" ref={num2Ref} /><br /><br />
                <button onClick={addition}>Addition</button><br /><br/>
                <button onClick={substraction}>Substraction</button><br /><br />            
                <button onClick={multiplication}>Multiplication</button><br /><br />
                <button onClick={division}>Division</button><br /><br />
                </form>
                </>
    )
}

export default RefCal;

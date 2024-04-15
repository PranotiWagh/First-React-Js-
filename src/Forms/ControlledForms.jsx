import { useState } from "react";

const ControlledForms = () => {
    // Initialize the state objects
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    // State Updation (onChange)
    let emailData = (e) => {
        setEmail(e.target.value);
    }

    let passwordData = (e) => {
        setPassword(e.target.value);
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        console.log({ Email: email, Password: password });
    }

    return (
        <>
            <h1>Controlled Forms</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Enter Email Id" value={email} onChange={emailData} /><br /><br /><br />
                <input type="password" placeholder="Enter password" value={password} onChange={passwordData} /><br /><br /><br />
                <button type="submit">Login</button>
            </form>
        </>
    )
}

export default ControlledForms;

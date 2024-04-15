import { useRef } from "react";

const RefForms = () => {
    let emailRef = useRef();
    let passRef = useRef();

    let handleSubmit = (e) => {
        e.preventDefault(); 
        const emailValue = emailRef.current.value;
        const passValue = passRef.current.value;
    
        console.log("Email:", emailValue);
        console.log("Password:", passValue);
       
        emailRef.current.value = "";
        passRef.current.value = "";
    };

    return (
        <>
            <h1>UNCONTROLLED FORMS</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Enter Email Id" ref={emailRef} name="email"/><br></br><br /><br/>
                <input type="password" placeholder="Enter Password" ref={passRef} /><br></br><br /><br/>
                <button type="submit">Login</button>
            </form>
        </>
    );
};

export default RefForms;

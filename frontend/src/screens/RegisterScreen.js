import React, {useState} from 'react';
import AuthTemplate from "../components/auth/AuthTemplate";
import AuthInput from "../components/auth/AuthInput";
import {Link} from "react-router-dom";
import AuthEndpoints from "../connection/AuthEndpoints";

function RegisterScreen() {

    const [input, setInput] = useState({
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        confirmPassword: ""
    });


    const handleInput = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    // const handleRegister = async (e) => {
    const handleRegister = (e) => {
        e.preventDefault();
        if (input.email.length > 1
            && input.password.length > 8
            && input.password === input.confirmPassword) {
            //     await AuthEndpoints.register(input.email, input.password);
        }
        // if (AuthConfig.isAuthenticated) redirect("/");
        // else setIsLoggedIn(true);

    }
    return (
        <AuthTemplate>
            <div>
                <h1>Register</h1>
                <form className="pt-5">
                    <AuthInput name="firstName" value={input.firstName} handleValue={handleInput} type="text"
                               id="registerFirstName" placeholder="John" label="First name"/>
                    <AuthInput name="lastName" value={input.lastName} handleValue={handleInput} type="text"
                               id="registerLastName" placeholder="Doe" label="Last name"/>
                    <br/>
                    <AuthInput name="email" value={input.email} handleValue={handleInput} type="email"
                               id="registerEmail" placeholder="example@domain.com" label="Email"/>

                    <AuthInput name="password" value={input.password} handleValue={handleInput} type="password"
                               id="registerPassword"
                               placeholder="Password!23" label="Confirm pssword"/>
                    <AuthInput name="confirmPassword" value={input.confirmPassword} handleValue={handleInput}
                               type="password"
                               id="registerConfirmPassword"
                               placeholder="Password!23" label="Password"/>
                    <small id="emailHelp" className="d-block form-text text-muted mt-1">We'll never share your
                        password
                        with
                        anyone else.</small>

                    <button type="submit" className="btn btn-dark mt-5">Submit</button>
                </form>
                <div className="w-100 mt-5 pt-5">Do you have an account? <Link to="/login" className="text-dark">Log
                    in</Link></div>
            </div>
        </AuthTemplate>
    );
}

export default RegisterScreen;
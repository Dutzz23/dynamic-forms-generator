import React, {useState} from 'react';
import {Link} from "react-router-dom";

import AuthTemplate from "../components/auth/AuthTemplate";
import AuthInput from "../components/auth/AuthInput";

import AuthEndpoints from "../connection/AuthEndpoints";

function RegisterScreen({isAuthenticated, setIsAuthenticated}) {
    const [input, setInput] = useState({
        email: "",
        username: "",
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

    function isRegisterDataValid() {
        return input.email.length > 1
            && input.username.length > 8
            && input.firstName.length > 2
            && input.lastName.length > 2
            && input.password.length > 8
            && input.password === input.confirmPassword;
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        if (isRegisterDataValid()) {
            const isRequestSuccess = await AuthEndpoints.register(
                input.firstName,
                input.lastName,
                input.username,
                input.email,
                input.password);
            setIsAuthenticated(isRequestSuccess);
        }
    }

    const handleSendEmailVerification = (e) => {
        e.preventDefault();

    }

    return (
        <AuthTemplate>
            <div>
                <h1 className="text-success">Register</h1>
                <form>
                    <AuthInput name="firstName" value={input.firstName} handleValue={handleInput} type="text"
                               id="registerFirstName" placeholder="John" label="First name"/>
                    <AuthInput name="lastName" value={input.lastName} handleValue={handleInput} type="text"
                               id="registerLastName" placeholder="Doe" label="Last name"/>
                    <br/>
                    <AuthInput name="username" value={input.username} handleValue={handleInput} type="text"
                               id="registerUserame" placeholder="john_doe" label="Username"/>
                    <AuthInput name="email" value={input.email} handleValue={handleInput} type="email"
                               id="registerEmail" placeholder="example@domain.com" label="Email"/>
                    <AuthInput name="password" value={input.password} handleValue={handleInput} type="password"
                               id="registerPassword"
                               placeholder="Password!23" label="Password"/>
                    <AuthInput name="confirmPassword" value={input.confirmPassword} handleValue={handleInput}
                               type="password"
                               id="registerConfirmPassword"
                               placeholder="Password!23" label="Confirm password"/>
                    <small id="emailHelp" className="d-block form-text text-muted mt-1">
                        We'll never share your password with anyone else.</small>
                    <button type="submit" className="btn btn-success mt-5" onClick={handleRegister}
                            data-bs-toggle="modal" data-bs-target="#staticBackdrop">Submit
                    </button>
                </form>
                <div className="w-100 mt-5 pt-5">
                    Do you have an account? <Link to="/login" className="text-success">Log
                    in</Link>
                </div>
            </div>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
                 tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            A verification email has been sent. Please check your inbox for {input.email}.
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button className="bg-transparent border-0" data-bs-dismiss="modal">
                                <Link to={"/"} className="btn btn-success">Understood</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </AuthTemplate>
    );
}

export default RegisterScreen;
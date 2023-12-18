import React, {useState} from 'react';
import AuthTemplate from "../components/auth/AuthTemplate";
import {Link, Navigate} from "react-router-dom";
import AuthInput from "../components/auth/AuthInput";
import AuthEndpoints from "../connection/AuthEndpoints";


function LoginScreen({isAuthenticated, setIsAuthenticated}) {
    const [input, setInput] = useState({
        username: "",
        password: ""
    });

    const [isLoggedIn, setIsLoggedIn] = useState(null)

    const handleInput = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        if (input.username.length > 1 && input.password.length > 8) {
            const isRequestSuccess = await AuthEndpoints.login(input.username, input.password);
            setIsAuthenticated(isRequestSuccess);
            setIsLoggedIn(isRequestSuccess);
        }
    }
    return (
        <AuthTemplate>
            {isAuthenticated && <Navigate to={"/"} replace={true}/>}
            <div>
                <h1 className="text-success">Log in</h1>
                <form className="pt-5">
                    <AuthInput name="username" value={input.email} handleValue={handleInput} type="text"
                               id="loginUsername" placeholder="john_doe" label="Username"/>
                    <AuthInput name="password" value={input.email} handleValue={handleInput} type="password"
                               id="passwordLogin"
                               placeholder="Password!23" label="Password"/>
                    <small id="emailHelp" className="d-block form-text text-muted mt-1">
                        We'll never share your password with anyone else.</small>
                    <button type="submit" className="btn btn-success mt-5" onClick={handleLogin}>Submit</button>
                </form>
                {isLoggedIn === false &&
                <p className="text-danger mt-3">Something went wrong. Try again!</p>}
                <div className="w-100 mt-5 pt-5">Not registered yet? <Link to="/register" className="text-success">Click
                    here</Link></div>
            </div>
        </AuthTemplate>
    );
}

export default LoginScreen;
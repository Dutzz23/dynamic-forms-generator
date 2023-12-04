import React, {useState} from 'react';
import AuthTemplate from "../components/auth/AuthTemplate";
import {Link} from "react-router-dom";
import AuthInput from "../components/auth/AuthInput";
import AuthConfig from "../connection/AuthConfig";


function LoginScreen() {
    const [input, setInput] = useState({
        email: "",
        password: ""
    });

    const [isLoggedIn, setIsLoggedIn] = useState(-1);


    const handleInput = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setIsLoggedIn(-1);
    }

    //  const handleLogin = async (e) => {
    const handleLogin = (e) => {
        e.preventDefault();
        AuthConfig.isAuthenticated = true;
        if (input.email.length > 1 && input.password.length > 8) {
            //      await AuthEndpoints.login(input.email, input.password);
        }
        // if (AuthConfig.isAuthenticated) redirect("/");
        // else setIsLoggedIn(true);

    }
    return (
        <AuthTemplate>
            <div>
                <h1>Log in</h1>
                <form className="pt-5">
                    <AuthInput name="email" value={input.email} handleValue={handleInput} type="email"
                               id="loginEmail" placeholder="example@domain.com" label="Email"/>
                    <AuthInput name="password" value={input.email} handleValue={handleInput} type="password"
                               id="passwordLogin"
                               placeholder="Password!23" label="Password"/>
                    <small id="emailHelp" className="d-block form-text text-muted mt-1">We'll never share your
                        password
                        with
                        anyone else.</small>
                    {/*{isLoggedIn === 0 &&*/}
                    {/*    <p className="text-danger-subtle">Something went wrong. Please try again later.</p>}*/}
                    <button type="submit" className="btn btn-dark mt-5" onClick={handleLogin}>Submit</button>
                </form>
                <div className="w-100 mt-5 pt-5">Not registered yet? <Link to="/register" className="text-dark">Click here</Link></div>
            </div>
        </AuthTemplate>
    );
}

export default LoginScreen;
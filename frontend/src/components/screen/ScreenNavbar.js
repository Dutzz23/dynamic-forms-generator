import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import AuthEndpoints from "../../connection/AuthEndpoints";
import {AuthContext} from "../../App";
import "../../assets/styles/components/screenNavbar.css";

export const NAVBAR_TABS = {
    NONE: 0,
    HOME: 1,
    CREATE_FORM: 2,
    YOUR_FORMS: 3
}

function ScreenNavbar({currentTab}) {
    const isAuthenticated = useContext(AuthContext);

    return (
        <header>
            <nav className="navbar fixed-top p-2 m-3 navbar-expand-lg bg-body-tertiary mb-5">
                <div className="container-fluid">
                    <Link className="navbar-brand text-success" to="/">Dynamic forms generator</Link>
                    <button className="navbar-toggler border-success btn-outline-success" type="button" data-bs-toggle="collapse"
                             data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className={`nav-link ${currentTab === NAVBAR_TABS.HOME ? "active" : ""}`}
                                  to="/">Home</Link>
                            <Link className={`nav-link ${currentTab === NAVBAR_TABS.CREATE_FORM ? "active" : ""}`}
                                  to="/form/create">Create a form</Link>
                            <Link className={`nav-link ${currentTab === NAVBAR_TABS.YOUR_FORMS ? "active" : ""}`}
                                  to="/my-forms">My forms</Link>
                        </div>
                        {isAuthenticated ?
                            <button className="btn btn-secondary marginLeftAuto my-2 my-xl-0"
                                    onClick={AuthEndpoints.logout}>Log out</button>
                            :
                            <Link to={'/login'} className="btn btn-success marginLeftAuto my-2 my-xl-0">Log in</Link>
                        }
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default ScreenNavbar;
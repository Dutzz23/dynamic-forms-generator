import React from 'react';
import {Link} from "react-router-dom";


export const NAVBAR_TABS = {
    HOME: 0,
    CREATE_FORM: 1,
    YOUR_FORMS: 2
}

function ScreenNavbar({currentTab}) {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary mb-5">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Dynamic form generator</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
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
                                  to="/createForm">Create a form</Link>
                            <Link className={`nav-link ${currentTab === NAVBAR_TABS.YOUR_FORMS ? "active" : ""}`}
                                  to="/yourForms">Your forms</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default ScreenNavbar;
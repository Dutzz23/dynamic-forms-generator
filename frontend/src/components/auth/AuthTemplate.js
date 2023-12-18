import React, {useState} from 'react';
import WidgetFooter from "../form/create/WidgetFooter";

function AuthTemplate(props) {

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="vh-100 d-flex justify-content-center align-items-center h-100">
                        {props.children}
                    </div>
                </div>
                <div className="col-md-6 bg-success"></div>
            </div>
        </div>
    );
}

export default AuthTemplate;
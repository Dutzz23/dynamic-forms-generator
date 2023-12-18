import React from 'react';
import {Link} from "react-router-dom";
import formIcon from "../../../assets/media/formIcon.svg";

function MyForm({formId, title}) {
    return (
        <div className="col-6 col-md-3 col-xl-2">
            <Link to={`form/${formId}`} className="text-decoration-none text-dark">
                <img src={formIcon} alt={`formIcon-${formId}`}/>
                <div>{title}</div>
            </Link>
        </div>
    );
}

export default MyForm;
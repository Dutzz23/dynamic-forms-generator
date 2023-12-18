import React from 'react';
import {Link} from "react-router-dom";

function UserResponseListElement({id, username, responseId, weight}) {
    return (
        <li className="list-group-item list-inline p-3">
            <Link to={`/form/response/${responseId}`} className="text-decoration-none text-success d-flex justify-content-between">
                <p className="mb-0">{username}</p>
                <p className="mb-0">{`${weight} point${weight !== 1 ? 's' : ""}`}</p>
            </Link>
        </li>
    );
}

export default UserResponseListElement;
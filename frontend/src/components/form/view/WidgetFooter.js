import React, {useState} from 'react';

function WidgetFooter({isRequired = null, answer = null, weight = null, totalWeight = null}) {

    return (
        (isRequired || answer || weight) &&
        <ul className="mt-5 list-group ps-0 rounded-2">
            <p className="ps-3 d-flex fa-1x h6">Field details:</p>
            {isRequired &&
                <li className="d-flex fa-1x list-group-item lead">Answer field must be completed</li>
            }
            {
                answer &&
                <li className="d-flex fa-1x list-group-item lead">Answer : {answer}</li>
            }
            {
                weight &&
                <li className="d-flex fa-1x list-group-item lead">Weight : {weight}/{totalWeight} points</li>
            }
        </ul>
    );
}

export default WidgetFooter;
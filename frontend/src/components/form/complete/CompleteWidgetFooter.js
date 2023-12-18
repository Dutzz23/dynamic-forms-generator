import React from 'react';

function CompleteWidgetFooter({isRequired = false, weight= -1}) {
    return (
        <div className="mt-3">
            {isRequired  &&
                <p className="d-flex justify-content-end fa-1x lead">{`${weight} point${weight !== 1 ? 's' : ""}`}</p>}
            {weight >= 0 &&
                <p className="text-danger d-flex mb-3 ms-2 fa-1x lead">*This field must be completed</p>}
        </div>
    );
}

export default CompleteWidgetFooter;

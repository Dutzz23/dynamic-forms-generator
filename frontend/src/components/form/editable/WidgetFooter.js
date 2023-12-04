import React from 'react';

function WidgetFooter({isRequired, setIsRequired, appendSameWidget, removeWidget, index, handleDescriptionDisplay}) {

    const randomNumber = Math.random();

    const handleAppendSameWidgetType = (e) => {
        e.preventDefault();
        appendSameWidget();
    }
    const handleRemoveSameWidget = (e) => {
        e.preventDefault();
        removeWidget(index);
    }

    return (
        <div className="row mt-1 justify-content-end g-3">
            <label htmlFor={`isRequired${randomNumber}`}
                   className="d-block w-auto">Is required</label>
            <input type="checkbox"
                   id={`isRequired${randomNumber}`}
                   value={isRequired}
                   onChange={(e) => setIsRequired(e.target.value)}
                   className="form-check d-block w-auto"/>
            <button className="ms-4 border-0 bg-transparent w-auto"
                    onClick={handleRemoveSameWidget}
            >
                <i className="fa-solid fa-trash" style={{"color": "#333333"}}></i>
            </button>
            <button className="border-0 bg-transparent w-auto"
                    onClick={handleAppendSameWidgetType}
            >
                <i className="fa-solid fa-copy" style={{"color": "#333333"}}></i>
            </button>
            <button className="border-0 bg-transparent w-auto"
                    onClick={handleDescriptionDisplay}>
                <i className="fa-solid fa-comment-dots" style={{"color": "#333333"}}></i>
            </button>
        </div>
    );
}

export default WidgetFooter;
import React from 'react';

function WidgetFooter({
                          isRequired,
                          setIsRequired,
                          appendSameWidget,
                          removeWidget,
                          index,
                          handleDescriptionDisplay,
                          setDataToForm,
                          weight,
                          setWeight,
                          hasWeight,
                          setHasWeight
                      }) {

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
                   onChange={(e) => {
                       setIsRequired(oldValue => !oldValue);
                       setDataToForm();
                   }
                   }
                   className="form-check d-block w-auto"/>
            <label htmlFor={`hasWeight${randomNumber}`}
                   className="d-block w-auto">Add weight</label>
            <input type="checkbox"
                   id={`isRequired${randomNumber}`}
                   value={isRequired}
                   onChange={(e) => {
                       setHasWeight(oldValue => !oldValue);
                       setDataToForm();
                   }
                   }
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
            {hasWeight &&
                <input type="number" placeholder="Weight" className="col-2 border-0 form-inline me-2" value={weight}
                       onChange={(e) => setWeight(e.target.value)}/>}
        </div>
    );
}

export default WidgetFooter;
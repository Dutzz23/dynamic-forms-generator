import React, {useRef} from 'react';

import {useAutosizeTextArea} from "../utils";

import "../../../assets/styles/components/form/formComponents.css";
import "../../../assets/styles/components/form/formHeader.css";

function CreateFormHeader({title, setTitle, description, setDescription, disabled = false}) {


    const titleRef = useRef();
    const descriptionRef = useRef();

    useAutosizeTextArea(titleRef.current, title);
    useAutosizeTextArea(descriptionRef.current, description);

    return (
        <div className="p-3 bg-success-subtle d-flex flex-column border-success rounded-3 pt-3 FormHeader-border">
            <textarea ref={titleRef}
                      rows={1}
                      value={title}
                      disabled={disabled}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Form title"
                      className="form-control fs-2 mb-3 formComponents-disabledBackground"
                      style={{"overflow": "hidden", "resize": "none"}}
            ></textarea>
            {title === "" &&
                <p className="text-danger d-flex mb-3 ms-2 fa-1x lead">* This field must be completed</p>}
            <textarea ref={descriptionRef}
                      rows={1}
                      value={description}
                      disabled={disabled}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Your form description goes here..."
                      className="form-control mb-3 formComponents-disabledBackground"
                      style={{"overflow": "hidden", "resize": "none"}}
            ></textarea>
        </div>
    );
}

export default CreateFormHeader;
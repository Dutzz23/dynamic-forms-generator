import React, {useRef, useState} from 'react';
import "../../../assets/styles/components/form/formHeader.css";
import {useAutosizeTextArea} from "../utils";

function FormHeader({title, setTitle, description, setDescription}) {



    const titleRef = useRef();
    const descriptionRef = useRef();

    useAutosizeTextArea(titleRef.current, title);
    useAutosizeTextArea(descriptionRef.current, description);

    return (
        <div className="p-3 bg-dark-subtle d-flex flex-column border-dark rounded-3 pt-3 FormHeader-border">
            <textarea ref={titleRef}
                      rows={1}
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Form title"
                      className="form-control fs-2 mb-3"
                      style={{"overflow": "hidden", "resize": "none"}}
            ></textarea>
            <textarea ref={descriptionRef}
                      rows={1}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Your form description goes here..."
                      className="form-control mb-3"
                      style={{"overflow": "hidden", "resize": "none"}}
            ></textarea>
        </div>
    );
}

export default FormHeader;
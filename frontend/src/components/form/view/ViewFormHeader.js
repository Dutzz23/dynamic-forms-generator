import React, {useRef} from 'react';
import {useAutosizeTextArea} from "../utils";
import "../../../assets/styles/components/form/formComponents.css";
import "../../../assets/styles/components/form/formHeader.css";

function ViewFormHeader({title, description = null}) {
    const titleRef = useRef();
    const descriptionRef = useRef();
    useAutosizeTextArea(titleRef.current, title);
    useAutosizeTextArea(descriptionRef.current, description);

    return (
        <div className="p-3 bg-success-subtle d-flex flex-column border-success rounded-3 pt-3 FormHeader-border">
            <div className="form-control bg-transparent d-flex fs-2 mb-3 formComponents-disabledBackground"
                 style={{"overflow": "hidden", "resize": "none"}}
            >{title}</div>
            {description && <div className="form-control mb-3 formComponents-disabledBackground"
                                 style={{"overflow": "hidden", "resize": "none", textAlign: "start"}}
            >{description}</div>
            }
        </div>
    );
}

export default ViewFormHeader;
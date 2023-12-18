import React from 'react';

function WidgetTemplate(props) {

    return (
        <div
            className="p-3 mt-4 bg-success-subtle d-flex flex-column border-5 border-start border-success rounded-1 pt-3">
            {props.children}
        </div>
    );
}

export default WidgetTemplate;
import React, {useRef, useState} from 'react';
import WidgetTemplate from "../WidgetTemplate";
import {useAutosizeTextArea} from "../utils";
import WidgetFooter from "../view/WidgetFooter";

function ViewTextWidget({widgetData, totalWeight}) {
    const answerRef = useRef(null);
    useAutosizeTextArea(answerRef.current, widgetData.data.answer);
    return (
        <WidgetTemplate>
            <div className="form-control mb-3 fs-5 border-success border-0 border-bottom bg-transparent rounded-0"
                 style={{"overflow": "hidden", "resize": "none"}}
            >{widgetData.data.question}</div>
            {widgetData.data.description &&
                <div
                    className="form-control mt-2 fs-6 mb-2 border-success border-0 border-bottom bg-transparent rounded-0 formComponents-disabledBackground"
                    style={{"overflow": "hidden", "resize": "none"}}
                >{widgetData.data.description}</div>
            }
            <textarea ref={answerRef}
                      rows={1}
                      value={widgetData.data.answer}
                      disabled={true}
                      aria-label={'answer' + widgetData.index}
                      placeholder="Answer..."
                      className="form-control mt-5 fs-5 bg-white border-0 border-bottom border-dark rounded-2 rounded-0"
                      style={{"overflow": "hidden", "resize": "none"}}
            ></textarea>
            <WidgetFooter isRequired={widgetData.data.isRequired} answer={widgetData.data.answer} weight={widgetData.data.weight}
                          totalWeight={totalWeight}/>
        </WidgetTemplate>
    );
}

export default ViewTextWidget;
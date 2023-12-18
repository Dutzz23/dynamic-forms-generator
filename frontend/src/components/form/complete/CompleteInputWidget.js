import React, {useRef, useState} from 'react';
import WidgetTemplate from "../WidgetTemplate";
import {useAutosizeTextArea} from "../utils";
import WidgetFooter from "../view/WidgetFooter";
import CompleteWidgetFooter from "./CompleteWidgetFooter";

function CompleteInputWidget({answer, setAnswer, index, data}) {
    const answerRef = useRef(null);

    useAutosizeTextArea(answerRef.current, answer);

    return (
        <WidgetTemplate>
            <div className="form-control mb-3 fs-5 border-success border-0 border-bottom bg-transparent rounded-0"
                 style={{"overflow": "hidden", "resize": "none", textAlign: "start"}}
            >{data.question}</div>
            {data.description &&
                <div
                    className="form-control mt-2 fs-6 mb-2 border-success border-0 border-bottom bg-transparent rounded-0 formComponents-disabledBackground"
                    style={{"overflow": "hidden", "resize": "none", textAlign: "start"}}
                >{data.description}</div>
            }
            <textarea ref={answerRef}
                      rows={1}
                      value={answer}
                      aria-label={'answer' + index}
                      onChange={ (e) => {
                          if (e.target.value.length < 151) { setAnswer(e.target.value, index);
                              console.log("dsad", e.target.value, index);}
                      }}
                      placeholder="Answer... (maximum 150 characters)"
                      className="form-control mt-5 fs-5 bg-white border-0 border-bottom border-dark rounded-2 rounded-0"
                      style={{"overflow": "hidden", "resize": "none"}}
            ></textarea>
            <CompleteWidgetFooter isRequired={data.isRequired} weight={data.weight}/>
        </WidgetTemplate>
    );
}

export default CompleteInputWidget;
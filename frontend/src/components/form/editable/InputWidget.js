import React, {useEffect, useRef, useState} from 'react';
import WidgetTemplate from "../WidgetTemplate";
import {FORM_TYPES, useAutosizeTextArea} from "../utils";
import WidgetFooter from "./WidgetFooter";

function InputWidget({appendWidget, removeWidget, setDataToForm, inputDisabled, index}) {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [hasDescription, setHasDescription] = useState(false);
    const [isRequired, setIsRequired] = useState(false);
    const [description, setDescription] = useState("");

    const questionRef = useRef(null);
    const answerRef = useRef(null);
    const descriptionRef = useRef(null);


    useEffect(() => {
        setDataToForm(index, {
            name: question,
            description: hasDescription ? description : null,
            widget: {
                formType: FORM_TYPES.INPUT,
                uiComponentName: "InputWidget"
            },
            parameters: {
                answer: answer,
                isRequired: isRequired
            }
        });
    }, [question, answer, hasDescription, isRequired]);

    useAutosizeTextArea(questionRef.current, question);
    useAutosizeTextArea(answerRef.current, answer);
    useAutosizeTextArea(descriptionRef.current, description);

    const handleDescriptionDisplay = (e) => {
        e.preventDefault();
        setHasDescription((oldValue) => !oldValue);
    }


    return (
        <WidgetTemplate>
            <textarea ref={questionRef}
                      rows={1}
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                      placeholder="Question"
                      className="form-control mb-3 fs-5"
                      style={{"overflow": "hidden", "resize": "none"}}
            ></textarea>
            {hasDescription &&
                <textarea ref={descriptionRef}
                          rows={1}
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          placeholder="Add details with this description...."
                          className="form-control fs-6 mb-2"
                          style={{"overflow": "hidden", "resize": "none"}}
                ></textarea>
            }
            <textarea ref={answerRef}
                      rows={1}
                      value={answer}
                      disabled={inputDisabled}
                      onChange={(e) => {
                          if (e.target.value.length < 151) setAnswer(e.target.value)
                      }}
                      placeholder="Answer... (maximum 150 characters)"
                      className="form-control fs-5 bg-transparent border-0 border-bottom border-dark rounded-0"
                      style={{"overflow": "hidden", "resize": "none"}}
            ></textarea>
            <WidgetFooter isRequired={isRequired}
                          setIsRequired={setIsRequired}
                          appendSameWidget={() => appendWidget("INPUT")}
                          handleDescriptionDisplay={handleDescriptionDisplay}
                          removeWidget={removeWidget}
                          index={index}

            />
        </WidgetTemplate>
    );
}

export default InputWidget;
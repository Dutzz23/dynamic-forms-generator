import React, {useEffect, useRef, useState} from 'react';
import WidgetTemplate from "../WidgetTemplate";
import {FORM_TYPES, useAutosizeTextArea} from "../utils";
import WidgetFooter from "./WidgetFooter";

function TextWidget({
                        appendWidget,
                        removeWidget,
                        setDataToForm,
                        index
                    }) {
    const [description, setDescription] = useState("")
    const [question, setQuestion] = useState("");
    const [weight, setWeight] = useState(null);
    const [hasWeight, setHasWeight] = useState(false)
    const [answer, setAnswer] = useState("");

    const [hasDescription, setHasDescription] = useState(false);
    const [isRequired, setIsRequired] = useState()


    const questionRef = useRef(null);
    const answerRef = useRef(null);
    const descriptionRef = useRef(null);

    const handleDataForm = () => {
        setDataToForm(index, {
            name: question,
            description: hasDescription ? description : null,
            widget: {
                formType: FORM_TYPES.INPUT,
                uiComponentName: "InputWidget"
            },
            parameters: {
                answer: answer,
                isRequired: isRequired,
                weight: hasWeight? weight: null
            }
        });
    }

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
                      onChange={async (e) => {
                          await setQuestion(e.target.value)
                          handleDataForm();
                      }}
                      placeholder="Question"
                      className="form-control mb-3 fs-5 formComponents-disabledBackground"
                      style={{"overflow": "hidden", "resize": "none"}}
            ></textarea>
            {question === "" &&
                <desc className="text-danger d-flex mb-3 ms-2 fa-1x lead">* This field must be completed</desc>}
            {hasDescription &&
                <>                <textarea ref={descriptionRef}
                                            rows={1}
                                            value={description}
                                            onChange={async (e) => {
                                                await setDescription(e.target.value)
                                                handleDataForm();

                                            }}
                                            placeholder="Add details with this description...."
                                            className="form-control fs-6 mb-2"
                                            style={{"overflow": "hidden", "resize": "none"}}
                ></textarea>
                    {description === "" &&
                        <desc className="text-danger d-flex mb-3 ms-2 fa-1x lead">* This field must be completed</desc>}
                </>
            }
            <textarea ref={answerRef}
                      rows={1}
                      value={answer}
                      disabled={false}
                      onChange={async (e) => {
                          if (e.target.value.length < 151) await setAnswer(e.target.value)
                          handleDataForm();
                      }}
                      placeholder="Answer..."
                      className="form-control fs-5 border-0 rounded-0 border-bottom border-success formComponents-disabledBackground"
                      style={{"overflow": "hidden", "resize": "none"}}
            ></textarea>
            <WidgetFooter isRequired={isRequired}
                          setIsRequired={setIsRequired}
                          appendSameWidget={() => appendWidget(FORM_TYPES.TEXT)}
                          handleDescriptionDisplay={handleDescriptionDisplay}
                          setDataToForm={handleDataForm}
                          removeWidget={removeWidget}
                          index={index}
                          hasWeight={hasWeight}
                          setHasWeight={setHasWeight}
                          weight={weight}
                          setWeight={setWeight}
            />
        </WidgetTemplate>
    );
}

export default TextWidget;
import React, {useRef, useState} from 'react';
import WidgetTemplate from "../WidgetTemplate";
import WidgetFooter from "./WidgetFooter";
import {FORM_TYPES, useAutosizeTextArea} from "../utils";

function InputWidget({appendWidget, removeWidget, setDataToForm, inputDisabled, index}) {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [hasDescription, setHasDescription] = useState(false);
    const [isRequired, setIsRequired] = useState(false);
    const [weight, setWeight] = useState(null);
    const [hasWeight, setHasWeight] = useState(false)
    const [description, setDescription] = useState("");

    const questionRef = useRef(null);
    const answerRef = useRef(null);
    const descriptionRef = useRef(null);

    const handleDataForm = () =>
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
        })

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
                      aria-label={'question' + index}
                      onChange={async (e) => {
                          setQuestion(e.target.value)
                          handleDataForm();
                      }}
                      placeholder="Question"
                      className="form-control mb-3 fs-5"
                      style={{"overflow": "hidden", "resize": "none"}}
            ></textarea>
            {question === "" && <desc className="text-danger d-flex mb-3 ms-2 fa-1x lead">* This field must be completed</desc>}
            {hasDescription &&
                <>
                <textarea ref={descriptionRef}
                          rows={1}
                          value={description}
                          aria-label={'description' + index}

                          onChange={async (e) => {
                              await setDescription(e.target.value);
                              handleDataForm();
                          }}
                          placeholder="Add details with this description...."
                          className="form-control fs-6 mb-2 formComponents-disabledBackground"
                          style={{"overflow": "hidden", "resize": "none"}}
                ></textarea>
                    {description === "" && <desc className="text-danger d-flex mb-3 ms-2 fa-1x lead">* This field must be completed</desc>}
                </>
            }
            <textarea ref={answerRef}
                      rows={1}
                      value={answer}
                      disabled={isRequired}
                      aria-label={'answer' + index}
                      onChange={async (e) => {
                          if (e.target.value.length < 151) await setAnswer(e.target.value)
                          handleDataForm();
                      }}
                      placeholder="Answer... (maximum 150 characters)"
                      className="form-control fs-5 border-0 border-bottom border-success rounded-0"
                      style={{"overflow": "hidden", "resize": "none"}}
            ></textarea>
            <WidgetFooter isRequired={isRequired}
                          setIsRequired={setIsRequired}
                          appendSameWidget={() => appendWidget(FORM_TYPES.INPUT)}
                          handleDescriptionDisplay={handleDescriptionDisplay}
                          setDataToForm={handleDataForm}
                          removeWidget={removeWidget}
                          index={index}
                          weight={weight}
                          setWeight={setWeight}
                          hasWeight={hasWeight}
                          setHasWeight={setHasWeight}

            />
        </WidgetTemplate>
    );
}

export default InputWidget;
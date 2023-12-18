import React, {useState} from 'react';

import ScreenTemplate from "../components/ScreenTemplate";
import ViewFormHeader from "../components/form/view/ViewFormHeader";

import {NAVBAR_TABS} from "../components/screen/ScreenNavbar";

import ApiConfig from "../connection/ApiConfig";
import axios from "axios";

import "../assets/styles/screens/formScreen.css";
import {FORM_TYPES} from "../components/form/utils";
import CompleteInputWidget from "../components/form/complete/CompleteInputWidget";
import CompleteTextWidget from "../components/form/complete/CompleteTextWidget";

function CompleteFormScreen() {
    const key = String(Math.random() + Math.random());
    const [widgetsData, setWidgetsData] = useState([
        {
            key: key,
            id: 1,
            index: 0,
            widgetType: FORM_TYPES.TEXT,
            data: {
                weight: null,
                question: "sdasdd",
                description: "dsadadasdasda sad a sd d ad a ssda sa d da as dsa a ads  das asdsa dsa d sad asd",
                isRequired: false
            }
        },
        {
            key: key,
            id: 2,
            index: 1,
            widgetType: FORM_TYPES.INPUT,
            data: {
                weight: 2,
                question: "sddsd sd as dasdd",
                description: "dsadadasdasda sa d da as dsa a ads  das asdsa dsa d sad asd",
                isRequired: true
            }
        }
    ]);

    const [formDetails, setFormDetails] = useState({
        title: "Title",
        description: "a along long long long long long long long long long long long long long long long desc",
        id: "",
        totalWeight: ""
    })

    const [answers, setAnswers] = useState([
        "da",
        ""
    ])

    const setAnswer = (answer, index) => {
        console.log("SET")
        setAnswers(oldValue => {
            console.log("OLD", oldValue)
            const tempArray = [...oldValue];
            tempArray[index] = answer;
            return tempArray
        });
    }
    const generateWidget = (widgetType, index) => {
        const widgetParams = {
            answer: answers[index],
            setAnswer: setAnswer,
            ...widgetsData[index]
        };
        switch (widgetType) {
            case FORM_TYPES.INPUT:
                return <CompleteInputWidget {...widgetParams}/>;
            case FORM_TYPES.TEXT:
                return <CompleteTextWidget {...widgetParams}/>;
        }
    }

    const handleFormSubmission = (e) => {
        e.preventDefault();
        // console.log(ApiConfig.apiSecureHeaders())
        // const formData = getMappedFormData();
        // axios.post(ApiConfig.apiHost + "/form/create",
        //     formData,
        //     {
        //         headers: {
        //             'Content-Type': 'application/json',
        //             'Authorization': `Bearer ${localStorage.getItem('token')}`
        //         }
        //     })
        //     .then((response) => {
        //         if (response.status === HttpStatusCode.Created) {
        //             setFormId(response.data)
        //         }
        //     })
        //     .catch((error) => console.error(error));
    }

    return (
        <ScreenTemplate currentTab={NAVBAR_TABS.NONE}>
            <div className="container-fluid mt-5">
                <div className="row flex-column align-content-center py-5">
                    <form className="col-12 col-md-7 col-xl-5">
                        <ViewFormHeader title={formDetails.title}
                                        description={formDetails.description}/>

                        {widgetsData.map((widget, i) => {
                                generateWidget(widget.widgetType, i)
                            }
                        )}
                        <CompleteInputWidget
                            answer={answers[0]}
                            setAnswer={setAnswer}
                            {...widgetsData[0]} />
                        <CompleteInputWidget
                            answer={answers[1]}
                            setAnswer={setAnswer}
                            {...widgetsData[1]} />
                    </form>
                    <button className="btn btn-success py-3 px-5 mt-5" style={{width: "fit-content", alignSelf: "center"}}>Submit</button>
                </div>
            </div>
        </ScreenTemplate>
    );
}

export default CompleteFormScreen;
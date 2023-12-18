import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios, {HttpStatusCode} from "axios";
import ApiConfig from "../connection/ApiConfig";
import ScreenTemplate from "../components/ScreenTemplate";
import {NAVBAR_TABS} from "../components/screen/ScreenNavbar";
import ViewInputWidget from "../components/form/view/ViewInputWidget";
import {FORM_TYPES} from "../components/form/utils";
import ViewTextWidget from "../components/form/view/ViewTextWidget";
import ViewFormHeader from "../components/form/view/ViewFormHeader";

function ViewFormScreen(props) {

    const urlParams = useParams();

    useEffect(() => {
        // axios.get(ApiConfig.apiHost + `/form/view/${urlParams.formId}`,
        //     {
        //         headers: {
        //             'Content-Type': 'application/json',
        //             'Authorization': `Bearer ${localStorage.getItem('token')}`
        //         }
        //     })
        //     .then((response) =>{
        //         if(response.status === HttpStatusCode.Ok){
        //             setWidgets(response.data);
        //         }
        //     })
        //     .catch((error)=> console.error(error))
    }, []);

    const [widgets, setWidgets] = useState([]);
    const [formDetails, setFormDetails] = useState({
        title: "ASDAD ASDAD ASDAD ASDAD ASDAD ASDAD ASDAD ASDAD ASDAD ",
        description: "lorem ipsum ASDAD ASDAD ASDAD ASDAD ASDAD ASDAD ASDAD ",
        totalWeight: 343
    })
    useEffect(() => {
        setFormDetails({
            title: "ASDAD ASDAD ASDAD ASDAD ASDAD ASDAD ASDAD ASDAD ",
            description: "lorem ipsum ASDAD ASDAD ASDAD ASDAD ASDAD ASDAD ASDAD ",
            totalWeight: 343
        });
        setWidgets([
            {
                index: 0,
                formType: FORM_TYPES.INPUT,
                data: {
                    question: "Q1",
                    description: "dsa fddsf dsf sdf sdde dd dasds fdsfdsf  ds fds  sdf sdf sdff f fss ff f fsdasdasd dsadasdasddsadasdasd dsadasdasddsadasdasd dsadasdasd ",
                    isRequired: false,
                    answer: "",
                    weight: null
                }
            },
            {
                index: 1,
                formType: FORM_TYPES.TEXT,
                data: {
                    question: "Q2",
                    description: null,
                    isRequired: true,
                    answer: "sdsadsd",
                    weight: 2
                }
            }
        ])
    }, []);

    const [answers, setAnswers] = useState([]);

    const setAnswer = (index, answer) => {

    }

    const generateWidget = (widget) => {
        const widgetParams = {
            setDataToForm:
            setAnswer,
            widgetData: widget,
            answer: answers[widget.index],
            totalWeight: formDetails.totalWeight
        }
        switch (widget.formType) {
            case FORM_TYPES.INPUT:
                return <ViewInputWidget {...widgetParams}/>;
            case FORM_TYPES.TEXT:
                return <ViewTextWidget {...widgetParams}/>;
        }
    }

    return (
        <ScreenTemplate currentTab={NAVBAR_TABS.NONE}>
            <div className="container-fluid mt-5">
                <div className="row flex-column align-content-center py-5" style={{textAlign: "start"}}>
                    <form className="col-12 col-md-7 col-xl-5">
                        <ViewFormHeader title={formDetails.title} description={formDetails.description}/>
                        {widgets.map((widget) => {
                            return generateWidget(widget)
                        })}
                    </form>
                </div>
            </div>

            <Link to={`/form/edit/:${urlParams.formId}`} className="btn btn-success py-3 px-5 align-self-center mb-5"
                  style={{width: "fit-content"}}>Edit form</Link>
        </ScreenTemplate>
    );
}

export default ViewFormScreen;
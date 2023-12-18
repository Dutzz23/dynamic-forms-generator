import React, {useState} from 'react';
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import axios, {HttpStatusCode} from "axios";

import ScreenTemplate from "../components/ScreenTemplate";
import InputWidget from "../components/form/create/InputWidget";
import CreateFormHeader from "../components/form/create/CreateFormHeader";
import TextWidget from "../components/form/create/TextWidget";

import {NAVBAR_TABS} from "../components/screen/ScreenNavbar";
import {FORM_TYPES} from "../components/form/utils";


import ApiConfig from "../connection/ApiConfig";

import "../assets/styles/screens/formScreen.css";

function CreateFormScreen() {

    const [widgets, setWidgets] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [formId, setFormId] = useState(null);

    const [widgetsData, setWidgetsData] = useState(new Map());
    const updateWidgetDataByIndex = (index, data) => {
        const tempValue = widgetsData;
        widgetsData.set(index, data)
        setWidgetsData(tempValue);
    }

    const removeWidget = (key) => {
        setWidgets(oldValue => {
            let tempValues = [];
            oldValue.forEach(widget => {
                if (widget.key !== key) tempValues.push(widget);
            })
            return tempValues;
        });
        const tempValue = widgetsData;
        widgetsData.delete(key);
        setWidgetsData(tempValue);
    }

    const appendWidget = (widgetType) => {
        const key = Math.floor(Math.random() * 1000000);
        const rebuildWidgetsArray = (oldValues, widget) => {
            let component = {
                key: key,
                component: widget
            };
            return [...oldValues, component];
        }

        const widgetParams = {
            key: key,
            appendWidget: appendWidget,
            removeWidget: removeWidget,
            setDataToForm: updateWidgetDataByIndex,
            index: key
        }

        switch (widgetType) {
            case FORM_TYPES.INPUT:
                setWidgets(oldValues => rebuildWidgetsArray(oldValues,
                    <InputWidget {...widgetParams}/>));
                break;
            case FORM_TYPES.TEXT:
                setWidgets(oldValues => rebuildWidgetsArray(oldValues,
                    <TextWidget {...widgetParams}/>));
                break;
        }
    }

    const getMappedFormData = () => {
        let formItems = [];
        // Map data as the drag-and-drop reordered
        if (widgets.length > 0)
            widgets.forEach(value => {
                formItems.push(widgetsData.get(value.key));
            })
        return {
            name: title,
            description: description,
            formItems: formItems
        };
    }

    const handleFormSubmission = (e) => {
        e.preventDefault();
        console.log(ApiConfig.apiSecureHeaders())
        const formData = getMappedFormData();
        axios.post(ApiConfig.apiHost + "/form/create",
            formData,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then((response) => {
                if (response.status === HttpStatusCode.Created) {
                    setFormId(response.data)
                }
            })
            .catch((error) => console.error(error));
    }

    const handleDragEnd = (param) => {
        const sourceIndex = param.source.index;
        const destinationIndex = param.destination.index;
        let tempArray = widgets;
        tempArray.splice(destinationIndex, 0, tempArray.splice(sourceIndex, 1)[0]);
        setWidgets(tempArray);
    }

    return (
        <ScreenTemplate currentTab={NAVBAR_TABS.CREATE_FORM}>
            <div className="container-fluid mt-5">
                <div className="row flex-column align-content-center py-5">
                    <form className="col-12 col-md-7 col-xl-5">
                        <CreateFormHeader title={title}
                                          setTitle={setTitle}
                                          description={description}
                                          setDescription={setDescription}
                        />
                        <DragDropContext onDragEnd={handleDragEnd}>
                            <div className="position-relative">
                                <Droppable droppableId="droppableCreateForm">
                                    {(provided, _) => (
                                        <div ref={provided.innerRef}
                                             {...provided.droppableProps}
                                        >
                                            {widgets.map((widget, i) =>
                                                <Draggable key={widget.key}
                                                           draggableId={'draggable-' + widget.key}
                                                           index={i}
                                                >
                                                    {(provided, _) => (
                                                        <div
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                        >
                                                            {widget.component}
                                                            <div {...provided.dragHandleProps}
                                                                 className="FormScreen-draggableAnchor">
                                                                <i className="fa-solid fa-bars-staggered"></i>
                                                            </div>
                                                        </div>
                                                    )}
                                                </Draggable>
                                            )}
                                            {provided.placeholder}
                                        </div>
                                    )}
                                </Droppable>
                            </div>
                        </DragDropContext>
                    </form>
                    <div className="col-12 col-md-7 col-xl-5">
                        <div className="d-flex mt-5 justify-content-between">
                            <button className="col-5 border border-success text-success bg-transparent px-3 py-2"
                                    onClick={() => appendWidget(FORM_TYPES.INPUT)}>Append short input
                            </button>
                            <button className="col-5 border border-success text-success bg-transparent px-3 py-2"
                                    onClick={() => appendWidget(FORM_TYPES.TEXT)}>Append long
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {formId ?
                <>
                    <div className="mt-5 pt-5 display-6 underlineOnHover"
                         onClick={() => {
                             navigator.clipboard.writeText(`localhost:3000/form/${formId}`)
                         }}
                    >
                        Share your form: {`localhost:3000/form/${formId}`}
                    </div>
                    <small className="mb-5 pb-5 mt-3">Click on the link to save it in your clipboard!</small>
                </>

                :
                <div className="mt-5">
                    <button className="btn btn-success px-5 py-3 FormScreen-saveFormButton mb-5"
                            onClick={handleFormSubmission}>
                        Save form
                    </button>
                </div>
            }

        </ScreenTemplate>
    );
}

export default CreateFormScreen;
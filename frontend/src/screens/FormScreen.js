import React, {useState} from 'react';
import FormHeader from "../components/form/editable/FormHeader";
import InputWidget from "../components/form/editable/InputWidget";
import TextWidget from "../components/form/editable/TextWidget";
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
import ScreenNavbar, {NAVBAR_TABS} from "../components/screen/ScreenNavbar";
import "../../src/assets/styles/screens/FormScreen.css";
import ScreenFooter from "../components/screen/ScreenFooter";
import ScreenTemplate from "../components/ScreenTemplate";

function FormScreen(key, value) {

    const [widgets, setWidgets] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    let widgetsData = new Map();

    const updateWidgetDataByIndex = (index, data) => {
        widgetsData.set(index, data);
    }

    const removeWidget = (key) => {
        setWidgets(oldValue => {
            let tempValues = [];
            oldValue.forEach(widget => {
                if (widget.key !== key) tempValues.push(widget);
            })
            return tempValues;
        });
    }

    const appendWidget = (widgetType) => {
        const key = Math.random() * 1000;
        const rebuildWidgetsArray = (oldValues, widget) => {
            let component = {
                key: key,
                component: widget
            };
            return [...oldValues, component];
        }

        switch (widgetType) {
            case 'INPUT':
                setWidgets(oldValues => rebuildWidgetsArray(oldValues,
                    <InputWidget key={key}
                                 appendWidget={appendWidget}
                                 removeWidget={removeWidget}
                                 setDataToForm={updateWidgetDataByIndex}
                                 index={key}
                                 inputDisabled={true}
                    />));
                break;
            case 'TEXT':
                setWidgets(oldValues => rebuildWidgetsArray(oldValues,
                    <TextWidget key={key}
                                appendWidget={appendWidget}
                                removeWidget={removeWidget}
                                setDataToForm={updateWidgetDataByIndex}
                                index={key}
                                inputDisabled={true}
                    />));
                break;
        }
    }

    const saveForm = () => {
        let formItems = [];
        // Map data as the drag-and-drop reordered
        if (widgets.length > 0)
            widgets.forEach(value => {
                formItems.push(widgetsData.get(value.key));
            })
        const form = {
            name: title,
            description: description,
            formItems: formItems
        }
    }

    const handleFormSubmission = (e) => {
        e.preventDefault();
        saveForm();

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
            <div className="row flex-column align-content-center p-5">
                <form className="col-12 col-md-7 col-xl-5">
                    <FormHeader title={title}
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
                        <button className="col-5 border border-dark text-dark bg-transparent px-3 py-2"
                                onClick={() => appendWidget('INPUT')}>Append short input
                        </button>
                        <button className="col-5 border border-dark text-dark bg-transparent px-3 py-2"
                                onClick={() => appendWidget('TEXT')}>Append long
                        </button>
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <button className="btn btn-dark px-5 py-3 FormScreen-saveFormButton mb-5"
                        onClick={handleFormSubmission}>
                    Save form
                </button>
            </div>
        </ScreenTemplate>
    );
}

export default FormScreen;
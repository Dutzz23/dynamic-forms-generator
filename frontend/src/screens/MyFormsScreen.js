import React from 'react';
import ScreenTemplate from "../components/ScreenTemplate";
import {NAVBAR_TABS} from "../components/screen/ScreenNavbar";
import MyForm from "../components/form/view/MyForm";

const data = [
    {
        id: 1,
        title: "Title"
    },
    {
        id: 44,
        title: "Title sdadsa"
    },
    {
        id: 24,
        title: "Title sdsa"
    },
    {
        id: 114,
        title: "Title 22"
    }
]

function MyFormsScreen() {


    return (
        <ScreenTemplate currentTab={NAVBAR_TABS.YOUR_FORMS}>
            <div className="row">
            {data.map((form) =>
                <MyForm title={form.title} formId={form.id}/>
            )}
            </div>
        </ScreenTemplate>
    );
}

export default MyFormsScreen;
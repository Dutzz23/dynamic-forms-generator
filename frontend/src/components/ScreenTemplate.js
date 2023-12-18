import React from 'react';
import ScreenNavbar from "./screen/ScreenNavbar";
import ScreenFooter from "./screen/ScreenFooter";

function ScreenTemplate(props) {
    return (
        <div className="d-flex flex-column min-vh-100">
            <ScreenNavbar currentTab={props.currentTab}/>
            {props.children}
            <ScreenFooter/>
        </div>
    );
}

export default ScreenTemplate;
import {useEffect} from "react";

export function useAutosizeTextArea(textAreaRef, value) {
    useEffect(() => {
        if (textAreaRef) {
            textAreaRef.style.height = "0px";
            const scrollHeight = textAreaRef.scrollHeight;
            textAreaRef.style.height = scrollHeight + "px";
        }
    }, [textAreaRef, value]);
};

export const FORM_TYPES = {
    INPUT: 1,
    TEXT: 2,
    CHECK_BOX: 3,
    RADIO_BOX: 4,
    SELECT: 5,
    SCALE: 6,
    DATE: 7,
    IMAGE: 8
}

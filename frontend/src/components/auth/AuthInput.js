import React from "react";

function AuthInput({
                       name = "",
                       value = "",
                       handleValue,
                       type = "text",
                       className = "",
                       id = "",
                       placeholder = "",
                       label = ""
                   }) {
    return (
        <div className="form-group my-3">
            <label htmlFor={id} className="my-2">{label}</label>
            <input name={name} type={type} className={`form-control ${className}`} id={id}
                   placeholder={placeholder} onChange={handleValue}/>
        </div>
    )
}

export default AuthInput;
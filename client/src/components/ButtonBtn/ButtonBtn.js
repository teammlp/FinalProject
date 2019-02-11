import React from "react";
import "./ButtonBtn.css";

const ButtonBtn = props => (
    <button className="btn btn-primary" {...props}>
        {props.children}
    </button>
);

export default ButtonBtn;
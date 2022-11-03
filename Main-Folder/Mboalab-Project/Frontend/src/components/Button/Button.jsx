import React from "react";
import './Button.css'

function Btn(props) {
    return (
        <div className="btn-block2">
            <button className={props.className} type={props.type} href={props.href} >{props.text}</button>
        </div>
    );
}

export default Btn;
import React from 'react';
import "./Display.css";

const Display = (props) => {
    return (
        <div className="Display">
            {props.data}
        </div>
    );
}

export default Display;
import React, {useState} from "react";

import './ErrorMessage.css';

const ErrorMessage = ({message}) => {
    const [visible, setVisibility] = useState(true);

    if (!visible) {
        return null;
    }

    return (
        <div className="alert alert-dismissible alert-danger error-message">
            <button type="button"
                    className="close"
                    data-dismiss="alert"
                    onClick={() => setVisibility(false)}>
                &times;
            </button>
            {message}
        </div>
    )
};

export default ErrorMessage;
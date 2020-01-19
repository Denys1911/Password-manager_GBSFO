import React from "react";

import './ErrorMessage.css';

const ErrorMessage = ({message}) => (
    <div className="alert alert-dismissible alert-danger error-message">
        {message}
    </div>
);

export default ErrorMessage;
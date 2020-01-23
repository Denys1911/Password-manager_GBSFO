import React, {memo} from "react";
import {PropTypes} from "prop-types";

import './ErrorMessage.css';

const ErrorMessage = ({message}) => (
    <div className="alert alert-dismissible alert-danger error-message">
        {message}
    </div>
);

ErrorMessage.propTypes = {
    message: PropTypes.string
};

export default memo(ErrorMessage);
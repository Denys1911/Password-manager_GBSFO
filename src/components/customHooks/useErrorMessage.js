import React, {useState} from "react";
import ErrorMessage from "../ErrorMessage";

const useErrorMessage = initialMessage => {
    const [message, setErrorMessage] = useState(initialMessage);

    const resetErrorMessage = () => {
        setErrorMessage(initialMessage);
    };

    const errorMessage = message ? <ErrorMessage message={message}/> : null;

    return [errorMessage, setErrorMessage, resetErrorMessage];
};

export default useErrorMessage;
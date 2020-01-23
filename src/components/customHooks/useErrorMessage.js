import React, {useCallback, useState} from "react";
import ErrorMessage from "../ErrorMessage";

const useErrorMessage = initialMessage => {
    const [message, setErrorMessage] = useState(initialMessage);

    const resetErrorMessage = useCallback(() => {
        setErrorMessage(initialMessage);
    }, [initialMessage]);

    const errorMessage = message ? <ErrorMessage message={message}/> : null;

    return [errorMessage, setErrorMessage, resetErrorMessage];
};

export default useErrorMessage;
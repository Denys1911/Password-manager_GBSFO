import {useContext, useEffect, useState} from "react";
import FirebaseContext from "../FireBaseContext";

const usePasswordsData = () => {
    const firebase = useContext(FirebaseContext);
    const [isDataReceived, setIsDataReceived] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [data, setData] = useState([]);

    useEffect(() => {
        if (!isDataReceived) {
            firebase.getCurrentUserPasswords()
                .then(data => {
                    data = Array.isArray(data) ? data : [];
                    setData(data);
                    setIsDataReceived(true);
                })
                .catch(err => setErrorMessage(err));
        } else {
            firebase.setUserPasswords(data);
        }
    }, [data, isDataReceived, firebase]);

    return [isDataReceived, errorMessage, data, setData];
};

export default usePasswordsData;
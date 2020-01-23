import {useEffect, useState} from "react";
import firebase from "../../Firebase";

const useCurrentAuthUser = () => {
    const [loadingStatus, setLoadingStatus] = useState(true);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        firebase.auth.onAuthStateChanged(user => {
            setLoadingStatus(false);
            setCurrentUser(user);
        });
    }, []);

    return [loadingStatus, currentUser];
};

export default useCurrentAuthUser;
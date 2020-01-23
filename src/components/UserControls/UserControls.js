import React, {useCallback, useContext} from "react";
import {useErrorMessage} from "../customHooks";
import {withRouter} from "react-router-dom";
import {PropTypes} from "prop-types";
import FirebaseContext from "../FireBaseContext";
import {HOME} from "../../constants/routes";

import './UserControls.css';

const UserControls = ({history}) => {
    const firebase = useContext(FirebaseContext);
    const [errorMessage, setErrorMessage, resetErrorMessage] = useErrorMessage('');

    const handleClick = useCallback(async func => {
        resetErrorMessage();

        try {
            await func();
            history.push(HOME);
        } catch (e) {
            setErrorMessage(e.message);
        }
    }, [history, setErrorMessage, resetErrorMessage]);

    const handleLogout = useCallback(
        () => handleClick(firebase.logout), [handleClick, firebase.logout]
    );

    const handleUserDeletion = useCallback(
        () => handleClick(firebase.deleteUser), [handleClick, firebase.deleteUser]
    );

    return (
        <div className="text-center user-controls">
            <button className="btn btn-info" onClick={handleLogout}>
                Logout
            </button>
            <button className="btn btn-danger" onClick={handleUserDeletion}>
                Delete account
            </button>
            {errorMessage}
        </div>
    )
};

UserControls.propTypes = {
    history: PropTypes.object
};

export default withRouter(UserControls);
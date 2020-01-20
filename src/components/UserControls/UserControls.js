import React, {useContext, useState} from "react";
import {withRouter} from "react-router-dom";
import ErrorMessage from "../ErrorMessage";
import {PropTypes} from "prop-types";
import FirebaseContext from "../FireBaseContext";
import {HOME} from "../../constants/roures";

import './UserControls.css';

const UserControls = ({history}) => {
    const firebase = useContext(FirebaseContext);
    const [errorMessage, setErrorMessage] = useState('');

    const handleClick = async (func) => {
        setErrorMessage('');

        try {
            await func();
            history.push(HOME);
        } catch (e) {
            setErrorMessage(e.message);
        }
    };

    const handleLogout = () => handleClick(firebase.logout);
    const handleUserDeletion = () => handleClick(firebase.deleteUser);

    return (
        <div className="text-center dashboard-btn-group">
            <button className="btn btn-info" onClick={handleLogout}>
                Logout
            </button>
            <button className="btn btn-danger" onClick={handleUserDeletion}>
                Delete account
            </button>
            {errorMessage ? <ErrorMessage message={errorMessage}/> : null}
        </div>
    )
};

UserControls.propTypes = {
    history: PropTypes.object
};

export default withRouter(UserControls);
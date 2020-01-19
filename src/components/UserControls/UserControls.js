import React, {useContext} from "react";
import {withRouter} from "react-router-dom";
import FirebaseContext from "../FireBaseContext";
import {HOME} from "../../constants/roures";

import './UserControls.css';

const UserControls = ({history}) => {
    const firebase = useContext(FirebaseContext);

    const handleLogout = async () => {
        try {
            await firebase.logout();
            history.push(HOME);
        } catch (e) {
            alert(e.message)
        }
    };

    const handleUserDeletion = async () => {
        try {
            await firebase.deleteUser();
            history.push(HOME);
        } catch (e) {
            alert(e.message)
        }
    };

    return (
        <div className="text-center dashboard-btn-group">
            <button className="btn btn-info" onClick={handleLogout}>
                Logout
            </button>
            <button className="btn btn-danger" onClick={handleUserDeletion}>
                Delete account
            </button>
        </div>
    )
};

export default withRouter(UserControls);
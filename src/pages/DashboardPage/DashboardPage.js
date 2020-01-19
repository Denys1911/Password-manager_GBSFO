import React, {useContext, useState} from "react";
import PasswordItem from "../../components/PasswordItem";
import FirebaseContext from "../../components/FireBaseContext";
import {withRouter} from "react-router-dom";
import {HOME} from "../../constants/roures";

import './DashboardPage.css';

const DashboardPage = ({history}) => {
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
        <>
            <div className="jumbotron d-flex flex-column text-center mb-0 dashboard-page">
                <ul className="list-group">
                    <li className="list-group-item">
                        <PasswordItem/>
                    </li>
                    <li className="list-group-item">
                        <PasswordItem/>
                    </li>
                    <li className="list-group-item">
                        <PasswordItem/>
                    </li>
                </ul>
                <button className="btn btn-outline-primary mx-auto mt-3">
                    Add new password
                </button>
            </div>
            <div className="text-center dashboard-btn-group">
                <button className="btn btn-info" onClick={handleLogout}>
                    Logout
                </button>
                <button className="btn btn-danger" onClick={handleUserDeletion}>
                    Delete account
                </button>
            </div>
        </>
    )
};

export default withRouter(DashboardPage);
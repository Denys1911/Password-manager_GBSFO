import React, {useContext, useEffect, useState} from "react";
import PasswordItem from "../../components/PasswordItem";
import FirebaseContext from "../../components/FireBaseContext";
import {withRouter} from "react-router-dom";
import {HOME} from "../../constants/roures";
import Spinner from "../../components/Spinner";

import './DashboardPage.css';
import NewPasswordForm from "../../components/NewPasswordForm";

const DashboardPage = ({history}) => {
    const firebase = useContext(FirebaseContext);
    const [isDataReceived, setIsDataReceived] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        if (!isDataReceived) {
            firebase.getCurrentUserPasswords()
                .then(data => {
                    data = Array.isArray(data) ? data : [];
                    setData(data);
                    setIsDataReceived(true)
                });
        } else {
            firebase.setUserPasswords(data);
        }
    }, [data, isDataReceived, firebase]);

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

    const handleNewPasswordCreation = (accountName, password) => {
        setData(currentData => {
            return currentData ? [...currentData, {accountName, password}] : [{accountName, password}]
        });
    };

    const allPasswords = data && data.length ? data.map((item, id) => (
        <li key={id} className="list-group-item">
            <PasswordItem data={item}/>
        </li>
    )) : <li className="list-group-item empty-data">No passwords available yet</li>;

    return (
        <>
            <div className="jumbotron d-flex flex-column text-center mb-0 dashboard-page">
                <h2>
                    Welcome to your dashboard, <span className="text-success">{firebase.getCurrentUsername()}</span>!
                </h2>
                <ul className="list-group">
                    {isDataReceived ? allPasswords : <Spinner/>}
                </ul>
                <hr className="horizontal"/>
                <NewPasswordForm onPasswordCreate={handleNewPasswordCreation}/>
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
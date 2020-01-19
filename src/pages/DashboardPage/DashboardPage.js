import React, {useContext, useEffect, useState} from "react";
import PasswordItem from "../../components/PasswordItem";
import Spinner from "../../components/Spinner";
import NewPasswordForm from "../../components/NewPasswordForm";
import UserControls from "../../components/UserControls";
import FirebaseContext from "../../components/FireBaseContext";

import './DashboardPage.css';

const DashboardPage = () => {
    const firebase = useContext(FirebaseContext);
    const [isDataReceived, setIsDataReceived] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        if (!isDataReceived) {
            firebase.getCurrentUserPasswords()
                .then(data => {
                    data = Array.isArray(data) ? data : [];
                    setData(data);
                    setIsDataReceived(true);
                });
        } else {
            firebase.setUserPasswords(data);
        }
    }, [data, isDataReceived, firebase]);

    const handleNewPasswordCreation = (accountName, password) => {
        setData(currentData => {
            return currentData ? [...currentData, {accountName, password}] : [{accountName, password}]
        });
    };

    const allPasswords = data && data.length ?
        data.map((item, id) => (
        <li key={id} className="list-group-item">
            <PasswordItem data={item}/>
        </li>
    )) : <li className="list-group-item empty-data">No passwords available yet</li>;

    return (
        <>
            <div className="jumbotron d-flex flex-column text-center mb-0 dashboard">
                <h2>
                    Welcome to your dashboard, <span className="text-success">{firebase.getCurrentUsername()}</span>!
                </h2>
                <ul className="list-group">
                    {isDataReceived ? allPasswords : <Spinner/>}
                </ul>
                <hr className="horizontal"/>
                <NewPasswordForm onPasswordCreate={handleNewPasswordCreation}/>
            </div>
            <UserControls/>
        </>
    )
};

export default DashboardPage;
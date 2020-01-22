import React, {useContext, useEffect, useState} from "react";
import PasswordItem from "../../components/PasswordItem";
import Spinner from "../../components/Spinner";
import ErrorMessage from "../../components/ErrorMessage";
import NewPasswordForm from "../../components/NewPasswordForm";
import UserControls from "../../components/UserControls";
import FirebaseContext from "../../components/FireBaseContext";

import './DashboardPage.css';

const DashboardPage = () => {
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

    const handleNewPasswordCreation = (accountName, password) => {
        setData(currentData => {
            const newPasswordObj = {
                accountName,
                password,
                id: Math.random().toString(36).substr(2, 9) // to get random id
            };

            return currentData ? [...currentData, newPasswordObj] : [newPasswordObj]
        });
    };

    const handlePasswordUpdate = id => (accountName, password) => {
        setData(currentData => currentData.map(item => {
            return item.id === id ? {id, accountName, password} : item;
        }));
    };

    const handlePasswordDeletion = id => {
        setData(currentData => currentData.filter(item => item.id !== id));
    };

    const allPasswords = data && data.length ?
        data.map(({id, ...rest}) => (
            <li key={id} className="list-group-item">
                <PasswordItem data={rest}
                              onPasswordUpdate={handlePasswordUpdate(id)}
                              onPasswordDelete={() => handlePasswordDeletion(id)}/>
            </li>)
        ) : <li className="list-group-item empty-data">No passwords created yet</li>;

    const dashboardPanel = !isDataReceived ? <Spinner/> : (
        <>
            <h2>
                Welcome to your dashboard, <span className="text-success">{firebase.getCurrentUsername()}</span>!
            </h2>
            <ul className="list-group">
                {allPasswords}
            </ul>
        </>
    );

    return !errorMessage ? (
        <>
            <div className="jumbotron d-flex flex-column text-center mb-0 dashboard">
                <div className="dashboard-panel">
                    {dashboardPanel}
                </div>
                <hr className="horizontal"/>
                <NewPasswordForm onPasswordCreate={handleNewPasswordCreation}/>
            </div>
            <UserControls/>
        </>
    ) : <ErrorMessage message={errorMessage}/>
};

export default DashboardPage;
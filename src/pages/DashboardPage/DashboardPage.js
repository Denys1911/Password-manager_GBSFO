import React, {useCallback} from "react";
import {usePasswordsData} from "../../components/customHooks";
import Spinner from "../../components/Spinner";
import ErrorMessage from "../../components/ErrorMessage";
import NewPasswordForm from "../../components/NewPasswordForm";
import UserControls from "../../components/UserControls";
import DashboardPanel from "../../components/DashboardPanel";

import './DashboardPage.css';

const DashboardPage = () => {
    const [isDataReceived, errorMessage, data, setData] = usePasswordsData();

    const handleNewPasswordCreation = useCallback((accountName, password) => {
        setData(currentData => {
            const newPasswordObj = {
                accountName,
                password,
                id: Math.random().toString(36).substr(2, 9) // to get random id
            };

            return currentData ? [...currentData, newPasswordObj] : [newPasswordObj]
        });
    }, [setData]);

    const handlePasswordUpdate = useCallback(id => (accountName, password) => {
        setData(currentData => currentData.map(item => {
            return item.id === id ? {id, accountName, password} : item;
        }));
    }, [setData]);

    const handlePasswordDeletion = useCallback(id => {
        setData(currentData => currentData.filter(item => item.id !== id));
    }, [setData]);

    return !errorMessage ? (
        <>
            <div className="jumbotron d-flex flex-column text-center mb-0 dashboard">
                <div className="dashboard-panel-wrapper">
                    {!isDataReceived ? <Spinner /> : <DashboardPanel data={data}
                                                                     handlePasswordUpdate={handlePasswordUpdate}
                                                                     handlePasswordDeletion={handlePasswordDeletion}/>
                    }
                </div>
                <hr/>
                <NewPasswordForm onPasswordCreate={handleNewPasswordCreation}/>
            </div>
            <UserControls/>
        </>
    ) : <ErrorMessage message={errorMessage}/>
};

export default DashboardPage;
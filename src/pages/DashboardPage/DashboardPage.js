import React from "react";
import PasswordItem from "../../components/PasswordItem";

import './DashboardPage.css';

const DashboardPage = () => {
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
                <button className="btn btn-info">
                    Logout
                </button>
                <button className="btn btn-danger">
                    Delete account
                </button>
            </div>
        </>
    )
};

export default DashboardPage;
import React from "react";
import Header from "../Header/Header";
import LoginPage from "../../pages/LoginPage";
import RegisterPage from "../../pages/RegisterPage";
import DashboardPage from "../../pages/DashboardPage";
import HomePage from "../../pages/HomePage";
import ErrorBoundary from "../ErrorBoundary";

import './App.css';

const App = () => {
    return (
        <ErrorBoundary>
            <div className="app">
                <Header/>
                <HomePage/>
                <LoginPage/>
                <RegisterPage/>
                <DashboardPage/>
            </div>
        </ErrorBoundary>
    );
};

export default App;
import React from "react";
import Header from "../Header/Header";
import LoginPage from "../../pages/LoginPage";
import RegisterPage from "../../pages/RegisterPage";
import DashboardPage from "../../pages/DashboardPage";
import HomePage from "../../pages/HomePage";
import ErrorBoundary from "../ErrorBoundary";
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import * as routes from '../../constants/roures';

import './App.css';

const App = () => {
    return (
        <ErrorBoundary>
            <Router>
                <div className="app">
                    <Header/>
                    <Route path={routes.HOME} exact component={HomePage}/>
                    <Route path={routes.LOGIN}>
                        <LoginPage/>
                    </Route>
                    <Route path={routes.REGISTER}>
                        <RegisterPage/>
                    </Route>
                    <Route path={routes.DASHBOARD}>
                        <DashboardPage/>
                    </Route>
                </div>
            </Router>
        </ErrorBoundary>
    );
};

export default App;
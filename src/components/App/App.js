import React, {useEffect, useState} from "react";
import Header from "../Header/Header";
import LoginPage from "../../pages/LoginPage";
import RegisterPage from "../../pages/RegisterPage";
import DashboardPage from "../../pages/DashboardPage";
import HomePage from "../../pages/HomePage";
import Spinner from "../Spinner";
import ErrorBoundary from "../ErrorBoundary";
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import Firebase from "../../Firebase";
import FirebaseContext from "../FireBaseContext";
import * as routes from '../../constants/roures';

import './App.css';

const App = () => {
    const firebase = new Firebase();
    const [loadingStatus, setLoadingStatus] = useState(true);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        firebase.auth.onAuthStateChanged(user => {
            setLoadingStatus(false);
            setCurrentUser(user);
        });
    }, []);

    return !loadingStatus ? (
        <ErrorBoundary>
            <FirebaseContext.Provider value={firebase}>
                <Router>
                    <div className="app">
                        <Header currentUser={currentUser}/>
                        <Route path={routes.HOME} exact component={HomePage}/>
                        <Route path={routes.LOGIN}>
                            {currentUser ? <Redirect to={routes.DASHBOARD}/> : <LoginPage/>}
                        </Route>
                        <Route path={routes.REGISTER}>
                            {currentUser ? <Redirect to={routes.DASHBOARD}/> : <RegisterPage/>}
                        </Route>
                        <Route path={routes.DASHBOARD}>
                            {currentUser ? <DashboardPage/> : <Redirect to={routes.LOGIN}/>}
                        </Route>
                    </div>
                </Router>
            </FirebaseContext.Provider>
        </ErrorBoundary>
    ) : <Spinner/>;
};

export default App;
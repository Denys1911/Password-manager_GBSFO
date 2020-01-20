import React, {useContext, useState} from "react";
import {usePasswordType} from "../../components/customHooks/usePasswordType";
import FirebaseContext from "../../components/FireBaseContext";
import ErrorMessage from "../../components/ErrorMessage";
import {PropTypes} from "prop-types";
import {withRouter} from "react-router-dom";
import {DASHBOARD} from "../../constants/routes";

import './LoginPage.css';

const LoginPage = ({history}) => {
    const firebase = useContext(FirebaseContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const {passwordInputType, inputTypeChangingBtn} = usePasswordType();

    const handleLogin = async e => {
        e.preventDefault();
        setErrorMessage('');

        try {
            await firebase.login(email, password);
            history.push(DASHBOARD);
        } catch (e) {
            setErrorMessage(e.message);
        }
    };

    return (
        <div className="jumbotron text-center login-page"
             onSubmit={handleLogin}>
            <form className="d-flex flex-column col-md-5 col-sm-8 mx-auto form-group">
                <label>
                    Email:
                    <input className="form-control"
                           type="text"
                           value={email}
                           onChange={e => setEmail(e.target.value)}/>
                </label>
                <label>
                    Password:
                    <input className="form-control"
                           type={passwordInputType}
                           value={password}
                           onChange={e => setPassword(e.target.value)}/>
                </label>
                {inputTypeChangingBtn}
                <input className="btn btn-outline-success mx-auto" type="submit"/>
            </form>
            {errorMessage ? <ErrorMessage message={errorMessage}/> : null}
        </div>
    )
};

LoginPage.propTypes = {
    history: PropTypes.object
};

export default withRouter(LoginPage);
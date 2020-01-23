import React, {useCallback, useContext} from "react";
import {useErrorMessage, useInput, usePasswordType} from "../../components/customHooks";
import FirebaseContext from "../../components/FireBaseContext";
import {PropTypes} from "prop-types";
import {withRouter} from "react-router-dom";
import {DASHBOARD} from "../../constants/routes";

import './LoginPage.css';

const LoginPage = ({history}) => {
    const firebase = useContext(FirebaseContext);
    const [email, emailControl] = useInput('');
    const [password, passwordControl] = useInput('');
    const [errorMessage, setErrorMessage, resetErrorMessage] = useErrorMessage('');
    const [passwordInputType, inputTypeChangingBtn] = usePasswordType('password');

    const handleLogin = useCallback(async e => {
        e.preventDefault();
        resetErrorMessage();

        try {
            await firebase.login(email, password);
            history.push(DASHBOARD);
        } catch (e) {
            setErrorMessage(e.message);
        }
    }, [history, email, password, firebase, resetErrorMessage, setErrorMessage]);

    return (
        <div className="jumbotron text-center login-page"
             onSubmit={handleLogin}>
            <form className="d-flex flex-column col-md-5 col-sm-8 mx-auto form-group">
                <label>
                    Email:
                    <input className="form-control"
                           type="text"
                           {...emailControl}/>
                </label>
                <label>
                    Password:
                    <input className="form-control"
                           type={passwordInputType}
                           {...passwordControl}/>
                </label>
                {inputTypeChangingBtn}
                <input className="btn btn-outline-success mx-auto" type="submit"/>
            </form>
            {errorMessage}
        </div>
    )
};

LoginPage.propTypes = {
    history: PropTypes.object
};

export default withRouter(LoginPage);
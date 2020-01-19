import React, {useContext, useState} from "react";
import FirebaseContext from "../../components/FireBaseContext";
import {withRouter} from "react-router-dom";
import {DASHBOARD} from "../../constants/roures";

import './LoginPage.css';

const LoginPage = ({history}) => {
    const firebase = useContext(FirebaseContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async e => {
        e.preventDefault();

        try {
            await firebase.login(email, password);
            history.push(DASHBOARD);
        } catch (e) {
            alert(e.message);
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
                           type="password"
                           value={password}
                           onChange={e => setPassword(e.target.value)}/>
                </label>
                <input className="btn btn-outline-success col-4 mx-auto mt-3" type="submit"/>
            </form>
        </div>
    )
};

export default withRouter(LoginPage);
import React from "react";

import './LoginPage.css';

const LoginPage = () => {
    return (
        <div className="jumbotron text-center login-page">
            <form className="d-flex flex-column col-md-5 col-sm-8 mx-auto form-group">
                <label>
                    Email:
                    <input className="form-control"
                           type="text"

                           />
                </label>
                <label>
                    Password:
                    <input className="form-control"
                           type="password"

                           />
                </label>
                <input className="btn btn-outline-success col-4 mx-auto mt-3" type="submit"/>
            </form>
        </div>
    )
};

export default LoginPage;
import React from "react";

const RegisterPage = () => {
    return (
        <div className="jumbotron text-center register-page">
            <form className="d-flex flex-column col-md-5 col-sm-8 mx-auto form-group">
                <label>
                    Name:
                    <input className="form-control"
                           type="text"

                    />
                </label>
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

export default RegisterPage;
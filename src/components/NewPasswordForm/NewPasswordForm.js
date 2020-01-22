import React, {useState} from "react";
import {useInput, usePasswordType} from "../customHooks";
import ErrorMessage from "../ErrorMessage";
import {PropTypes} from "prop-types";

import './NewPasswordForm.css';

const NewPasswordForm = ({onPasswordCreate}) => {
    const [accountName, controlAccountName, resetAccountName] = useInput('');
    const [password, controlPassword, resetPassword] = useInput('');
    const [errorMessage, setErrorMessage] = useState('');
    const [passwordInputType, inputTypeChangingBtn] = usePasswordType('password');

    const onSubmit = e => {
        e.preventDefault();
        setErrorMessage('');

        if (!(accountName && password)) {
            setErrorMessage('Fill all fields, please');
            return;
        }

        onPasswordCreate(accountName, password);
        resetAccountName();
        resetPassword();
    };

    return (
        <form className="form-group d-flex flex-column col-sm-6 col-lg-4 mx-auto new-password-form"
              onSubmit={onSubmit}>
            <label>
                Account name:
                <input className="form-control"
                       type="text"
                       {...controlAccountName}/>
            </label>
            <label>
                Password:
                <input className="form-control"
                       type={passwordInputType}
                       {...controlPassword}/>
            </label>
            {inputTypeChangingBtn}
            <input className="btn btn-outline-primary col-md-6"
                   type="submit"
                   value="Add new password"/>
             {errorMessage ? <ErrorMessage message={errorMessage}/> : null}
        </form>
    )
};

NewPasswordForm.propTypes = {
    onPasswordCreate: PropTypes.func
};

export default NewPasswordForm;
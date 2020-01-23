import React, {useCallback, memo} from "react";
import {useErrorMessage, useInput, usePasswordType} from "../customHooks";
import {PropTypes} from "prop-types";

import './NewPasswordForm.css';

const NewPasswordForm = ({onPasswordCreate}) => {
    const [accountName, controlAccountName, resetAccountName] = useInput('');
    const [password, controlPassword, resetPassword] = useInput('');
    const [errorMessage, setErrorMessage, resetErrorMessage] = useErrorMessage('');
    const [passwordInputType, inputTypeChangingBtn] = usePasswordType('password');

    const onSubmit = useCallback(e => {
        e.preventDefault();
        resetErrorMessage();

        if (!(accountName && password)) {
            setErrorMessage('Fill all fields, please');
            return;
        }

        onPasswordCreate(accountName, password);
        resetAccountName();
        resetPassword();
    }, [onPasswordCreate, resetErrorMessage, setErrorMessage, resetAccountName,
        resetPassword, accountName, password]);

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
             {errorMessage}
        </form>
    )
};

NewPasswordForm.propTypes = {
    onPasswordCreate: PropTypes.func
};

export default memo(NewPasswordForm);
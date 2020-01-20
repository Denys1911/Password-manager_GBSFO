import React, {useState} from "react";
import {usePasswordType} from "../customHooks/usePasswordType";
import ErrorMessage from "../ErrorMessage";
import {PropTypes} from "prop-types";

import './NewPasswordForm.css';

const NewPasswordForm = ({onPasswordCreate}) => {
    const [accountName, setAccountName] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const {passwordInputType, inputTypeChangingBtn} = usePasswordType();

    const onSubmit = e => {
        e.preventDefault();
        setErrorMessage('');

        if (!(accountName && password)) {
            setErrorMessage('Fill all fields, please');
            return;
        }

        onPasswordCreate(accountName, password);
        setAccountName('');
        setPassword('');
    };

    return (
        <form className="form-group d-flex flex-column col-sm-6 col-lg-4 mx-auto new-password-form"
              onSubmit={onSubmit}>
            <label>
                Account name:
                <input className="form-control"
                       type="text"
                       value={accountName}
                       onChange={e => setAccountName(e.target.value)}/>
            </label>
            <label>
                Password:
                <input className="form-control"
                       type={passwordInputType}
                       value={password}
                       onChange={e => setPassword(e.target.value)}/>
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
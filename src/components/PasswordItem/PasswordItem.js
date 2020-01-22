import React, {useState} from "react";
import {useInput, usePasswordType} from "../customHooks";
import ErrorMessage from "../ErrorMessage";
import {PropTypes} from "prop-types";

import './PasswordItem.css';

const PasswordItem = ({data, onPasswordDelete, onPasswordUpdate}) => {
    const [accountName, controlAccountName] = useInput(data.accountName);
    const [password, controlPassword] = useInput(data.password);
    const [errorMessage, setErrorMessage] = useState('');
    const [passwordInputType, inputTypeChangingBtn] = usePasswordType();

    const onSubmit = e => {
        e.preventDefault();

        setErrorMessage('');

        if (!(accountName && password)) {
            setErrorMessage('Fill all fields, please');
            return;
        }

        onPasswordUpdate(accountName, password);
    };

    return (
        <form className="password-item" onSubmit={onSubmit}>
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
            <div className="d-flex justify-content-center password-item-buttons">
                {inputTypeChangingBtn}
                <input className="btn btn-outline-info"
                       type="submit"
                       value="Update"/>
                <input className="btn btn-outline-warning"
                       type="button"
                       value="Delete"
                       onClick={() => onPasswordDelete()}/>
            </div>
            {errorMessage ? <ErrorMessage message={errorMessage}/> : null}
        </form>
    );
};

PasswordItem.propTypes = {
    data: PropTypes.object,
    onPasswordDelete: PropTypes.func,
    onPasswordUpdate: PropTypes.func
};

export default PasswordItem;
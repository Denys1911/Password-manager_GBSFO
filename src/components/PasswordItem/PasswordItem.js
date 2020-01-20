import React, {useState} from "react";
import ErrorMessage from "../ErrorMessage";
import {usePasswordType} from "../customHooks/usePasswordType";
import {PropTypes} from "prop-types";

import './PasswordItem.css';

const PasswordItem = ({data, onPasswordDelete, onPasswordUpdate}) => {
    const [accountName, setAccountName] = useState(data.accountName);
    const [password, setPassword] = useState(data.password);
    const [errorMessage, setErrorMessage] = useState('');
    const {passwordInputType, inputTypeChangingBtn} = usePasswordType();

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
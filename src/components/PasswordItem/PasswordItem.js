import React, {useState} from "react";
import ErrorMessage from "../ErrorMessage";

import './PasswordItem.css';

const PasswordItem = ({data, onPasswordDelete, onPasswordUpdate}) => {
    const [accountName, setAccountName] = useState(data.accountName);
    const [password, setPassword] = useState(data.password);
    const [passwordInputType, setPasswordInputType] = useState('password');
    const [errorMessage, setErrorMessage] = useState(null);

    const onSubmit = e => {
        e.preventDefault();

        setErrorMessage(null);

        if (!(accountName && password)) {
            setErrorMessage('Fill all fields, please');
            return;
        }

        onPasswordUpdate(accountName, password);
    };

    const changeInputTypeBtn = passwordInputType === 'password' ?
        <input className="btn btn-outline-secondary"
               type="button"
               value="Reveal password"
               onClick={() => setPasswordInputType('text')}/>
        : <input className="btn btn-outline-secondary"
                 type="button"
                 value="Hide password"
                 onClick={() => setPasswordInputType('password')}/>;

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
                {changeInputTypeBtn}
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

export default PasswordItem;
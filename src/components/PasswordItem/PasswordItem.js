import React, {useState} from "react";

import './PasswordItem.css';

const PasswordItem = ({data}) => {
    const [accountName, setAccountName] = useState(data.accountName);
    const [password, setPassword] = useState(data.password);
    const [passwordInputType, setPasswordInputType] = useState('password');

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
        <form className="password-item">
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
                <input className="btn btn-outline-info" type="button" value="Update"/>
                <input className="btn btn-outline-warning" type="button" value="Delete"/>
            </div>
        </form>
    );
};

export default PasswordItem;
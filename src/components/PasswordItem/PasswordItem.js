import React from "react";

import './PasswordItem.css';

const PasswordItem = ({data}) => {
    return (
        <form className="password-item">
            <label>
                Account name:
                <input className="form-control"
                       type="text"
                       value={data.accountName}
                />
            </label>
            <label>
                Password:
                <input className="form-control"
                       type="password"
                       value={data.password}
                />
            </label>
            <div className="d-flex justify-content-center password-item-buttons">
                <input className="btn btn-outline-secondary" type="button" value="Reveal password"/>
                <input className="btn btn-outline-info" type="button" value="Update"/>
                <input className="btn btn-outline-warning" type="button" value="Delete"/>
            </div>
        </form>
    );
};

export default PasswordItem;
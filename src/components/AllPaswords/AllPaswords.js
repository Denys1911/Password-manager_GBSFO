import React from "react";
import PasswordItem from "../PasswordItem";
import {PropTypes} from "prop-types";

import './AllPaswords.css';

const AllPasswords = ({data, handlePasswordUpdate, handlePasswordDeletion}) => {
    return data && data.length ? data.map(({id, ...rest}) => (
            <li key={id} className="list-group-item">
                <PasswordItem data={rest}
                              onPasswordUpdate={handlePasswordUpdate(id)}
                              onPasswordDelete={() => handlePasswordDeletion(id)}/>
            </li>
        )
    ) : <li className="list-group-item empty-data">No passwords created yet</li>;
};

AllPasswords.propTypes = {
    data: PropTypes.array,
    handlePasswordUpdate: PropTypes.func,
    handlePasswordDeletion: PropTypes.func
};

export default AllPasswords;
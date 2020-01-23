import React, {useContext, memo} from "react";
import AllPasswords from "../AllPaswords";
import FirebaseContext from "../FireBaseContext";

import './DashboardPanel.css';

const DashboardPanel = props => {
        const firebase = useContext(FirebaseContext);

        return (
            <>
                <h2 className="dashboard-panel-title">
                    Welcome to your dashboard, <span className="text-success">{firebase.getCurrentUsername()}</span>!
                </h2>
                <ul className="list-group">
                    <AllPasswords {...props}/>
                </ul>
            </>
        );
    };

export default memo(DashboardPanel);
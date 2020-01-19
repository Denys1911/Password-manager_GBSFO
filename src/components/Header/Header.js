import React from "react";
import {NavLink} from "react-router-dom";
import * as routes from '../../constants/roures';

import './Header.css';

const Header = ({currentUser}) => {
    const authLinks = currentUser ? null : (
        <>
            <li className="nav-item">
                <NavLink to={routes.LOGIN} className="nav-link" activeClassName="active-link">
                    Login
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to={routes.REGISTER} className="nav-link" activeClassName="active-link">
                    Register
                </NavLink>
            </li>
        </>
    );

    const dashBoardLink = currentUser ? (
        <li className="nav-item">
            <NavLink to={routes.DASHBOARD} className="nav-link" activeClassName="active-link">
                Dashboard
            </NavLink>
        </li>
    ) : null;

    return (
        <header className="header">
            <nav className="navbar navbar-expand navbar-dark bg-primary">
                <div className="collapse navbar-collapse">
                    <h1 className="text-success text-center header-title">
                        Password manager
                    </h1>
                    <ul className="navbar-nav header-list">
                        <li className="nav-item">
                            <NavLink to={routes.HOME} exact className="nav-link" activeClassName="active-link">
                                Home
                            </NavLink>
                        </li>
                        {authLinks}
                        {dashBoardLink}
                    </ul>
                </div>
            </nav>
        </header>
    )
};

export default Header;
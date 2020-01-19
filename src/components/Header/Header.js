import React from "react";

import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <nav className="navbar navbar-expand navbar-dark bg-primary">
                <div className="collapse navbar-collapse">
                    <h1 className="text-success text-center header-title">
                        Password manager
                    </h1>
                    <ul className="navbar-nav header-list">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Register</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Dashboard</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
};

export default Header;
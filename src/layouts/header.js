import React from "react";
import logo from '../logo.svg';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
            <div className="container-fluid">
                <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a className="navbar-brand d-flex align-items-center fw-bold" href="/">
                        <img src={logo} width={60} height={30} className="App-logo" alt="logo" />
                        <span>Demo</span> 
                    </a>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" type="button">Sign In</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" type="button">Sign Up</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="fa-solid fa-user me-2"></i>Hi, user</a>
                            <ul className="dropdown-menu dropdown-menu-lg-end">
                                <li><a className="dropdown-item mb-2">Account</a></li>
                                <li><a className="dropdown-item mb-2">Ticket History</a></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><a className="dropdown-item mb-2">Log out</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
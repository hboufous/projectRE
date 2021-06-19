import React from "react";
import { Link, useHistory } from 'react-router-dom';
import history from '../../../histore'
import { useUserAuthentication } from "../../../hooks/useUserAuthentication";

export default function Header(props) {
    const { setIsLoggedIn } = useUserAuthentication();
    const logOut = () => {
        window.localStorage.clear();
        setIsLoggedIn(false);
        history.push('/login');
        window.location.reload();
    }
    return (
        <>
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars"></i></a>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <Link to="/home" className="nav-link">Home</Link>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown">
                        <a className="nav-link" onClick={logOut} role="button">
                            <i class="fas fa-sign-out-alt"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-widget="fullscreen" href="#" role="button">
                            <i className="fas fa-expand-arrows-alt"></i>
                        </a>
                    </li>
                </ul>
            </nav>

        </>
    )

}
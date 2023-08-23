import React,{Fragment} from 'react';
import {Outlet, Link} from "react-router-dom";

import {ReactComponent as CrwnLogo} from "../../assets/crown.svg";

import './navigation.style.scss';

const NavigationComponent = () => {
    return (
        <Fragment>
            <nav className="navigation">
                <Link to='/' className='logo-container'>
                    <CrwnLogo className="logo"/>
                </Link>
                <div className="nav-links-container">
                    <Link to="/">Home</Link>
                    <Link className="nav-link" to="/shop">Shop</Link>
                    <Link className="nav-link" to="/sign-in">Sign In</Link>
                </div>
            </nav>
            <Outlet/>
        </Fragment>
    );
};

export default NavigationComponent;
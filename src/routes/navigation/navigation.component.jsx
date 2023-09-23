import React,{Fragment} from 'react';
import {Outlet, Link} from "react-router-dom";

import {ReactComponent as CrwnLogo} from "../../assets/crown.svg";

import './navigation.style.scss';

/*The Links object...*/
const links = [
    {path: '/', text:'Home'},
    {path: '/shop', text:'Shop'},
    {path: '/auth', text:'Sign In'},
]

const NavigationComponent = () => {
    return (
        <Fragment>
            <nav className="navigation">
                <Link to='/' className='logo-container'>
                    <CrwnLogo className="logo"/>
                </Link>
                <div className='nav-links-container'>
                    <Link to='/'  className="nav-link">Home</Link>
                    <Link to='/shop'  className="nav-link">SHOP</Link>
                    <Link to='/auth'  className="nav-link">SIGN IN</Link>
                </div>
                {/*<div className="nav-links-container">
                    {
                        links.map(link =>
                            <Link
                                key={link.text}
                                to={link.path}
                                className="nav-link"
                            >
                               {link.text}
                            </Link>)
                    }
                </div>*/}
            </nav>
            <Outlet/>
        </Fragment>
    );
};

export default NavigationComponent;
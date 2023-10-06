import React, { Fragment, useContext, useState } from 'react';
import {Outlet, Link} from "react-router-dom";
import {useSelector} from 'react-redux';

import {LogoContainer, NavigationContainer, NavLink, NavLinks} from "./navigation.styles";

import CartIconComponent from '../../components/cart-icon/cart-icon.component';
import CartDropdownComponent from '../../components/cart-dropdown/cart-dropdown.component';

import { CartContext } from '../../contexts/cart.context';
import {selectCurrentUser} from "../../store/user/user.selector";

import {ReactComponent as CrwnLogo} from "../../assets/crown.svg";
import { signOutUser } from '../../utils/firebase/firebase.utils';

const NavigationComponent = () => {
    const currentUser =  useSelector(selectCurrentUser);
    const {isCartOpen} = useContext(CartContext);

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrwnLogo className="logo"/>
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop' >SHOP</NavLink>
                    {
                        currentUser ?
                            (<NavLink as="span" onClick={signOutUser} >
                                SIGN OUT
                            </NavLink>) :
                            (<NavLink to='/auth' >SIGN IN</NavLink>)
                    }
                    <CartIconComponent/>
                </NavLinks>
                {isCartOpen && <CartDropdownComponent/>}
            </NavigationContainer>
            <Outlet/>
            {/*<nav className="navigation">
                <Link to='/' className='logo-container'>
                    <CrwnLogo className="logo"/>
                </Link>
                <div className='nav-links-container'>
                    <Link to='/'  className="nav-link">Home</Link>
                    <Link to='/shop' className="nav-link">SHOP</Link>
                    {
                        currentUser ?
                            (<span className='nav-link' onClick={signOutUser}>SIGN OUT</span>) :
                            <Link to='/auth' className="nav-link">SIGN IN</Link>
                    }
                    <CartIconComponent/>
                </div>
                
                { isCartOpen && <CartDropdownComponent/> }
            </nav>
            <Outlet/>*/}
        </Fragment>
    );
};

export default NavigationComponent;
import React, { Fragment } from 'react';
import {Outlet, Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {LogoContainer, NavigationContainer, NavLink, NavLinks} from "./navigation.styles";

import CartIconComponent from '../../components/cart-icon/cart-icon.component';
import CartDropdownComponent from '../../components/cart-dropdown/cart-dropdown.component';

import {selectCurrentUser} from "../../store/user/user.selector";

import {ReactComponent as CrwnLogo} from "../../assets/crown.svg";
// import { signOutUser } from '../../utils/firebase/firebase.utils';
import {selectCartIsOpen} from "../../store/cart/cart.selector";
import {signOutStart} from "../../store/user/user.actions";

const NavigationComponent = () => {
	const dispatch = useDispatch();
    const currentUser =  useSelector(selectCurrentUser);
	const isCartOpen = useSelector(selectCartIsOpen);
	const signOutUser = () => dispatch(signOutStart());
		
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
                            (<NavLink to='#' as="span" onClick={signOutUser} >
                                SIGN OUT
                            </NavLink>) :
                            (<NavLink to='/auth' >SIGN IN</NavLink>)
                    }
                    <CartIconComponent/>
                </NavLinks>
                {isCartOpen && <CartDropdownComponent/>}
            </NavigationContainer>
            <Outlet/>
        </Fragment>
    );
};

export default NavigationComponent;

import React from 'react';

import './cart-icon.styles.scss';

import {CartIconContainer, ItemCount, ShoppingIcon} from "./cart-icon.styles";
import {useDispatch, useSelector} from "react-redux";
import {selectCartCount, selectCartIsOpen} from "../../store/cart/cart.selector";
import {setCartIsOpen} from "../../store/cart/cart.actions";

const CartIconComponent = () => {
	const dispatch = useDispatch();
	const isCartOpen = useSelector(selectCartIsOpen);
	const cartCount = useSelector(selectCartCount);
	
	const toggleIsCartOpen = () => dispatch(setCartIsOpen(!isCartOpen));
	
	return (
		<CartIconContainer onClick={toggleIsCartOpen}>
			<ShoppingIcon className="shopping-icon" />
			<ItemCount>{cartCount}</ItemCount>
		</CartIconContainer>
	);
};

export default CartIconComponent;

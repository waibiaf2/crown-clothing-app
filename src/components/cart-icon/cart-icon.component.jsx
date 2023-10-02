import React, { useContext } from 'react';

import './cart-icon.styles.scss';

import { CartContext } from '../../contexts/cart.context';
import {CartIconContainer, ItemCount, ShoppingIcon} from "./cart-icon.styles";

const CartIconComponent = () => {
	const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);
	const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
	
	return (
		<CartIconContainer onClick={toggleIsCartOpen}>
			<ShoppingIcon className="shopping-icon" />
			<ItemCount>{cartCount}</ItemCount>
		</CartIconContainer>
	);
};

export default CartIconComponent;
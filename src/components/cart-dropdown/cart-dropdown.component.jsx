import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// import './cart-dropdown.styles.scss';
import ButtonComponent from '../button/button.component';
import CartItemComponent from '../cart-item/cart-item.component';
import { CartContext } from '../../contexts/cart.context';
import {CartDropDownContainer, CartItems, EmptyMessage} from "./cart-dropdown.styles";

const CartDropdownComponent = () => {
	const {cartItems} = useContext(CartContext);
	const navigate = useNavigate();

	const goToCheckoutHandler = () => navigate('/checkout');
	return (
		<CartDropDownContainer>
			<CartItems>
				{cartItems.length ?
					(cartItems.map(item => <CartItemComponent key={item.id} cartItem={item}/>)):
					(<EmptyMessage>Your cart is empty</EmptyMessage>)
				}
			</CartItems>
			<ButtonComponent onClick={goToCheckoutHandler}>
				Go to checkout
			</ButtonComponent>
		</CartDropDownContainer>
	);
};

export default CartDropdownComponent;
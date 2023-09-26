import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import './cart-dropdown.styles.scss';
import ButtonComponent from '../button/button.component';
import CartItemComponent from '../cart-item/cart-item.component';
import { CartContext } from '../../contexts/cart.context';

const CartDropdownComponent = () => {
	const {cartItems} = useContext(CartContext);
	return (
		<div className="cart-dropdown-container">
			<div className="cart-items">
				{cartItems.map(item => <CartItemComponent key={item.id} cartItem={item}/>)}
			</div>
			<Link to='/checkout' >
				<ButtonComponent>Go to checkout</ButtonComponent>
			</Link>
		</div>
	);
};

export default CartDropdownComponent;
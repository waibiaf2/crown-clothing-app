import React from 'react';

import './checkout.styles.scss';

import CheckoutItemComponent from "../../components/checkout-item/checkout-item.component";
import {useSelector} from "react-redux";
import {selectCartItems, selectCartTotal} from "../../store/cart/cart.selector";

const CheckoutComponent = () => {
	const cartItems = useSelector(selectCartItems);
	const cartTotal = useSelector(selectCartTotal);
	return (
		<div className="checkout-container">
			<div className="checkout-header">
				<div className="header-block">
					<span>Product</span>
				</div>
				<div className="header-block">
					<span>Description</span>
				</div>
				<div className="header-block">
					<span>Quantity</span>
				</div>
				<div className="header-block">
					<span>Price</span>
				</div>
				<div className="header-block">
					<span>Remove</span>
				</div>
			</div>
			{
				cartItems.map(cartItem =>{
					return (
						<CheckoutItemComponent
							key={cartItem.id}
							cartItem={cartItem}
						/>
					);
				})
			}
			<span className="total">{`Total: ${cartTotal}`}</span>
		</div>
	);
};

export default CheckoutComponent;

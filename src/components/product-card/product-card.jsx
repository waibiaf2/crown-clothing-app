import React, { useContext } from 'react';
import './product-card.styles.scss';
import ButtonComponent, {BUTTON_TYPE_CLASSES} from '../button/button.component';
import { CartContext } from '../../contexts/cart.context';
import {useDispatch, useSelector} from "react-redux";
import {selectCartItems} from "../../store/cart/cart.selector";
import {addItemToCart} from "../../store/cart/cart.actions";


const ProductCard = ({product}) => {
	const dispatch = useDispatch();
	const {name, price, imageUrl}  = product;
	// const {addItemToCart} = useContext(CartContext);
	const cartItems = useSelector(selectCartItems);
	
	const addProductToCart = () => dispatch(addItemToCart(cartItems,product));
	
	return (
		<div className="product-card-container">
			<img src={imageUrl} alt={`${name}`}/>
			<div className="footer">
				<span className="name">{name}</span>
				<span className="price">{price}</span>
			</div>
			<ButtonComponent
				buttonType={BUTTON_TYPE_CLASSES.inverted}
				onClick={addProductToCart}>
				Add To Cart
			</ButtonComponent>
		</div>
	);
};

export default ProductCard;

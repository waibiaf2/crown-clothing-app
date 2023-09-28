import { createContext, useEffect, useState } from 'react';

const addCartItem = (cartItems,productToAdd) => {
	//find if cartItem contains product to add
	const cartItemExists = cartItems.find(cartItem => cartItem.id === productToAdd.id);
	
	//If found, increment quantity
	if (cartItemExists) {
		return cartItems.map((cartItem) => {
			return cartItem.id === productToAdd.id ?
				{...cartItem, quantity: cartItem.quantity + 1} :
				cartItem;
		});
	}
	
	// new array with modified cartItems / new cart item
	return [...cartItems, {...productToAdd, quantity: 1}];
}

const removeCartItem = (cartItems, cartItemToRemove) => {
	//Find the cartItem to Remove
	const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);

	//Check if quantity is = to 1, then remove the item from the cart
	if (existingCartItem.quantity === 1) {
		return cartItems.filter(cartItem => cartItem.id !== existingCartItem.id);
	}

	//Return back cart items with matching cart item with reduced quantity
	return cartItems.map((cartItem) => {
		return cartItem.id === cartItemToRemove.id ?
			{...cartItem, quantity: cartItem.quantity - 1} :
			cartItem;
	});
};
/*const removeCartItem = (cartItems,productToAdd) => {
	//find if cartItem contains product to add
	const cartItemExists = cartItems.find(cartItem => cartItem.id === productToAdd.id);

	//If found, increment quantity
	if (cartItemExists) {
		return cartItems.map((cartItem) => {
			if ( cartItem.quantity < 1) {
				return cartItems.filter(cartItem => cartItem.id !== cartItemIndex)
			}
			return cartItem.id === productToAdd.id ?
				{...cartItem, quantity: cartItem.quantity - 1} :
				cartItem;
		});
	}

	// new array with modified cartItems / new cart item
	return [...cartItems, {...productToAdd, quantity: 1}];
}*/



export const CartContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => {},
	cartItems:[],
	addItemToCart: () => {},
	removeItemFromCart: () => {},
	cartCount: 0,
});

export const CartContextProvider = ({children}) => {
	const [ isCartOpen, setIsCartOpen ] = useState();
	const [ cartItems, setCartItems ] = useState([]);
	const [ cartCount, setCartCount ] = useState(0);
	
	const addItemToCart = (productToAdd) => {
		setCartItems(addCartItem(cartItems, productToAdd));
	};

	const removeItemFromCart = (cartItemToRemove) => {
		setCartItems(removeCartItem(cartItems, cartItemToRemove))
	}

	useEffect(() => {
		const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
		setCartCount(newCartCount)
	}, [cartItems]);
	
	const value = {
		isCartOpen,
		setIsCartOpen,
		cartItems,
		addItemToCart,
		removeItemFromCart,
		cartCount,
	}
	
	return (
		<CartContext.Provider value={value}>{children}</CartContext.Provider>
	);
};

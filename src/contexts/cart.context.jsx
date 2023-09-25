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

export const CartContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => {},
	cartItems:[],
	addItemToCart: () => {},
	cartCount: 0,
});

export const CartContextProvider = ({children}) => {
	const [ isCartOpen, setIsCartOpen ] = useState();
	const [ cartItems, setCartItems ] = useState([]);
	const [ cartCount, setCartCount ] = useState(0);
	
	const addItemToCart = (productToAdd) => {
		setCartItems(addCartItem(cartItems, productToAdd));
	};
	
	useEffect(() => {
		const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
		setCartCount(newCartCount)
	}, [cartItems]);
	
	const value = {
		isCartOpen,
		setIsCartOpen,
		cartItems,
		addItemToCart,
		cartCount,
	}
	
	return (
		<CartContext.Provider value={value}>{children}</CartContext.Provider>
	);
};

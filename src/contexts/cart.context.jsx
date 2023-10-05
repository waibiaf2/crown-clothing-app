import {createContext, useReducer} from 'react';

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

const clearCartItem = (cartItems, cartItemToClear) => cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);


export const CartContext = createContext({
	isCartOpen: false,
	cartItems:[],
	cartCount: 0,
	cartTotal: 0,
	setIsCartOpen: () => {},
	addItemToCart: () => {},
	removeItemFromCart: () => {},
	clearItemFromCart: () => {},
});

const INITIAL_STATE = {
	isCartOpen: false,
	cartItems:[],
	cartCount: 0,
	cartTotal: 0
}

const cartReducer = (state, action) => {
	const {type, payload} = action;
	
	switch (type) {
		case 'SET_CART_ITEMS':
			return {
				...state,
				...payload
			}
		default:
			throw new Error(`Unhandled type of ${type} in cartReducer`);
	}
}

export const CartContextProvider = ({children}) => {
	const [{cartItems,isCartOpen,cartTotal,cartCount}, dispatch] = useReducer(cartReducer, INITIAL_STATE)
	
	const addItemToCart = (productToAdd) => {
		const newCartItems = addCartItem(cartItems, productToAdd);
		updateCartItemsReducer(newCartItems);
	};

	const removeItemFromCart = (cartItemToRemove) => {
		const newCartItems = removeCartItem(cartItems, cartItemToRemove);
		updateCartItemsReducer(newCartItems);
	}

	const clearItemFromCart = (cartItemToClear) => {
		const newCartItems = clearCartItem(cartItems, cartItemToClear);
		updateCartItemsReducer(newCartItems);
	}
	
	const updateCartItemsReducer = (cartItems) => {
		const newCartCount = cartItems.reduce(
			(total, cartItem) => total + cartItem.quantity, 0
		);
		
		const newCartTotal = cartItems.reduce(
			(total, cartItem) => {
				return total + (cartItem.quantity * cartItem.price)
			}, 0
		);
		
		dispatch({
			type: 'SET_CART_ITEMS',
			payload: {
				cartItems,
				cartTotal: newCartTotal,
				cartCount: newCartCount
			}
		})
	};
	
	const value = {
		isCartOpen:true,
		setIsCartOpen: () => {},
		cartItems,
		cartCount,
		cartTotal,
		addItemToCart,
		removeItemFromCart,
		clearItemFromCart
	}
	
	return (
		<CartContext.Provider value={value}>{children}</CartContext.Provider>
	);
};

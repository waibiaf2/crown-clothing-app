import { createContext, useState } from 'react';

export const CartContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => {},
});

export const CartContextProvider = ({children}) => {
	const [ isCartOpen, setIsCartOpen ] = useState();
	const value = {isCartOpen, setIsCartOpen}
	
	return (
		<CartContext.Provider value={value}>{children}</CartContext.Provider>
	);
};

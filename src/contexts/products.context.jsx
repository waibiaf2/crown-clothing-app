import React, { createContext, useState } from 'react';

import PRODUCTS from '../shop-data.json';

export const ProductsContext = createContext({
	products: [],
	selectedProduct: {},
	SelectProduct: () => {}
});

export const ProductsProvider = ({children}) => {
	const [ products, setProducts ] = useState(PRODUCTS);
	const [selectedProduct, setSelectedProduct] = useState({})
	const SelectProduct =(e)=>{
		e.preventDefault();
		
	}
	const value = {products, selectedProduct,SelectProduct};
	
	return (
		<ProductsContext.Provider value={value}>
			{children}
		</ProductsContext.Provider>
	);
};


import React, { createContext, useState } from 'react';

import PRODUCTS from '../shop-data.json';

const ShopContext = createContext({
	products: [],
});

const ShopProvider = () => {
	const [products, setProducts] = useState(PRODUCTS);
	const value = {products}
	
	return (
		<ShopContext.Provider value={value}></ShopContext.Provider>
	);
};

export default ShopProvider;
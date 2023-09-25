import React, { createContext, useState } from 'react';

import SHOP_DATA from '../shop-data.json';

const ShopContext = createContext([ ...SHOP_DATA ]);
const ShopProvider = () => {
	const [ shopData, setShopData ] = useState(SHOP_DATA);
	
	return (
		<ShopContext.Provider value={shopData}></ShopContext.Provider>
	);
};

export default ShopProvider;
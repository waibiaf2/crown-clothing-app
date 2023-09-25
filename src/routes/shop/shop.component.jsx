import React, { useContext } from 'react';

import './shop.component.scss';

import { ProductsContext } from '../../contexts/products.context';
import ProductCard from '../../components/product-card/product-card';



const ShopComponent = () => {
    const {products} = useContext(ProductsContext);
    console.log(products);
    return (
        <div className='products-container'>
            {
                products.map((product) => (
                   <ProductCard
                       key={product.id}
                       product={product}
                   />
                ))
            }
        </div>
    );
};

export default ShopComponent;
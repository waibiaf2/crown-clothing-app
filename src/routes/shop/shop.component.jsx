import React, { useContext } from 'react';
import { ProductsContext } from '../../contexts/products.context';



const ShopComponent = () => {
    const {products} = useContext(ProductsContext);
    console.log(products);
    return (
        <div>
            {
                products.map(({id,name}) => (
                    <div key={id}>
                        <h2>{name}</h2>
                    </div>
                ))
            }
        </div>
    );
};

export default ShopComponent;
import React from 'react';

import './category-preview.styles.scss';

import ProductCard from "../product-card/product-card";

const CategoryPreviewComponent = ({title, products}) => {
    return (
        <div className="category-preview-container">
            <h2 className="title">
                <span>{title.toUpperCase()}</span>
            </h2>
            <div className="preview">
                {
                    products
                        .filter((_, idx) => idx < 4)
                        .map( (product) => <ProductCard key={product.id} product={product}/>)
                }
            </div>
        </div>
    );
};

export default CategoryPreviewComponent;
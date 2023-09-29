import React, {useContext, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'

import "./category.styles.scss"

import {CategoriesContext} from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card";
const CategoryComponent = () => {
    const {category} = useParams();
    const {categoriesMap} = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap]);

    return (
        <div className="category-container">
            {
                products &&
                products.map((product) => <ProductCard key={product.id} product={product}/>)
            }
        </div>
    );
};

export default CategoryComponent;
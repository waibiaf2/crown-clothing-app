import React, {Fragment, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import {useSelector} from "react-redux";

import "./category.styles.scss"
import ProductCard from "../../components/product-card/product-card";

import {selectCategoriesIsLoading, selectCategoriesMap} from "../../store/categories/category.selector";
import SpinnerComponent from "../../components/spinner/spinner.component";

const CategoryComponent = () => {
    const {category} = useParams();
    console.log('render/re-rendering category component');
    const categoriesMap = useSelector(selectCategoriesMap);
	const isLoading = useSelector(selectCategoriesIsLoading);
    const [products, setProducts] = useState(categoriesMap[category]);
    
    useEffect(() => {
        console.log('Effect fired calling setProducts');
        setProducts(categoriesMap[category])
    }, [category, categoriesMap]);

    return (
        <Fragment>
            <h2 className="category-title">{category.toUpperCase()}</h2>
			{isLoading ? <SpinnerComponent/> : (
				<div className="category-container">
					{
						products &&
						products.map(
							(product) => <ProductCard key={product.id} product={product}/>
						)
					}
				</div>
			)}
        </Fragment>
    );
};

export default CategoryComponent;

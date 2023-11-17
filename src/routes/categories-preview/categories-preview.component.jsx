import React, {Fragment} from 'react';

import CategoryPreviewComponent from "../../components/category-preview/category-preview.component";
import {useSelector} from "react-redux";
import {selectCategoriesIsLoading, selectCategoriesMap} from "../../store/categories/category.selector";
import SpinnerComponent from "../../components/spinner/spinner.component";

const CategoriesPreviewComponent = () => {
    const categoriesMap = useSelector(selectCategoriesMap);
	const isLoading = useSelector(selectCategoriesIsLoading);
	
    return (
        <Fragment>
			{isLoading ?
				<SpinnerComponent/> :
				(
					Object.keys(categoriesMap).map(title => {
						const products = categoriesMap[title];
						// console.log(products);
						return <CategoryPreviewComponent key={title} title={title} products={products}/>
					})
				)
			}
        </Fragment>
    );
};

export default CategoriesPreviewComponent;

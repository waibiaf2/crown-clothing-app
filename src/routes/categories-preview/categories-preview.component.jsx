import React, {Fragment} from 'react';

import CategoryPreviewComponent from "../../components/category-preview/category-preview.component";
import {useSelector} from "react-redux";
import {selectCategoriesMap} from "../../store/categories/category.selector";

const CategoriesPreviewComponent = () => {
    const categoriesMap = useSelector(selectCategoriesMap);
	
    return (
        <Fragment>
            {
                Object.keys(categoriesMap).map(title => {
                    const products = categoriesMap[title];
                    // console.log(products);
                    return <CategoryPreviewComponent key={title} title={title} products={products}/>
                })
            }
        </Fragment>
    );
};

export default CategoriesPreviewComponent;

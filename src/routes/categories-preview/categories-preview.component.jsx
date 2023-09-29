import React, {Fragment, useContext} from 'react';

import { CategoriesContext } from '../../contexts/categories.context';

import CategoryPreviewComponent from "../../components/category-preview/category-preview.component";

const CategoriesPreviewComponent = () => {
    const {categoriesMap} = useContext(CategoriesContext);
    return (
        <Fragment>
            {
                Object.keys(categoriesMap).map(title => {
                    const products = categoriesMap[title];
                    console.log(products);
                    return <CategoryPreviewComponent key={title} title={title} products={products}/>
                })
            }
        </Fragment>
    );
};

export default CategoriesPreviewComponent;
import React, {useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import {useDispatch} from "react-redux";

import './shop.styles.scss';

import CategoriesPreviewComponent from "../categories-preview/categories-preview.component";
import CategoryComponent from "../category/category.component";
import {fetchCategoriesStart} from "../../store/categories/category.actions";

const ShopComponent = () => {
    const dispatch = useDispatch();
    
    useEffect(() =>{
        const getCategoriesMap =  () => {
			dispatch(fetchCategoriesStart());
        }
        getCategoriesMap();
    },[]);
    
    return (
        <Routes>
            <Route index element={<CategoriesPreviewComponent/>}/>
            <Route path=":category" element={<CategoryComponent/>}/>
        </Routes>
    );
};

export default ShopComponent;

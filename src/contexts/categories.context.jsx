/*
import React, {createContext, useEffect, useReducer, useState} from 'react';

import {getCategoriesAndDocuments} from "../utils/firebase/firebase.utils";
import {createAction} from "../utils/reducer/reducer.utils";

export const CategoriesContext = createContext({
	categoriesMap: {},
});


const INITIAL_STATE = {
	categoriesMap: {},
}
const CATEGORIES_TYPES = {
	GET_CATEGORIES_MAP: 'GET_CATEGORIES_MAP',
}

const categoriesReducer = (state, action) => {
	const {type, payload} = action;
	
	switch (type) {
		case CATEGORIES_TYPES.GET_CATEGORIES_MAP:
			return {
				...state,
				...payload
			}
		default:
			throw Error(`Unhandled type of ${type} in categoriesReducer`);
	}
}



export const CategoriesProvider = ({children}) => {
	// const [{categoriesMap}, dispatch] = useReducer(categoriesReducer, INITIAL_STATE);
	
	
/!*	useEffect(() =>{
		const getCategoriesMap = async () => {
			const categoryMap = await getCategoriesAndDocuments();
			updateCategoriesMap(categoryMap);
		}
		getCategoriesMap();
	},[]);
	
	const updateCategoriesMap = (categoriesMap) => {
		dispatch(
			createAction(CATEGORIES_TYPES.GET_CATEGORIES_MAP, {
				categoriesMap
			})
		);
	}*!/

	const value = {categoriesMap};
	
	return (
		<CategoriesContext.Provider value={value}>
			{children}
		</CategoriesContext.Provider>
	);
};

*/

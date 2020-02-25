import { handleActions } from 'redux-actions'

import {FETCH_MENU, FETCH_MENU_SUCCESS, FETCH_MENU_FAILURE} from './actions';

/**
 * Setting initial state as it might not be availble before api call
 */
export const initialState = {
    error: null,
    menu: []
}

const menuReducer = handleActions ({
    [FETCH_MENU]: (state) => ({
        ...state, 
        error: null
    }),
    [FETCH_MENU_SUCCESS]: (state, action) => 
    {   
        // Destructuring the json object
        const { categoriesArray, itemsByCategory, items} = action.payload.data
        // const { bakery } = itemsByCategory.Bakery
        
        return ({
        ...state,
        error: null,
        categories: categoriesArray,
        items: items,
        itemsByCategory: itemsByCategory,
        // bakery: bakery
    })},
    [FETCH_MENU_FAILURE]: (state, action) => ({
        ...initialState,
        error: action.payload
    })
}, initialState)

export default menuReducer
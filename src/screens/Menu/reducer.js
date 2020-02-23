import { handleActions } from 'redux-actions'

import {FETCH_MENU, FETCH_MENU_SUCCESS, FETCH_MENU_FAILURE} from './actions';

export const initialState = {
    error: null,
    menu: []
}

const menuReducer = handleActions ({
    [FETCH_MENU]: state => ({
        ...state, 
        error: null
    }),
    [FETCH_MENU_SUCCESS]: (state, action) => ({
        ...state,
        error: null,
        menu: action.payload.data
    }),
    [FETCH_MENU_FAILURE]: (state, action) => ({
        ...initialState,
        error: action.payload
    })
}, initialState)

export default menuReducer
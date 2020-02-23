import { createAction } from 'redux-actions'

export const FETCH_MENU = 'FETCH_MENU'
export const FETCH_MENU_SUCCESS = 'FETCH_MENU_SUCCESS'
export const FETCH_MENU_FAILURE = 'FETCH_MENU_FAILURE'

export const fetchMenu = createAction(FETCH_MENU)
export const fetchMenuSuccess = createAction(FETCH_MENU_SUCCESS)
export const fetchMenuFailure = createAction(FETCH_MENU_FAILURE)
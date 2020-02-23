import {createSagaMiddleware} from 'redux-saga'
import {createLogger} from 'redux-logger'
import {applyMiddleware, createStore} from 'redux'
import menuReducer, { initialState } from './screens/Menu/reducer'
import rootSaga from './screens/Menu/saga'
import createSagas from './saga'

let sagaMiddleware
/**
 * Create the saga middleware
 */
// sagaMiddleware = createSagaMiddleware()

/**
 * Mount it on the Store
 */

 const getMiddleWares = () => {
     sagaMiddleware = createSagaMiddleware()
     const baseMiddleWare = [sagaMiddleware]
     return baseMiddleWare
 }

const configureStore = (initialState = {}) => {
    const store = createStore(menuReducer, initialState)
    sagaMiddleware.run(createSagas)
    return store
}

// const store = createStore(
//     menuReducer, 
//     applyMiddleware(
//         sagaMiddleware, 
//         )
// )
/**
 * Run the Saga
 */
// sagaMiddleware.run(rootSaga)

// store.dispatch({type: 'Hello'})
// const configureStore = () => {
//     const store = store
// }


export default configureStore
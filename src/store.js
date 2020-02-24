import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import {applyMiddleware, createStore, compose} from 'redux'
import menuReducer, { initialState } from './screens/Menu/reducer'
import rootSaga from './screens/Menu/saga'
import createSagas from './saga'

/**
 * Create the saga middleware
 */
const sagaMiddleware = createSagaMiddleware()

/**
 * Adding this for debugging, either use extension or compose
 */
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/**
 * Since create store can have only two parameter, add middleware and logger into enhancer
 */
const enhancer = composeEnhancer(
  applyMiddleware(sagaMiddleware, 
    logger)
  // other store enhancers if any
);

/**
 *  Making store: Mount reducer and enhancer to the store.
 */ 
const store = createStore(
    menuReducer, 
    enhancer
)

/**
 * Run the Saga
 */
sagaMiddleware.run(createSagas)

export default store
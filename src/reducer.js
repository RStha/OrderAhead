import { combineReducers } from 'redux';
// Imports: Reducers
import menuReducer from './screens/Menu/reducer';
// Redux: Root Reducer
const rootReducer = combineReducers({
  menu: menuReducer,
});
// Exports
export default rootReducer;
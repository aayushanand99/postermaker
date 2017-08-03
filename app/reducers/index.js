import { combineReducers } from 'redux';
//import booksReducer from './booksReducer'
//import reducers
import reducer1 from './reducer1'
const rootReducer= combineReducers({
	//app state json fetching data from reducers
// state: (state = {}) => state
state1:reducer1
});
export default rootReducer;
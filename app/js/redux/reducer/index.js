import { combineReducers } from 'redux';
import myApp from './stateApp'
const rootReducer = combineReducers({
  myApp: myApp,
});

export default rootReducer;

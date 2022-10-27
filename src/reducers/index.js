import handleFormReducer from './barberform';
import handleCheckReducer from './checkBox';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    handleFormReducer,
    handleCheckReducer
})


export default rootReducer;
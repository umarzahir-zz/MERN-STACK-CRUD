import listReducer from './listReducer';
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    list: listReducer
})

export default rootReducer